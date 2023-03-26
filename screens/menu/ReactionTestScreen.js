import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

class ReactionTestScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBlackWhite.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <View>
            <Image source={require('../../assets/imgReaction.png')} style={styles.logo} /> 
          </View>
        
          <View style={styles.row}>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => navigation.navigate("ReactionT1Screen")}>
              <Image source={require('../../assets/buttonReactT1.png')} style={styles.image} /> 
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => alert('COMING SOON!')}>
              <Image source={require('../../assets/buttonReactT2.png')} style={styles.image} />
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => alert('COMING SOON!')}>
              <Image source={require('../../assets/buttonTTemp.png')} style={styles.image} /> 
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => alert('COMING SOON!')}>
              <Image source={require('../../assets/buttonTTemp.png')} style={styles.image} />
            </TouchableOpacity>
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

export default ReactionTestScreen;

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
    height: '40%',
    top: '1%',
  },
  logo:{
    height: '80%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 48,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imageColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
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
  }
});
