import {BASE_URL_API} from '@/constants/url';
import {FetchService} from './fetch-service';

export const getListCompanies = async () => {
  const URL = `${BASE_URL_API}/companies/?format=json`;
  const data = await FetchService.call(URL);

  return data;
};

export const getById = async (id: string) => {
  const URL = `${BASE_URL_API}/companies/${id}/?format=json`;
  const data = await FetchService.call(URL);

  return data;
};
