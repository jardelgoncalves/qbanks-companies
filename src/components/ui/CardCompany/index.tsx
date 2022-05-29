import React, {useState} from 'react';
import {Dimensions, View} from 'react-native';

import {AddressType} from '@/interfaces/address';
import {makeAddress} from '@/utils/make-address';
import {Text} from '../Text';
import * as S from './CardCompany.styed';

import LogoPlaceholder from '@/assets/images/placeholder.png';

type CardCompanyProps = {
  name: string;
  cnpj: string;
  logo: string;
  address: AddressType;
  onPress?: () => void;
};

export const CardCompany = ({
  name,
  cnpj,
  address,
  logo,
  onPress,
}: CardCompanyProps) => {
  const [image, setImage] = useState({uri: logo});
  const {width} = Dimensions.get('window');
  return (
    <S.Card onPress={onPress}>
      <S.CardHeader>
        <S.LogoContainer>
          {logo && (
            <S.Logo source={image} onError={() => setImage(LogoPlaceholder)} />
          )}
        </S.LogoContainer>
        <View>
          <Text
            color="grayscale.700"
            fs="md"
            ff="primary.bold"
            style={{
              // paddings (70 + 40) + logo size (60) + margin-right(12)
              width: width - 182,
            }}
            numberOfLines={1}>
            {name}
          </Text>
          <Text numberOfLines={1} fs="xs">
            CNPJ: {cnpj}
          </Text>
        </View>
      </S.CardHeader>
      <S.Content>
        <Text fs="sm" numberOfLines={2}>
          {makeAddress(address)}
        </Text>
      </S.Content>
    </S.Card>
  );
};
