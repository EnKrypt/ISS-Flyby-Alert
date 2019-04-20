import React from 'react';
import { AppLoading, Font, TaskManager } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import Root from './components/Root';
import { task } from './task';

TaskManager.defineTask('sync', task);

export default class App extends React.Component {
    state = {
        isReady: false
    };

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={console.warn}
                    onFinish={() => this.setState({ isReady: true })}
                />
            );
        } else {
            return <Root />;
        }
    }

    async _loadResourcesAsync() {
        return Promise.all([
            // All startup actions go here
            Font.loadAsync({
                Signika: require('./assets/Signika-Regular.ttf')
            }),
            Font.loadAsync(FontAwesome.font)
        ]);
    }
}
