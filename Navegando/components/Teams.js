import React, { Component } from 'react';
import { Text, View } from 'react-native';
class Teams extends Component {
  static navigationOptions = {
    title: 'Equipos',
  };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Equipos</Text>
        </View>
      );
    }
  }
export default Teams;