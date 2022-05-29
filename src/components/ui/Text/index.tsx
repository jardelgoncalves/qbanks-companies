import React from 'react';
import {ModifiersType} from '@/interfaces/modifiers';
import * as S from './Text.styled';
import {StyleProp, TextStyle} from 'react-native';

type TextProps = ModifiersType & {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};
export const Text = ({children, style, ...rest}: TextProps) => {
  return (
    <S.Text style={style} {...rest}>
      {children}
    </S.Text>
  );
};
