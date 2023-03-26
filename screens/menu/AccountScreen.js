import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

class AccountScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBlackWhite.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <View style={styles.logo}>
            <Image source={require('../../assets/imgAccount.png')} style={styles.image} /> 
          </View>
          
          <View style={styles.button}>
            <Button>
              <Text style={styles.buttonText}>
                More Settings
              </Text>
            </Button>
          </View>

          <View style={styles.row}>
              <View style={styles.column}>
                <Button icon='hammer-wrench' style={styles.iconStyle}
                onPress={() => navigation.navigate("SettingsScreen")} />
              </View>
              <View style={styles.column}>
                <Button icon='home' style={styles.iconStyle}
                onPress={() => navigation.navigate("MenuScreen")} />
              </View>
              <View style={styles.column}>
                <Button icon='account' style={styles.iconStyle}
                onPress={() => navigation.navigate("AccountScreen")} />
              </View>
            </View>
            
        </View>
      </View>
    );
  }
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: 'black',
  },
  image: {
      width: '90%',
      height: '80%',
      resizeMode: 'contain',
  },
  layout: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '80%',
  },
  logo:{
    height: '40%',
    width: '80%',
    marginBottom: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 48,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '33%',
  },
  iconStyle: {
    width: '75%',
    height: '25%',
    tintColor: 'white',
    fontSize: 24,
    backgroundColor: 'black',
    paddingLeft: 10,
  },
    button:{
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: 8,
    marginTop: 16,
    padding: 16,
  },
  buttonText:{
    fontSize: 24,
    color: 'white',
  },
});
