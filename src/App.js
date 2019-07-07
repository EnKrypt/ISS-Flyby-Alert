import React from 'react';
import BackgroundFetch from 'react-native-background-fetch';
import SplashScreen from 'react-native-splash-screen';
import Root from './components/Root';
import { task } from './task';

export default class App extends React.Component {
    async componentDidMount() {
        // Background sync
        BackgroundFetch.configure(
            {
                minimumFetchInterval: 720,
                stopOnTerminate: false,
                startOnBoot: true,
                enableHeadless: true,
                requiredNetworkType: BackgroundFetch.NETWORK_TYPE_ANY
            },
            task,
            err => {
                console.warn('Background sync failed to start');
            }
        );
        // Caching or preloading operations go here..
        await new Promise(resolve => setTimeout(resolve, 750)); // Reasonable amount of delay to look at the splash screen
        SplashScreen.hide();
    }

    render() {
        return <Root />;
    }
}
