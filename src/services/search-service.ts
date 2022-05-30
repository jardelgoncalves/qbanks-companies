import stringSimilarity from 'string-similarity';
import debounce from 'lodash.debounce';
import {AddressType} from '@/interfaces/address';

type Company = {
  id: string;
  name: string;
  cnpj: string;
  logo: string;
  address: AddressType;
};

type SearchCompanyByTextParams = {
  query: string;
  companies: Company[];
};

const searchBySimilarity = (query: string, companies: Company[]) => {
  if (!query) {
    return companies;
  }

  return companies.filter(company => {
    const nameSimilarity = stringSimilarity.compareTwoStrings(
      query,
      company.name,
    );
    const cnpjSimilarity = stringSimilarity.compareTwoStrings(
      query,
      company.cnpj,
    );
    return nameSimilarity > 0.4 || cnpjSimilarity > 0.4;
  });
};

export const searchCompanyByTextDebounced = debounce(
  (params: SearchCompanyByTextParams, cb) => {
    cb(searchBySimilarity(params.query, params.companies));
  },
  700,
);
