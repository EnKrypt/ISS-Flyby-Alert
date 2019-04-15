import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SecureStore, Notifications, BackgroundFetch, TaskManager } from 'expo';
import { handleError } from '../handlers';
import AlertSettings from './AlertSettings';
import Colors from '../constants/Colors';
import { getSightings } from '../task';

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
                    await this.addNotifications(
                        this.state.sightings,
                        this.state.minutesAgo
                    );
                    await BackgroundFetch.registerTaskAsync('sync');
                } else {
                    await this.removeNotifications();
                    await BackgroundFetch.unregisterTaskAsync('sync');
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
                await this.addNotifications(this.state.sightings, minutes);
            }
        );
    };

    removeNotifications = async () => {
        await Notifications.cancelAllScheduledNotificationsAsync();
        await SecureStore.deleteItemAsync('scheduled');
    };

    getSightings = getSightings;

    addNotifications = addNotifications;

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
