import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import BackgroundFetch from 'react-native-background-fetch';
import Colors from '../constants/Colors';
import { handleError } from '../handlers';
import { addNotifications, getSightings, removeNotifications } from '../task';
import AlertSettings from './AlertSettings';
import LocationPicker from './LocationPicker';

export default class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            location: undefined,
            notification: false,
            minutesAgo: 5,
            sightings: [],
            showLocationPicker: false
        };
    }

    async componentDidMount() {
        try {
            const location = JSON.parse(await AsyncStorage.getItem('location'));
            const notification = JSON.parse(
                await AsyncStorage.getItem('notification')
            );
            const minutesAgo = JSON.parse(
                await AsyncStorage.getItem('minutesAgo')
            );
            if (location) {
                this.setState(
                    {
                        location: location,
                        notification: notification || false,
                        minutesAgo: minutesAgo || 5
                    },
                    async () => {
                        let oldSightings = [];
                        try {
                            oldSightings = JSON.parse(
                                await AsyncStorage.getItem('sightings')
                            );
                        } catch (err) {}
                        const sightings = await this.getSightings(location);
                        if (
                            notification &&
                            JSON.stringify(sightings) !==
                                JSON.stringify(oldSightings)
                        ) {
                            await removeNotifications();
                            await addNotifications(sightings, minutesAgo);
                        }
                        this.setState({
                            sightings: sightings,
                            loaded: true
                        });
                    }
                );
            } else {
                await AsyncStorage.setItem(
                    'notification',
                    JSON.stringify(false)
                );
                await AsyncStorage.setItem('minutesAgo', JSON.stringify(5));
                await this.selectLocation();
            }
        } catch (err) {
            handleError(err);
        }
    }

    selectLocation = () => {
        this.setState({
            showLocationPicker: true,
            loaded: false
        });
    };

    setLocation = async locationData => {
        this.setState(
            {
                showLocationPicker: false
            },
            async () => {
                await AsyncStorage.setItem(
                    'location',
                    JSON.stringify(locationData)
                );
                this.setState(
                    {
                        location: locationData
                    },
                    async () => {
                        const sightings = await this.getSightings(locationData);
                        this.setState(
                            {
                                sightings: sightings,
                                loaded: true
                            },
                            async () => {
                                if (this.state.notification) {
                                    await this.removeNotifications();
                                    await this.addNotifications(
                                        this.state.sightings,
                                        this.state.minutesAgo
                                    );
                                }
                            }
                        );
                    }
                );
            }
        );
    };

    setNotification = value => {
        this.setState(
            {
                notification: value
            },
            async () => {
                await AsyncStorage.setItem(
                    'notification',
                    JSON.stringify(value)
                );
                if (value) {
                    await this.addNotifications(
                        this.state.sightings,
                        this.state.minutesAgo
                    );
                    BackgroundFetch.start();
                } else {
                    await this.removeNotifications();
                    BackgroundFetch.stop();
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
                await AsyncStorage.setItem(
                    'minutesAgo',
                    JSON.stringify(minutes)
                );
                await this.removeNotifications();
                await this.addNotifications(this.state.sightings, minutes);
            }
        );
    };

    toggleSightingExpand = sightingIndex => {
        const copiedSightings = this.state.sightings.slice();
        copiedSightings[sightingIndex].expanded = !copiedSightings[
            sightingIndex
        ].expanded;
        this.setState({
            sightings: copiedSightings
        });
    };

    getSightings = getSightings;

    addNotifications = addNotifications;

    removeNotifications = removeNotifications;

    render() {
        return this.state.showLocationPicker ? (
            <View style={styles.container}>
                <LocationPicker
                    selectMarker={async marker => {
                        await this.setLocation({
                            country: marker[4],
                            region: marker[3],
                            city: marker[5],
                            title: marker[0]
                        });
                    }}
                />
            </View>
        ) : this.state.loaded ? (
            <View style={styles.container}>
                <AlertSettings
                    location={this.state.location}
                    notification={this.state.notification}
                    minutes={this.state.minutesAgo}
                    setNotification={this.setNotification}
                    setMinutes={this.setMinutes}
                    selectLocation={this.selectLocation}
                    toggleSightingExpand={this.toggleSightingExpand}
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
        paddingHorizontal: 0,
        paddingVertical: 0,
        backgroundColor: Colors.primary,
        justifyContent: 'center'
    }
});
