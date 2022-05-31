import {Company} from '@/interfaces/company';
import {FetchService} from './fetch-service';

export const getListCompanies = async () => {
  const URL = '/companies/?format=json';
  const data = await FetchService.call(URL);

  return data;
};

export const getById = async (id: string) => {
  const URL = `/companies/${id}/?format=json`;
  const data = await FetchService.call(URL);

  return data;
};

export const saveOrUpdate = async (body: Omit<Company, 'id'>, id?: string) => {
  const URL = `/companies/${id ? `${id}/` : ''}?format=json`;
  const data = await FetchService.createOrUpdate(URL, body);

  return data;
};
