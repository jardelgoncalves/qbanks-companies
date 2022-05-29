import React, {useCallback, useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {wait} from '@/utils/wait';

import * as S from './SplashScreen.styled';

import logoImg from '@/assets/images/logo.png';
import {ScrollView} from 'react-native-gesture-handler';
import {theme} from '@/style/theme';

export const SplashScreen = () => {
  const [opacity] = useState(new Animated.Value(0));
  const [scale] = useState(new Animated.Value(0));
  const {height, width} = Dimensions.get('window');
  const middleOfScreen = height / 2 - 50;

  const LogoAnimationShow = useCallback(() => {
    return Animated.timing(opacity, {
      toValue: middleOfScreen,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [opacity, middleOfScreen]);

  const LogoAnimationHide = useCallback(() => {
    return Animated.timing(opacity, {
      toValue: 1500,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [opacity]);

  const ScaleLogoAnimation = useCallback(() => {
    return Animated.timing(scale, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [scale]);

  useEffect(() => {
    LogoAnimationShow();
    wait(2900).then(() => {
      ScaleLogoAnimation();
      LogoAnimationHide();
    });
  }, [LogoAnimationShow, LogoAnimationHide, ScaleLogoAnimation]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <StatusBar backgroundColor={theme.colors.primary[700]} />
        <S.Wrapper width={width} height={height}>
          <S.Image
            source={logoImg}
            style={{
              transform: [
                {
                  scaleX: scale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 15],
                  }),
                },
                {
                  scaleY: scale.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 15],
                  }),
                },
              ],
            }}
          />
        </S.Wrapper>
      </ScrollView>
    </SafeAreaView>
  );
};
