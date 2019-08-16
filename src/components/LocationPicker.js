import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import { getUIScale, getFontScale } from '../displayScale';
import markers from '../markers';

export default class LocationPicker extends React.Component {
    constructor() {
        super();
        this.timeoutID = undefined;
        this.state = {
            filteredMarkers: markers
        };
    }

    debouncedFilter = text => {
        clearTimeout(this.timeoutID);
        this.timeoutID = setTimeout(() => {
            this.setState({
                filteredMarkers: markers.filter(marker =>
                    marker[0].toLowerCase().includes(text.toLowerCase().trim())
                )
            });
        }, 250);
    };

    render() {
        return (
            <>
                <View style={styles.search}>
                    <Text style={styles.accenttext}>
                        Select your location to continue
                    </Text>
                </View>
                <View style={styles.search}>
                    <TextInput
                        style={styles.input}
                        placeholder="Filter"
                        placeholderTextColor={Colors.placeholder}
                        onChangeText={this.debouncedFilter}
                    />
                    <Icon name="search" size={20} color={Colors.text} />
                </View>
                <FlatList
                    style={styles.list}
                    data={this.state.filteredMarkers.sort((a, b) => {
                        if (a[0].toUpperCase() < b[0].toUpperCase()) {
                            return -1;
                        }
                        if (a[0].toUpperCase() > b[0].toUpperCase()) {
                            return 1;
                        }
                        return 0;
                    })}
                    keyExtractor={item => item[0]}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.row}
                            onPress={() => {
                                this.props.selectMarker(item);
                            }}
                        >
                            <View style={styles.view}>
                                <Icon
                                    name="map-marker"
                                    size={20}
                                    color={Colors.text}
                                />
                                <Text numberOfLines={1} style={styles.text}>
                                    {'   '}
                                    {item[0]}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    },
    accenttext: {
        color: Colors.accent,
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(20)
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkPrimary,
        marginTop: getUIScale(10),
        marginBottom: getUIScale(20),
        marginHorizontal: getUIScale(10),
        height: getUIScale(50),
        paddingHorizontal: getUIScale(20)
    },
    row: {
        height: getUIScale(50),
        width: '100%',
        backgroundColor: Colors.darkPrimary,
        paddingHorizontal: getUIScale(20),
        borderBottomWidth: 1,
        borderColor: Colors.primary
    },
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: Colors.text,
        fontFamily: 'MerriweatherSans-Regular',
        fontSize: getFontScale(18)
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: getFontScale(15)
    }
});
