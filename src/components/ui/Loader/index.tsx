import {theme} from '@/style/theme';
import React, {useCallback, useEffect, useState} from 'react';
import {Animated, Easing} from 'react-native';
import Icon from 'react-native-remix-icon';

import * as S from './Loader.styled';

export const Loader = () => {
  const [spinValue] = useState(new Animated.Value(0));

  const startSpinner = useCallback(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  useEffect(() => {
    startSpinner();
  }, [startSpinner]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <S.Wrapper>
      <S.ViewAnimated
        style={{
          transform: [{rotate: spin}],
        }}>
        <Icon name="loader4-fill" size="48" color={theme.colors.primary[700]} />
      </S.ViewAnimated>
    </S.Wrapper>
  );
};
