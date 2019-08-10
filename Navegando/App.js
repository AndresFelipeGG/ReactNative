import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Card, Text, ListItem, Button, Header, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './components/Home';
import Competitions from './components/Competitions';
import Matches from './components/Matches';
import Teams from './components/Teams';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Competitions: Competitions,
  Matches: Matches,
  Teams: Teams,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Competitions') {
          iconName = `md-pulse`;
        }
        else if (routeName === 'Matches') {
          iconName = `ios-football`;
        }
        else if (routeName === 'Teams') {
          iconName = `ios-people`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
    },
  }
);

const AppNavigator = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F3F3',
  },
  buttonPrimary: {
    borderRadius: 20,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#000',
    borderColor: '#000'
  }
});


export default class App extends Component{
  render(){
    return (
      <View style={{flex:1, backgroundColor: 'white'}}>
        <Header
              leftComponent={{ icon: 'menu', color: '#fff'}}
              centerComponent={{ text: 'AppSoccer', style: { color: '#fff', fontSize: 35 } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
              containerStyle={{
                backgroundColor: '#000',
                justifyContent: 'space-around',
              }}
            />

        <AppNavigator/>
      </View>
    );
  }
}
