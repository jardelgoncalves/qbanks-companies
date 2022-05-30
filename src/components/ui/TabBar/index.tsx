import React from 'react';
import {Svg, Path} from 'react-native-svg';
import * as S from './TabBar.styled';

import LogoImage from '@/assets/images/logo.png';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Button} from '../Button';
import {Text} from '../Text';
import {theme} from '@/style/theme';

const showTabRoutes = ['Home'];

export const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const routeNames = state?.routeNames[state.index];

  const onPress = () => {
    navigation.navigate('AddOrEditCompany');
  };

  return showTabRoutes.includes(routeNames) ? (
    <S.Bar>
      <S.PositionElement>
        <Svg width={30} height={33} viewBox="0 0 30 33" fill="none">
          <Path
            d="M0 0V33H30V32C18 30.5 0.5 22.5 0 0Z"
            fill={theme.colors.primary[700]}
          />
        </Svg>
      </S.PositionElement>

      <S.PositionElement isRight>
        <Svg width={30} height={33} viewBox="0 0 30 33" fill="none">
          <Path
            d="M30 0V33H0V32C12 30.5 29.5 22.5 30 0Z"
            fill={theme.colors.primary[700]}
          />
        </Svg>
      </S.PositionElement>

      <S.Logo source={LogoImage} />
      <Button variant="ghost" backgroundColor="grayscale.100" onPress={onPress}>
        <Text color="grayscale.100" ff="primary.medium">
          Add Company
        </Text>
      </Button>
    </S.Bar>
  ) : null;
};
