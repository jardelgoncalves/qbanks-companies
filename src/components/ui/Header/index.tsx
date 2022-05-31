import React from 'react';
import Icon from 'react-native-remix-icon';
import type {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {Button} from '../Button';
import {Text} from '../Text';

import * as S from './Header.styled';
import {theme} from '@/style/theme';

type HeaderProps = BottomTabHeaderProps & {
  title?: string;
};

export const Header = ({navigation, title, options}: HeaderProps) => {
  return (
    <S.Container>
      <S.HeaderLeft>
        <Button
          width="48px"
          variant="ghost"
          backgroundColor="grayscale.100"
          onPress={navigation.goBack}>
          <Icon
            name="arrowLeft-line"
            size="28"
            color={theme.colors.grayscale[100]}
          />
        </Button>
      </S.HeaderLeft>
      {title && (
        <Text ff="primary.bold" fs="lg" color="graysclae.100">
          {title}
        </Text>
      )}
      {options.headerRight && (
        <S.HeaderRight>{options.headerRight({})}</S.HeaderRight>
      )}
    </S.Container>
  );
};
