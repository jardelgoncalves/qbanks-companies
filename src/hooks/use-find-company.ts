import {Company} from '@/interfaces/company';
import {getById} from '@/services/company-service';
import {useEffect, useState} from 'react';

export const useFindCompany = (id?: string) => {
  const [company, setCompany] = useState<Company | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const findById = (companyId?: string) => {
    setLoading(true);
    if (!companyId) {
      setCompany(null);
      setLoading(false);
      return;
    }

    getById(companyId)
      .then(data => {
        setCompany(data);
        setError('');
      })
      .catch(() => setError('Something went wrong 😟'))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    findById(id);
  }, [id]);

  return {
    company,
    loading,
    error,
  };
};
