import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/pages/Onboarding';
import Detail from './src/pages/Detail';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Profile from './src/pages/Profile';

const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='onboard'>
        <Stack.Screen name='onboard' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='detail' component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;