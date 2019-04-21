import { SecureStore, Notifications, BackgroundFetch } from 'expo';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import subMinutes from 'date-fns/sub_minutes';
import { handleError } from './handlers';
import Colors from './constants/Colors';

export const getSightings = async location => {
    const query = await fetch(
        `https://spotthestation.nasa.gov/sightings/xml_files/${
            location.country
        }_${location.region}_${location.city}.xml`
    );
    if (query.ok) {
        const response = await query.text();
        // I am winging the manual XML parsing happening here.
        // If you came here for the ugly regex expressions,
        // I promise I won't tell anyone your dirty perversions.
        const existingSightings = response.match(
            /\<item\>([\S\s]*?)\<\/item\>/gm
        );
        if (existingSightings) {
            const mappedResponse = existingSightings.map(match =>
                match
                    .match(/\<description\>([\S\s]*?)\<\/description\>/gm)[0]
                    .substring(13)
                    .slice(0, -14)
                    .trim()
            );
            const sightings = mappedResponse.map(res => {
                const exploded = res.split(' ');
                const date = [
                    exploded[1],
                    exploded[2],
                    exploded[3],
                    exploded[4]
                ]
                    .join(' ')
                    .replace(/\,/gm, '');
                const time = [exploded[6], exploded[7]].join(' ');
                return {
                    when: parse(`${date}, ${time}`),
                    duration: +exploded[9],
                    maxElevation: exploded[13].replace('&#176;', '°'),
                    approach: [
                        exploded[15].replace('&#176;', '°'),
                        exploded[16],
                        exploded[17]
                    ].join(' '),
                    departure: [
                        exploded[19].replace('&#176;', '°'),
                        exploded[20],
                        exploded[21]
                    ].join(' ')
                };
            });
            await SecureStore.setItemAsync(
                'sightings',
                JSON.stringify(sightings)
            );
            return sightings;
        } else {
            return [];
        }
    } else {
        return [];
    }
};

export const addNotifications = async (sightings, minutes) => {
    const ids = [];
    for (const sighting of sightings) {
        const id = await Notifications.scheduleLocalNotificationAsync(
            {
                title: `ISS Sighting scheduled in another ${minutes} minutes`,
                body: `\nSighting begins at ${format(
                    sighting.when,
                    'Do MMM, H:mm A'
                )} and will remain visible for ${
                    sighting.duration
                } minutes.\nIt will appear at ${
                    sighting.approach
                }, reach a max altitude of ${
                    sighting.maxElevation
                }, and disappear at ${sighting.departure}.
            `,
                android: {
                    icon: './assets/icon.png',
                    color: Colors.darkPrimary
                }
            },
            {
                time: subMinutes(sighting.when, minutes)
            }
        );
        ids.push(id);
    }
    await SecureStore.setItemAsync('scheduled', JSON.stringify(ids));
};

export const task = async () => {
    try {
        const location = JSON.parse(await SecureStore.getItemAsync('location'));
        const notification = JSON.parse(
            await SecureStore.getItemAsync('notification')
        );
        const minutesAgo = JSON.parse(
            await SecureStore.getItemAsync('minutesAgo')
        );
        if (notification && location && minutesAgo) {
            let oldSightings = [];
            try {
                oldSightings = JSON.parse(
                    await SecureStore.getItemAsync('sightings')
                );
            } catch (err) {}
            const sightings = getSightings(location);
            if (JSON.stringify(sightings) !== JSON.stringify(oldSightings)) {
                await addNotifications(sightings, minutesAgo);
                return BackgroundFetch.Result.NewData;
            } else {
                return BackgroundFetch.Result.NoData;
            }
        }
    } catch (err) {
        handleError(err);
        return BackgroundFetch.Result.Failed;
    }
};

export const purgeStorage = async () => {
    await SecureStore.deleteItemAsync('location');
    await SecureStore.deleteItemAsync('notification');
    await SecureStore.deleteItemAsync('minutesAgo');
    await SecureStore.deleteItemAsync('sightings');
    await SecureStore.deleteItemAsync('scheduled');
};
