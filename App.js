/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import PushNotification from 'react-native-push-notification';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';


class App extends React.Component {
  componentDidMount() {
    PushNotification.configure({
      // When notification is clicked
      onNotification: function(notification) {},
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  onPressBtn = () => {
    PushNotification.localNotification({
      title: "My Notification Title",
      message: "My Notification Message",
    });
  }

  render () {
    return(
      <View style={{width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Notif' onPress={() => this.onPressBtn()}/>
      </View>
  )
    }
};

const styles = StyleSheet.create({
  
});

export default App;
