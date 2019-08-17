import Button from 'apsl-react-native-button';
import diwtn from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';
import isPast from 'date-fns/is_past';
import isToday from 'date-fns/is_today';
import subMinutes from 'date-fns/sub_minutes';
import React from 'react';
import {
    Picker,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { getFontScale, getUIScale } from '../displayScale';

export default class AlertSettings extends React.Component {
    render() {
        const sightings = this.props.sightings.length ? (
            this.props.sightings
                .filter(sighting => sighting.when)
                .map((sighting, index) => {
                    let style = styles.sighting;
                    let relative = '';
                    if (isToday(sighting.when)) {
                        style = styles.todaySighting;
                    }
                    if (isPast(sighting.when)) {
                        style = styles.pastSighting;
                        relative = `${diwtn(sighting.when)} ago`;
                        relative =
                            relative.charAt(0).toUpperCase() +
                            relative.slice(1);
                    } else {
                        relative = `In ${diwtn(sighting.when)}`;
                    }
                    return (
                        <TouchableOpacity
                            style={styles.sightingContainer}
                            key={JSON.stringify(sighting)}
                            onPress={() => {
                                this.props.toggleSightingExpand(index);
                            }}
                        >
                            <View>
                                <View style={styles.inlineView}>
                                    <Text style={style}>
                                        {`${format(
                                            sighting.when,
                                            'Do MMM, YYYY [at] h:mm A'
                                        )}`}{' '}
                                    </Text>
                                    {sighting.expanded ? (
                                        <Icon
                                            name="angle-up"
                                            size={16}
                                            color={Colors.text}
                                        />
                                    ) : (
                                        <Icon
                                            name="angle-down"
                                            size={16}
                                            color={Colors.text}
                                        />
                                    )}
                                </View>
                                {sighting.expanded && (
                                    <Text style={styles.metaText}>
                                        Visible for {sighting.duration}
                                        {'\n'}
                                        Appears at {sighting.approach}
                                        {'\n'}
                                        Reaches max altitude of{' '}
                                        {sighting.maxElevation}
                                        {'\n'}
                                        Disappears at {sighting.departure}
                                    </Text>
                                )}
                                {this.props.notification &&
                                    !isPast(sighting.when) && (
                                        <Text style={styles.notificationText}>
                                            Alert set for{' '}
                                            {`${format(
                                                subMinutes(
                                                    sighting.when,
                                                    this.props.minutes
                                                ),
                                                'Do MMM [at] h:mm A'
                                            )}`}
                                        </Text>
                                    )}
                            </View>
                            <Text style={style}>{relative}</Text>
                        </TouchableOpacity>
                    );
                })
        ) : (
            <View style={styles.singleRowControl}>
                <Text style={styles.disclaimer}>
                    There are no upcoming sightings in your area (in accordance
                    with data provided by NASA){'\n'}
                    Check again after two weeks.
                </Text>
            </View>
        );
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.singleRowControl}>
                    <Text style={styles.text}>
                        Your location is set to : {'\n'}
                        {this.props.location.title.length > 25
                            ? `${this.props.location.title.substring(0, 22)}...`
                            : this.props.location.title}
                    </Text>
                    <Button
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={this.props.selectLocation}
                    >
                        CHANGE
                    </Button>
                </View>
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
    container: {
        paddingHorizontal: getUIScale(10),
        paddingVertical: getUIScale(20)
    },
    singleRowControl: {
        flex: 1,
        padding: getUIScale(20),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(20),
        color: Colors.text
    },
    button: {
        backgroundColor: Colors.accent,
        width: getUIScale(110),
        marginLeft: getUIScale(10),
        marginBottom: 0,
        height: getUIScale(40),
        marginTop: getUIScale(8)
    },
    buttonText: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(16),
        color: Colors.text
    },
    disclaimer: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(15),
        color: Colors.error
    },
    picker: {
        flex: 0.9,
        color: Colors.accent,
        backgroundColor: Colors.darkPrimary,
        borderRadius: getUIScale(5)
    },
    heading: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(22),
        color: Colors.text,
        textAlign: 'center',
        width: '100%'
    },
    sighting: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(15),
        color: Colors.text
    },
    pastSighting: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(15),
        color: Colors.past
    },
    todaySighting: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(15),
        color: Colors.today
    },
    sightingContainer: {
        flex: 1,
        padding: getUIScale(5),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    notificationText: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(13),
        color: Colors.accent
    },
    metaText: {
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(11),
        color: Colors.text
    },
    inlineView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
