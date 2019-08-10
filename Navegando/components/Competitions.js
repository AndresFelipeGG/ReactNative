import React, { Component } from 'react';
import { Modal, Alert, View, StyleSheet, ScrollView, ActivityIndicator, FlatList } from 'react-native';
import { Text, Card, Button,Divider } from 'react-native-elements';
class Competitions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            competition,
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    componentDidMount() {
        return fetch('http://api.football-data.org/v2/competitions/')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.competitions,
                }, function () {

                });

            })
            .catch((error) => {
                alert('error');
                this.setState({
                    isLoading: false
                });
            });
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View>
                            <View>
                                <Card
                                    title='MODAL'
                                    containerStyle={{ borderRadius: 4, borderColor: '#000' }}>
                                    <Button
                                        buttonStyle={styles.buttonPrimary}
                                        title='Cerrar'
                                        onPress={() => {
                                            this.setModalVisible(!this.state.modalVisible);
                                        }} />
                                </Card>
                            </View>
                        </View>
                    </Modal>
                    <Card
                        title='COMPETICIONES'
                        containerStyle={{ borderRadius: 4, borderColor: '#000' }}>
                        <FlatList
                            data={this.state.dataSource}
                            renderItem={({ item }) =>
                                <View>
                                    <Text h4 key={item.id} onPress={() => {
                                        this.setModalVisible(true);
                                    }}>{item.id}, {item.name}
                                    </Text>
                                    <Divider style={{ backgroundColor: 'gray' }} />
                                </View>
                            }
                            keyExtractor={({ id }, index) => id.toString()}
                        />
                    </Card>
                    {/* <Input
                    placeholder='BASIC INPUT'
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <Button
                    buttonStyle={styles.buttonPrimary}
                    title="Probar"
                    onPress={this.onButtonPress} /> */}

                </View>
            </ScrollView >
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
    tittleH1: {
        color: '#000'
    },
    buttonPrimary: {
        borderRadius: 5,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#000',
        borderColor: '#000'
    }
});
export default Competitions;