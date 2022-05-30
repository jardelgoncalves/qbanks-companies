import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Input} from '@/components/ui/Input';
import {Text} from '@/components/ui/Text';
import {CardCompany} from '@/components/ui/CardCompany';
import {Loader} from '@/components/ui/Loader';
import {searchCompanyByTextDebounced} from '@/services/search-service';
import {useListCompanies} from '@/hooks/use-list-companies';

import type {Company} from '@/interfaces/company';

import * as S from './Home.styled';

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
    updateCompaniesInList,
  } = useListCompanies();

  const onInputText = (value: string) => {
    setQuery(value);
  };

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
      <S.List
        ListFooterComponent={() => <S.Spacing />}
        keyExtractor={(item: Company) => item.id}
        data={companies}
        renderItem={renderCompanies}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </S.Container>
  );
};
