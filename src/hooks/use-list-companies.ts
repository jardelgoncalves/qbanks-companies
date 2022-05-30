import {Company} from '@/interfaces/company';
import {getListCompanies} from '@/services/company-service';
import {useEffect, useState} from 'react';

export const useListCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [allComapnies, setAllCompanies] = useState<Company[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchingList = () => {
    setLoading(true);
    getListCompanies()
      .then(data => {
        setCompanies(data);
        setAllCompanies(data);
        setRefreshing(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchingList();
  }, []);

  useEffect(() => {
    if (refreshing) {
      fetchingList();
    }
  }, [refreshing]);

  const onRefresh = () => {
    setRefreshing(!refreshing);
  };

  const updateCompaniesInList = (companiesList: Company[]) => {
    setCompanies(companiesList);
  };

  return {
    companies,
    allComapnies,
    loading,
    refreshing,
    onRefresh,
    updateCompaniesInList,
    fetchingList,
  };
};
