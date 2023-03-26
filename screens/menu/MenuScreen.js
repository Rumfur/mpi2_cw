import React, { Component } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

// You can import from local files
import LogoReactOn from '../../components/LogoReactOn';

class MenuScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/bgBlackWhite.png')} style={styles.backgroundImage} /> 
        <View style={styles.layout}>
          <View style={styles.logo}>
            <LogoReactOn/>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => navigation.navigate("ReactionTestScreen")}>
              <Image source={require('../../assets/buttonReaction.png')} style={styles.image} /> 
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.imageColumn}
            onPress={() => navigation.navigate("MemoryTestScreen")}>
              <Image source={require('../../assets/buttonMemory.png')} style={styles.image} />
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

export default MenuScreen;

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
    height: '25%',
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
