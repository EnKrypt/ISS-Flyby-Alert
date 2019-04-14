import React from 'react';
import { AppLoading, Font } from 'expo';
import Root from './components/Root';

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
            })
        ]);
    }
}
