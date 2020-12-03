/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import { ThemeContext } from './theme-context'
import Main from "./Main"
function App() {

  return (
    <ThemeProvider>
      <Navigation />
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
