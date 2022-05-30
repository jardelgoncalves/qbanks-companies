import {Button} from '@/components/ui/Button';
import {Text} from '@/components/ui/Text';
import {useFindCompany} from '@/hooks/use-find-company';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView} from 'react-native';

import LogoImg from '@/assets/images/placeholder.png';

import * as S from './Company.styled';
import {AddressItem} from './AddressItem';
import {Loader} from '@/components/ui/Loader';

type ParamsRoute = {
  companyId: string;
};

export const CompanyScreen = () => {
  const [logo, setLogo] = useState({uri: ''});
  const route = useRoute();
  const navigation = useNavigation();
  const {company, loading} = useFindCompany(
    (route.params as ParamsRoute)?.companyId,
  );

  useEffect(() => {
    if (company?.logo) {
      setLogo({uri: company.logo});
    }
  }, [company]);

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
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <S.CompanyHeader>
            <S.LogoBrand source={logo} onError={() => setLogo(LogoImg)} />
            <Text
              color="grayscale.100"
              fs="xl"
              ff="primary.bold"
              numberOfLines={2}>
              {company?.name}
            </Text>
            <Text color="grayscale.400" fs="sm" numberOfLines={1}>
              {company?.cnpj && 'CNPJ:'} {company?.cnpj}
            </Text>
            <S.DescriptionWrap>
              <Text color="grayscale.400" fs="md" numberOfLines={2}>
                {company?.description}
              </Text>
            </S.DescriptionWrap>
          </S.CompanyHeader>
          {company?.address && (
            <S.LocationContainer>
              <AddressItem label="Street" text={company.address.street} />
              <AddressItem
                label="Number"
                text={company.address.number || 'S/N'}
              />
              <AddressItem
                label="Complement"
                text={company.address.complement || 'S/C'}
              />
              <AddressItem
                label="Neighborhood"
                text={company.address.neighborhood}
              />
              <AddressItem label="City" text={company.address.city} />
              <AddressItem label="State" text={company.address.state} />
              <AddressItem label="Zip code" text={company.address.zip} />
            </S.LocationContainer>
          )}
        </ScrollView>
      )}
    </S.Container>
  );
};
