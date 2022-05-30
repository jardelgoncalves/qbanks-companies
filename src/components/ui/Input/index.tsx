import {theme} from '@/style/theme';
import React, {useState} from 'react';
import {TextInputProps, View} from 'react-native';
import {Text} from '../Text';

import * as S from './Input.styled';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
};

export const Input = ({label, error, ...props}: InputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <View>
      {label && (
        <Text uppercase color="grayscale.700" ff="primary.bold">
          {label}
        </Text>
      )}

      <S.Wrap
        {...props}
        focused={focused}
        hasError={!!error}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor={theme.colors.grayscale[500]}
      />

      {error && (
        <Text color="error.700" ff="primary.regular">
          {error}
        </Text>
      )}
    </View>
  );
};
