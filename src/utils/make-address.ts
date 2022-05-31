import {AddressType} from '@/interfaces/address';

export const makeAddress = (address: AddressType) => {
  return `${address.street} ${address.number ?? 'S/N'} ${
    address.complement ?? 'S/C'
  } ${address.neighborhood}, ${address.city} ${address.state} ${address.zip}`;
};
