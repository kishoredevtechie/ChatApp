/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';

function App() {
  
  return (
    <SafeAreaProvider>
      <LoginScreen/>
    </SafeAreaProvider>
  );
}

function AppContent() {

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
