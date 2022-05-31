import {Company} from '@/interfaces/company';
import {saveOrUpdate} from '@/services/company-service';
import {useState} from 'react';

type Data = {
  complement: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  zip: string;
  name: string;
  logo: string;
  cnpj: string;
  description: string;
};

export const useSaveCompany = () => {
  const [success, setSuccess] = useState(false);
  const [showNotify, setShowNotify] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSaveCompany = (data: Data, companyId?: string, cb?: () => void) => {
    setLoading(true);
    setShowNotify(true);
    setSuccess(false);

    const {name, cnpj, logo, description, ...address} = data;
    const companyData: Omit<Company, 'id'> = {
      name,
      cnpj,
      logo,
      description,
      address: {
        ...address,
        complement: address.complement ?? '',
      },
    };
    saveOrUpdate(companyData, companyId)
      .then(() => {
        setSuccess(true);

        setTimeout(() => {
          setShowNotify(false);
          cb?.();
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    showNotify,
    onSaveCompany,
    loading,
    success,
  };
};
