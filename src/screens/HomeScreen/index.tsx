import React, {useEffect, useState} from 'react';
import {CardCompany} from '@/components/ui/CardCompany';

import {AddressType} from '@/interfaces/address';
import {Input} from '@/components/ui/Input';
import {Text} from '@/components/ui/Text';
import {searchCompanyByTextDebounced} from '@/services/search-service';
import {useListCompanies} from '@/hooks/use-list-companies';

import * as S from './Home.styled';

type Company = {
  id: string;
  name: string;
  cnpj: string;
  logo: string;
  address: AddressType;
};

export const HomeScreen = () => {
  const {
    companies,
    onRefresh,
    refreshing,
    allComapnies,
    updateCompaniesInList,
  } = useListCompanies();
  const [query, setQuery] = useState('');

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

  const renderCompanies = ({item}: {item: Company}) => (
    <CardCompany
      key={item.id}
      name={item.name}
      cnpj={item.cnpj}
      logo={item.logo}
      address={item.address}
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
