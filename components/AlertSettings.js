import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Switch,
    Picker,
    ScrollView
} from 'react-native';
import Colors from '../constants/Colors';
import format from 'date-fns/format';
import diwtn from 'date-fns/distance_in_words_to_now';
import isPast from 'date-fns/is_past';
import isToday from 'date-fns/is_today';
import subMinutes from 'date-fns/sub_minutes';

export default class AlertSettings extends React.Component {
    render() {
        const sightings = this.props.sightings.map(sighting => {
            let style = styles.sighting;
            let relative = '';
            if (isToday(sighting.when)) {
                style = styles.todaySighting;
            }
            if (isPast(sighting.when)) {
                style = styles.pastSighting;
                relative = `${diwtn(sighting.when)} ago`;
                relative = relative.charAt(0).toUpperCase() + relative.slice(1);
            } else {
                relative = `In ${diwtn(sighting.when)}`;
            }
            return (
                <View
                    style={styles.sightingContainer}
                    key={JSON.stringify(sighting)}
                >
                    <View>
                        <Text style={style}>
                            {`${format(
                                sighting.when,
                                'Do MMM, YYYY [at] H:mm A'
                            )}`}
                        </Text>
                        {this.props.notification && !isPast(sighting.when) && (
                            <Text style={styles.notificationText}>
                                Alert set for{' '}
                                {`${format(
                                    subMinutes(
                                        sighting.when,
                                        this.props.minutes
                                    ),
                                    'Do MMM [at] H:mm A'
                                )}`}
                            </Text>
                        )}
                    </View>
                    <Text style={style}>{relative}</Text>
                </View>
            );
        });
        return (
            <ScrollView style={styles.container}>
                <View style={styles.singleRowControl}>
                    <Text style={styles.text}>Alerts: </Text>
                    <Switch
                        value={this.props.notification}
                        onValueChange={this.props.setNotification}
                    />
                </View>
                {this.props.notification ? (
                    <View style={styles.singleRowControl}>
                        <Text style={styles.text}>Send notifications: </Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.props.minutes}
                            onValueChange={this.props.setMinutes}
                        >
                            <Picker.Item label="1 minute before" value={1} />
                            <Picker.Item label="5 minutes before" value={5} />
                            <Picker.Item label="10 minutes before" value={10} />
                            <Picker.Item label="30 minutes before" value={30} />
                            <Picker.Item label="1 hour before" value={60} />
                            <Picker.Item label="2 hours before" value={120} />
                            <Picker.Item label="5 hours before" value={300} />
                        </Picker>
                    </View>
                ) : (
                    <View style={styles.singleRowControl}>
                        <Text style={styles.disclaimer}>
                            Turn Alerts on to receive notifications just before
                            a flyby is visible from your selected location
                        </Text>
                    </View>
                )}
                <View style={styles.singleRowControl}>
                    <Text style={styles.heading}>Forecasted Sightings</Text>
                </View>
                {sightings}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    singleRowControl: {
        flex: 1,
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'Signika',
        fontSize: 20,
        color: Colors.text
    },
    disclaimer: {
        fontFamily: 'Signika',
        fontSize: 15,
        color: Colors.error
    },
    picker: {
        flex: 0.9,
        color: Colors.accent,
        backgroundColor: Colors.darkPrimary,
        borderRadius: 5
    },
    heading: {
        fontFamily: 'Signika',
        fontSize: 22,
        color: Colors.text,
        textAlign: 'center',
        width: '100%'
    },
    sighting: {
        fontFamily: 'Signika',
        fontSize: 15,
        color: Colors.text
    },
    pastSighting: {
        fontFamily: 'Signika',
        fontSize: 15,
        color: Colors.past
    },
    todaySighting: {
        fontFamily: 'Signika',
        fontSize: 15,
        color: Colors.today
    },
    sightingContainer: {
        flex: 1,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notificationText: {
        fontFamily: 'Signika',
        fontSize: 13,
        color: Colors.accent
    }
});
