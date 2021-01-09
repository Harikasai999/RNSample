/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';
import { ThemeProvider } from '@context/theme-context'
import Navigation from "@Navigation";
import BottomTab from "./src/Navigation/BottomTab";
import { LoginWithFacebook } from "@containers";
import { ThemeContext } from './theme-context'
import Main from "./Main";
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
function App() {
  useEffect(() => {

    GoogleSignin.configure({
      // iosClientId: '660712216768-5v8ibfd6fob1nkirrs7g1l97rfutvbr4.apps.googleusercontent.com',
      // webClientId: "com.googleusercontent.apps.660712216768-5v8ibfd6fob1nkirrs7g1l97rfutvbr4",
      //iosClientId: 'com.googleusercontent.apps.660712216768-5v8ibfd6fob1nkirrs7g1l97rfutvbr4',
      webClientId: "660712216768-k9fkaapr7d1heqgupq0igk755sirheb9.apps.googleusercontent.com",
      offlineAccess: false
    })
  }, [])
  return (
    <ThemeProvider>
      <LoginWithFacebook />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 16,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default App;
