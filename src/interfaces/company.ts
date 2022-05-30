import {AddressType} from './address';

export type Company = {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  logo: string;
  address: AddressType;
};
