import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {wait} from '@/utils/wait';
import {SplashScreen} from '@/screens/SplashScreen';
import {HomeScreen} from '@/screens/HomeScreen';

const Stack = createNativeStackNavigator();
export const Routes = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    wait(3000).then(() => setShowSplash(false));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showSplash && (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{header: () => null}}
          />
        )}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
