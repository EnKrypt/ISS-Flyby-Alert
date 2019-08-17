import AsyncStorage from '@react-native-community/async-storage';
import differenceInMinutes from 'date-fns/difference_in_minutes';
import format from 'date-fns/format';
import isPast from 'date-fns/is_past';
import parse from 'date-fns/parse';
import subMinutes from 'date-fns/sub_minutes';
import BackgroundFetch from 'react-native-background-fetch';
import Notifications from 'react-native-push-notification';
import Colors from './constants/Colors';
import { handleError } from './handlers';

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
                try {
                    const date = /Date\:(.*?)\&lt/gm
                        .exec(res)[1]
                        .trim()
                        .replace(/\,/gm, '');
                    const time = /Time\:(.*?)\&lt/gm.exec(res)[1].trim();
                    return {
                        when: parse(`${date}, ${time}`),
                        duration: /Duration\:(.*?)\&lt/gm.exec(res)[1].trim(),
                        maxElevation: /Elevation\:(.*?)\&lt/gm
                            .exec(res)[1]
                            .trim()
                            .replace('&#176;', '°'),
                        approach: /Approach\:(.*?)\&lt/gm
                            .exec(res)[1]
                            .trim()
                            .replace('&#176;', '°'),
                        departure: /Departure\:(.*?)\&lt/gm
                            .exec(res)[1]
                            .trim()
                            .replace('&#176;', '°')
                    };
                } catch (e) {
                    console.warn(
                        'Parsing error. Looks like NASA API sent a weird response.'
                    );
                    return {};
                }
            });
            await AsyncStorage.setItem('sightings', JSON.stringify(sightings));
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
    let id = 1000;
    for (const sighting of sightings) {
        if (sighting.when && !isPast(sighting.when)) {
            // This module has poor documentation on fetching IDs,
            // so we're going to generate our own by auto incrementing
            id = id + 1;
            let timeToSighting = minutes;
            if (differenceInMinutes(sighting.when, new Date()) < minutes) {
                timeToSighting = differenceInMinutes(sighting.when, new Date());
            }
            Notifications.localNotificationSchedule({
                id: '' + id,
                title: `Scheduled ISS sighting in ${timeToSighting} minutes`,
                message: 'Expand to see details',
                bigText: `\nSighting begins at ${format(
                    sighting.when,
                    'Do MMM, h:mm A'
                )} and will remain visible for ${
                    sighting.duration
                }.\nIt will appear at ${
                    sighting.approach
                }, reach a max altitude of ${
                    sighting.maxElevation
                }, and disappear at ${sighting.departure}.
                `,
                subText: 'Upcoming Sighting',
                largeIcon: 'ic_launcher',
                smallIcon: 'ic_notification',
                color: Colors.accent,
                date: subMinutes(sighting.when, minutes)
            });
            ids.push(id);
        }
    }
    await AsyncStorage.setItem('scheduled', JSON.stringify(ids));
};

export const removeNotifications = async () => {
    await AsyncStorage.removeItem('scheduled');
    Notifications.cancelAllLocalNotifications();
};

export const task = async () => {
    try {
        const location = JSON.parse(await AsyncStorage.getItem('location'));
        const notification = JSON.parse(
            await AsyncStorage.getItem('notification')
        );
        const minutesAgo = JSON.parse(await AsyncStorage.getItem('minutesAgo'));
        if (notification && location && minutesAgo) {
            let oldSightings = [];
            try {
                oldSightings = JSON.parse(
                    await AsyncStorage.getItem('sightings')
                );
            } catch (err) {}
            const sightings = await getSightings(location);
            if (JSON.stringify(sightings) !== JSON.stringify(oldSightings)) {
                await removeNotifications();
                await addNotifications(sightings, minutesAgo);
                BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA);
            } else {
                BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NO_DATA);
            }
        } else {
            BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NO_DATA);
        }
    } catch (err) {
        handleError(err);
        BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_FAILED);
    }
};

export const purgeStorage = async () => {
    await AsyncStorage.removeItem('location');
    await AsyncStorage.removeItem('notification');
    await AsyncStorage.removeItem('minutesAgo');
    await AsyncStorage.removeItem('sightings');
    await AsyncStorage.removeItem('scheduled');
};
