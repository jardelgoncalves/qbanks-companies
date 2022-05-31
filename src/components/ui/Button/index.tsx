import {ModifiersType} from '@/interfaces/modifiers';
import React from 'react';
import {TouchableNativeFeedbackProps} from 'react-native';

import * as S from './Button.styled';

type ButtonProps = ModifiersType &
  TouchableNativeFeedbackProps & {
    children: React.ReactNode;
    variant?: 'raised' | 'ghost' | 'outline';
    block?: boolean;
    width?: string;
  };

export const Button = ({children, ...rest}: ButtonProps) => {
  return <S.Wrap {...rest}>{children}</S.Wrap>;
};
