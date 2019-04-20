import React from 'react';
import {
    TouchableOpacity,
    FlatList,
    Text,
    StyleSheet,
    View,
    TextInput
} from 'react-native';
import markers from '../markers';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

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
                        onChangeText={this.debouncedFilter}
                    />
                    <FontAwesome name="search" size={20} color={Colors.text} />
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
                                <FontAwesome
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
        fontFamily: 'Signika',
        fontSize: 20
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.darkPrimary,
        marginBottom: 20,
        height: 50,
        paddingHorizontal: 20
    },
    row: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.darkPrimary,
        paddingHorizontal: 20,
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
        fontFamily: 'Signika',
        fontSize: 18
    },
    input: {
        flex: 1,
        color: Colors.text,
        fontSize: 18
    }
});
