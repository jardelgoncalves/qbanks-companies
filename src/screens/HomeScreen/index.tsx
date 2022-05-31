import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {Input} from '@/components/ui/Input';
import {Text} from '@/components/ui/Text';
import {CardCompany} from '@/components/ui/CardCompany';
import {Loader} from '@/components/ui/Loader';
import {searchCompanyByTextDebounced} from '@/services/search-service';
import {useListCompanies} from '@/hooks/use-list-companies';

import type {Company} from '@/interfaces/company';

import * as S from './Home.styled';
import {StatusBar} from 'react-native';
import {theme} from '@/style/theme';

export const HomeScreen = () => {
  const [query, setQuery] = useState('');
  const navigation = useNavigation();
  const {
    companies,
    loading,
    error,
    onRefresh,
    refreshing,
    allComapnies,
    fetchingList,
    updateCompaniesInList,
  } = useListCompanies();

  const isFocused = useIsFocused();

  const onInputText = (value: string) => {
    setQuery(value);
  };

  useEffect(() => {
    if (isFocused) {
      fetchingList();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  useEffect(() => {
    searchCompanyByTextDebounced(
      {query, companies: allComapnies},
      (res: Company[]) => updateCompaniesInList(res),
    );

    return () => {
      searchCompanyByTextDebounced.cancel();
    };
  }, [query, allComapnies, updateCompaniesInList]);

  const goToCompany = (id: string) => {
    navigation.navigate('Company', {
      companyId: id,
    });
  };

  const renderCompanies = ({item}: {item: Company}) => (
    <CardCompany
      key={item.id}
      name={item.name}
      cnpj={item.cnpj}
      logo={item.logo}
      address={item.address}
      onPress={() => goToCompany(item.id)}
    />
  );

  return (
    <S.Container>
      <StatusBar backgroundColor={theme.colors.grayscale[100]} />
      <S.HeaderContainer>
        <Text fontFamily="primary.medium" fs="4xl" color="grayscale.700">
          Companies
        </Text>
        <Input
          placeholder="Filter company by name or CNPJ"
          onChangeText={onInputText}
          value={query}
        />
      </S.HeaderContainer>
      {loading && !refreshing && <Loader />}
      {!!error && (
        <S.ViewCenter>
          <Text color="error.700" fs="lg">
            {error}
          </Text>
        </S.ViewCenter>
      )}
      {!loading && (
        <S.List
          ListFooterComponent={() => <S.Spacing />}
          keyExtractor={(item: Company) => item.id}
          data={companies}
          renderItem={renderCompanies}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </S.Container>
  );
};
