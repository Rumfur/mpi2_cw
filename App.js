import * as React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';


import SplashScreen from "./screens/start/Splash";
import MainScreen from './screens/start/MainScreen';
import RegisterScreen from './screens/start/RegisterScreen';
import LoginScreen from './screens/start/LoginScreen';
import MenuScreen from './screens/menu/MenuScreen';
import SettingsScreen from './screens/menu/SettingsScreen';
import AccountScreen from './screens/menu/AccountScreen';
import ReactionTestScreen from './screens/menu/ReactionTestScreen';
import MemoryTestScreen from './screens/menu/MemoryTestScreen';
import ReactionT1Screen from './screens/tests/ReactionT1Screen';
import MemoryT1Screen from './screens/tests/MemoryT1Screen';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen:SplashScreen, headerShown: false },
  MainScreen: { screen: MainScreen, headerShown: false },
  RegisterScreen: { screen: RegisterScreen, headerShown: false },
  LoginScreen: { screen: LoginScreen, headerShown: false },
  MenuScreen: { screen: MenuScreen, headerShown: false },
  SettingsScreen: { screen: SettingsScreen, headerShown: false },
  AccountScreen: { screen: AccountScreen, headerShown: false },
  ReactionTestScreen: { screen: ReactionTestScreen, headerShown: false },
  MemoryTestScreen: { screen: MemoryTestScreen, headerShown: false },
  ReactionT1Screen: { screen: ReactionT1Screen, headerShown: false },
  MemoryT1Screen: { screen: MemoryT1Screen, headerShown: false },
});

export default createAppContainer(AppNavigator);
