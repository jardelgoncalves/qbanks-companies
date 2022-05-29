import React, {useCallback, useEffect, useState} from 'react';
import {Animated, Dimensions, SafeAreaView, StatusBar} from 'react-native';
import {wait} from '@/utils/wait';

import * as S from './SplashScreen.styled';

import logoImg from '@/assets/images/logo.png';
import {ScrollView} from 'react-native-gesture-handler';
import {theme} from '@/style/theme';

export const SplashScreen = () => {
  const [value] = useState(new Animated.Value(0));
  const {height, width} = Dimensions.get('window');
  const middleOfScreen = height / 2 - 50;

  const LogoAnimationShow = useCallback(() => {
    return Animated.timing(value, {
      toValue: middleOfScreen,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [value, middleOfScreen]);

  const LogoAnimationHide = useCallback(() => {
    return Animated.timing(value, {
      toValue: 1500,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [value]);

  useEffect(() => {
    LogoAnimationShow();
    wait(3000).then(LogoAnimationHide);
  }, [LogoAnimationShow, LogoAnimationHide]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StatusBar backgroundColor={theme.colors.primary[700]} />
        <S.Wrapper width={width} height={height}>
          <S.Image source={logoImg} />
        </S.Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};
