import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SecureStore } from 'expo';
import parse from 'date-fns/parse';
import { handleError } from '../handlers';
import AlertSettings from './AlertSettings';
import Colors from '../constants/Colors';

export default class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            location: undefined,
            notification: false,
            minutesAgo: 5,
            sightings: []
        };
    }

    async componentDidMount() {
        try {
            const location = JSON.parse(
                await SecureStore.getItemAsync('location')
            );
            const notification = JSON.parse(
                await SecureStore.getItemAsync('notification')
            );
            const minutesAgo = JSON.parse(
                await SecureStore.getItemAsync('minutesAgo')
            );
            if (location) {
                this.setState(
                    {
                        location: location,
                        notification: notification || false,
                        minutesAgo: minutesAgo || 5
                    },
                    async () => {
                        const sightings = await this.getSightings(location);
                        this.setState({
                            sightings: sightings,
                            loaded: true
                        });
                    }
                );
            } else {
                // TODO: Replace hard-coded location with Location Selector Screen
                const initialLocationData = {
                    country: 'India',
                    region: 'None',
                    city: 'Bengaluru'
                };
                await SecureStore.setItemAsync(
                    'location',
                    JSON.stringify(initialLocationData)
                );
                await SecureStore.setItemAsync(
                    'notification',
                    JSON.stringify(false)
                );
                await SecureStore.setItemAsync('minutesAgo', JSON.stringify(5));
                this.setState(
                    {
                        location: initialLocationData
                    },
                    async () => {
                        const sightings = await this.getSightings(location);
                        this.setState({
                            sightings: sightings,
                            loaded: true
                        });
                    }
                );
            }
        } catch (err) {
            handleError(err);
        }
    }

    getSightings = async location => {
        const query = await fetch(
            `https://spotthestation.nasa.gov/sightings/xml_files/${
                location.country
            }_${location.region}_${location.city}.xml`
        );
        if (query.ok) {
            const response = await query.text();
            const mappedResponse = response
                .match(/\<item\>([\S\s]*?)\<\/item\>/gm)
                .map(match =>
                    match
                        .match(
                            /\<description\>([\S\s]*?)\<\/description\>/gm
                        )[0]
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
            return sightings;
        } else {
            return [];
        }
    };

    setNotification = value => {
        this.setState(
            {
                notification: value
            },
            async () => {
                await SecureStore.setItemAsync(
                    'notification',
                    JSON.stringify(value)
                );
                if (value) {
                    await this.addNotifications(this.state.minutesAgo);
                } else {
                    await this.removeNotifications();
                }
            }
        );
    };

    setMinutes = minutes => {
        this.setState(
            {
                minutesAgo: minutes
            },
            async () => {
                await SecureStore.setItemAsync(
                    'minutesAgo',
                    JSON.stringify(minutes)
                );
                await this.removeNotifications();
                await this.addNotifications(minutes);
            }
        );
    };

    async removeNotifications() {}

    async addNotifications(minutes) {}

    render() {
        return this.state.loaded ? (
            <View style={styles.container}>
                <AlertSettings
                    location={this.state.location}
                    notification={this.state.notification}
                    minutes={this.state.minutesAgo}
                    setNotification={this.setNotification}
                    setMinutes={this.setMinutes}
                    sightings={this.state.sightings}
                />
            </View>
        ) : (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={Colors.accent} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
        backgroundColor: Colors.primary,
        justifyContent: 'center'
    }
});
