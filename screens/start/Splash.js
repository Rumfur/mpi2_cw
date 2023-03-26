import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

class Splash extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => { props.navigation.navigate("MainScreen"); }, 1000);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBluePink.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <TouchableOpacity
            onPress={() => navigation.navigate("MainScreen")}>
              <Image style={styles.logo} source={require('../../assets/reactOnLogo.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  layout: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: '40%',
  },
  logo:{
    width: '70%',
    height: '90%',
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 48,
  },
});