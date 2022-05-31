import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, StatusBar} from 'react-native';
import Icon from 'react-native-remix-icon';
import {Text} from '@/components/ui/Text';

import {AddressItem} from './AddressItem';
import {Loader} from '@/components/ui/Loader';
import {Button} from '@/components/ui/Button';

import {useFindCompany} from '@/hooks/use-find-company';
import LogoImg from '@/assets/images/placeholder.png';

import * as S from './Company.styled';
import {theme} from '@/style/theme';

type ParamsRoute = {
  companyId: string;
};

export const CompanyScreen = () => {
  const [logo, setLogo] = useState({uri: ''});
  const route = useRoute();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const {company, loading, findById} = useFindCompany(
    (route.params as ParamsRoute)?.companyId,
  );

  useEffect(() => {
    if (isFocused) {
      findById((route.params as ParamsRoute)?.companyId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useEffect(() => {
    if (company?.logo) {
      setLogo({uri: company.logo});
    }
  }, [company]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          width="48px"
          variant="outline"
          bc="grayscale.100"
          onPress={() =>
            navigation.navigate('AddOrEditCompany', {
              companyId: (route.params as ParamsRoute)?.companyId,
            })
          }>
          <Icon
            name="edit-line"
            size="28"
            color={theme.colors.grayscale[100]}
          />
        </Button>
      ),
    });
  }, [navigation, route.params]);

  return (
    <S.Container>
      <StatusBar backgroundColor={theme.colors.primary[700]} />
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          <S.CompanyHeader>
            {!loading && (
              <>
                {logo.uri ? (
                  <S.LogoBrand source={logo} onError={() => setLogo(LogoImg)} />
                ) : (
                  <S.LogoBrand source={LogoImg} />
                )}
              </>
            )}
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
