import React, { Component } from 'react';
import { ScrollView, View,StyleSheet } from 'react-native';
import { Card, Text, Button, } from 'react-native-elements'
const cards = [
    {
      tittle: 'COMPETICIONES',
      description: 'Manten actualizado con todo lo que pasa en las grandes ligas del fútbol.',
      image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/04/25/15562023610886.jpg'
    },
    {
      tittle: 'PARTIDOS',
      description: 'Enterate de los resultados en tiempo real de los partidos en todo el mundo.',
      image: 'https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_960_720.jpg'
    },
    {
      tittle: 'EQUIPOS',
      description: 'Echale un ojo a la plantilla de tus equipos favoritos.',
      image: 'https://i.ytimg.com/vi/gBW83QBiBbc/maxresdefault.jpg'
    }
  ]
class Home extends Component {

    static navigationOptions = {
      title: 'Home',
    };
    render() {
  
      return (
        <ScrollView>
          <View style={styles.container}>
            
            {
              cards.map((u, i) => {
                return (
                  <Card
                    key={i}
                    title={u.tittle}
                    containerStyle={{borderRadius: 4,borderColor: '#000'}}
                    image={{ uri: u.image }}>
                    <Text style={{ marginBottom: 10 }}>
                      {u.description}
                    </Text>
                    <Button
                      buttonStyle={styles.buttonPrimary}
                      iconRight
                      title={u.tittle} />
                  </Card>
                );
              })
            }
          </View>
        </ScrollView>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F2F3F3',
    },
    buttonPrimary: {
      borderRadius: 10,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
      backgroundColor: '#000',
      borderColor: '#000'
    }
  });
  export default Home;