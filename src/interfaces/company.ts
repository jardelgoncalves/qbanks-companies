import {AddressType} from './address';

export type Company = {
  id: string;
  name: string;
  cnpj: string;
  logo: string;
  address: AddressType;
};
