import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class ReactionT1Screen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgPink.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>

          <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("ReactionTestScreen")}>
              <Image source={require('../../assets/descReactT1.png')} style={styles.image} /> 
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default ReactionT1Screen;

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
});
