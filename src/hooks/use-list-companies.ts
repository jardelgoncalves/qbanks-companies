import {Company} from '@/interfaces/company';
import {getListCompanies} from '@/services/company-service';
import {useEffect, useState} from 'react';

export const useListCompanies = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error, setError] = useState('');
  const [allComapnies, setAllCompanies] = useState<Company[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchingList = () => {
    getListCompanies()
      .then(data => {
        setCompanies(data);
        setAllCompanies(data);
        setRefreshing(false);
        setError('');
      })
      .catch(() => setError('Something went wrong 😟'))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
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
    error,
    refreshing,
    onRefresh,
    updateCompaniesInList,
    fetchingList,
  };
};
