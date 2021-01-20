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
  TouchableOpacity,
  LogBox,
} from 'react-native';
import { ThemeProvider } from '@context/theme-context'
import Navigation from "@Navigation";
import BottomTab from "./src/Navigation/BottomTab";
import { LoginWithFacebook, SlidingUpPanel } from "@containers";
import { ThemeContext } from './theme-context'
import Main from "./Main";
import configureStore from "./src/redux/configureStore"; // store
const { persistor, store } = configureStore(); // store
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import { Provider } from "react-redux"; //redux
import { PersistGate } from 'redux-persist/es/integration/react' //redux


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
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
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SlidingUpPanel />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
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
