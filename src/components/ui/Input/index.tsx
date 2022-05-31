import {theme} from '@/style/theme';
import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Text} from '../Text';

import * as S from './Input.styled';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const Input = ({
  label,
  error,
  onBlur,
  onFocus,
  ...props
}: InputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <S.Container>
      {label && (
        <Text uppercase color="grayscale.700" ff="primary.bold">
          {label}
        </Text>
      )}

      <S.Wrap
        {...props}
        focused={focused}
        hasError={!!error}
        onFocus={e => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={e => {
          setFocused(false);
          onBlur?.(e);
        }}
        placeholderTextColor={theme.colors.grayscale[500]}
      />

      {error && (
        <Text color="error.700" ff="primary.regular">
          {error}
        </Text>
      )}
    </S.Container>
  );
};
