/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import store from './src/store'

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest

const Index = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => Index)