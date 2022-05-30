import {Text} from '@/components/ui/Text';
import React from 'react';

import * as S from './AddressItem.styled';

type AddressItemProps = {
  label: string;
  text: string;
};

export const AddressItem = ({label, text}: AddressItemProps) => {
  return (
    <S.Wrap>
      <Text fs="sm" color="grayscale.700" ff="primary.bold" uppercase>
        {label}
      </Text>
      <Text fs="md">{text}</Text>
    </S.Wrap>
  );
};
