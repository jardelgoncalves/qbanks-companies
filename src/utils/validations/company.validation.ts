import * as yup from 'yup';

export const companySchema = yup
  .object({
    logo: yup.string().url().required(),
    name: yup.string().required(),
    cnpj: yup.string().required(),
    description: yup.string().required(),
    zip: yup.string().required(),
    street: yup.string().required(),
    number: yup.string().required(),
    complement: yup.string(),
    neighborhood: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
  })
  .required();
