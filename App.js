import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 📄 Import all your screens
import Screen0_Splash from './screens/Screen0_Splash';
import Screen1_Welcome from './screens/Screen1_Welcome';
import Screen2_Tagline1 from './screens/Screen2_Tagline1';
import Screen3_Tagline2 from './screens/Screen3_Tagline2';
import Screen3_Tagline3 from './screens/Screen3_Tagline3';
import Screen4_SignIn from './screens/Screen4_SignIn';
import Screen5_SignUp from './screens/Screen5_SignUp';
import Screen6_Home from './screens/Screen6_Home';
import Screen7_Reward from './screens/Screen7_Reward'; 
import Screen7_1Badge from './screens/Screen7_1Badge';
import Screen7_2Peso from './screens/Screen7_2Peso';
import Screen7_3KeyChain from './screens/Screen7_3KeyChain';
import Screen7_4Ballpen from './screens/Screen7_3KeyChain';
import Screen8_History from './screens/Screen8_History';
import Screen9_Qr from './screens/Screen9_Qr';
import Screen10_Profile from './screens/Screen10_Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Screen0_Splash} />
        <Stack.Screen name="Welcome" component={Screen1_Welcome} />
        <Stack.Screen name="Tagline1" component={Screen2_Tagline1} />
        <Stack.Screen name="Tagline2" component={Screen3_Tagline2} />
        <Stack.Screen name="Tagline3" component={Screen3_Tagline3} />
        <Stack.Screen name="SignIn" component={Screen4_SignIn} />
        <Stack.Screen name="SignUp" component={Screen5_SignUp} />
        <Stack.Screen name="Home" component={Screen6_Home} />
        <Stack.Screen name="Reward" component={Screen7_Reward} />
        <Stack.Screen name='Badge' component={Screen7_1Badge} />
        <Stack.Screen name='Peso' component={Screen7_2Peso} />
        <Stack.Screen name='KeyChain' component={Screen7_3KeyChain} />
        <Stack.Screen name= 'Ballpen' component={Screen7_4Ballpen} />
        <Stack.Screen name="History" component={Screen8_History} />
        <Stack.Screen name="Qr" component={Screen9_Qr} />
        <Stack.Screen name="Profile" component={Screen10_Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
