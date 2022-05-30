import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {wait} from '@/utils/wait';
import {SplashScreen} from '@/screens/SplashScreen';
import {HomeScreen} from '@/screens/HomeScreen';
import {TabBar} from '@/components/ui/TabBar';
import {AddEditCompanyScreen} from '@/screens/AddEditCompany';

const Stack = createBottomTabNavigator();
export const Routes = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    wait(3000).then(() => setShowSplash(false));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator tabBar={TabBar}>
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
        <Stack.Screen
          name="AddOrEditCompany"
          component={AddEditCompanyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
