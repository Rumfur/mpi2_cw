import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class MainScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBluePink.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <View>
            <Image style={styles.logo} source={require('../../assets/reactOnLogo.png')} />
          </View>
          <View style={styles.button}>
            <Button onPress={() => navigation.navigate("LoginScreen")}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={() => navigation.navigate("RegisterScreen")}>
              <Text style={styles.buttonText}>
                Register
              </Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={() => navigation.navigate("MenuScreen")}>
              <Text style={styles.buttonText}>
                Skip
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default MainScreen;

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
  layout: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '70%',
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
  logo:{
    height: 164,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 64,
    marginLeft: 32,
  },
});
