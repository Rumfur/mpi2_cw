import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

// You can import from local files
import LogoReactOn from '../../components/LogoReactOn';

class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBluePink.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <View style={styles.logo}>
            <LogoReactOn/>
          </View>
          <View style={styles.input}>
            <TextInput
            style={styles.buttonText}
            placeholder="Username"
            />
          </View>
          <View style={styles.input}>
            <TextInput
            style={styles.buttonText}
            placeholder="Password"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={() => navigation.navigate("MenuScreen")}>
              <Text style={styles.buttonText}>
                Login
              </Text>
            </Button>
          </View>
          <View style={styles.button}>
            <Button onPress={() => navigation.navigate("MainScreen")}>
              <Text style={styles.buttonText}>
                Back
              </Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

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
    height: '80%',
  },
  input:{
    justifyContent: 'center',
    backgroundColor: 'black',
    margin: 16,
    marginTop: 4,
    padding: 6,
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
    height: '1%',
  },
  logo:{
    height: '30%',
  },
});
