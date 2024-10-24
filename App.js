import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './components/StartScreen';
import Gallery from './components/Gallery';
import RealmProvider from './database/RealmProvider';
import { registerRootComponent } from 'expo';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <RealmProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start" screenOptions={{headerShown : false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Gallery" component={Gallery} />
      </Stack.Navigator>
    </NavigationContainer>
    </RealmProvider>
  );
}
registerRootComponent(App)

