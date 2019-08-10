import React, { Component } from 'react';
import { Text, View } from 'react-native';


class Matches extends Component {
    static navigationOptions = {
        title: 'Partidos',
      };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Partidos</Text>
            </View>
        );
    }
}

export default Matches;