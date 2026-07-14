/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { launchMapActivity } from '@mapsted/maps-react-native';
import React from 'react';
import {
  Button,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Button title='Launch Map' onPress={launchMapActivity}></Button>  
    </SafeAreaView>
  );
}
export default App;
