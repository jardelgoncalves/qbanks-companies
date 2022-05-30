import {Button} from '@/components/ui/Button';
import {Text} from '@/components/ui/Text';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import React, {useLayoutEffect} from 'react';

import * as S from './AddEditCompany.styled';

export const AddEditCompanyScreen = ({navigation}: BottomTabHeaderProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          width="48px"
          variant="ghost"
          bg="primary.700"
          onPress={() => navigation.goBack()}>
          <Text>b</Text>
        </Button>
      ),
    });
  }, [navigation]);
  return (
    <S.Container>
      <Text>Hello World</Text>
    </S.Container>
  );
};
