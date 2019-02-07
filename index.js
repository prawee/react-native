import {AppRegistry, View, Text} from 'react-native';
import {name as appName} from './app.json';
import React, {Component} from 'react';

class Demo extends Component {
  render() {
    return (<View><Text>Demo</Text></View>)
  }
}

AppRegistry.registerComponent(appName, () => Demo);