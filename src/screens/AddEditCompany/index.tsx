import Icon from 'react-native-remix-icon';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';

import {Button} from '@/components/ui/Button';
import {Input} from '@/components/ui/Input';
import {Text} from '@/components/ui/Text';
import {Notify} from '@/components/ui/Notify';
import {useFindCompany} from '@/hooks/use-find-company';
import {saveOrUpdate} from '@/services/company-service';

import {companySchema} from '@/utils/validations/company.validation';
import {theme} from '@/style/theme';
import type {Company} from '@/interfaces/company';

import * as S from './AddEditCompany.styled';

type ParamsRoute = {
  companyId?: string;
};

type ValueKey =
  | 'number'
  | 'name'
  | 'logo'
  | 'cnpj'
  | 'description'
  | 'zip'
  | 'street'
  | 'neighborhood'
  | 'city'
  | 'state';

export const AddEditCompanyScreen = () => {
  const [openNotify, setOpenNotify] = useState(false);
  const isFocused = useIsFocused();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(companySchema),
    defaultValues: {
      name: '',
      logo: '',
      cnpj: '',
      description: '',
      zip: '',
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      complement: '',
      state: '',
    },
  });

  const route = useRoute();
  const navigation = useNavigation();
  const {company} = useFindCompany((route.params as ParamsRoute)?.companyId);

  useEffect(() => {
    if (isFocused) {
      reset();
    }
  }, [reset, isFocused]);

  useEffect(() => {
    if (company) {
      const editData = {
        name: company.name,
        logo: company.logo,
        cnpj: company.cnpj,
        description: company.description,
        ...company.address,
        complement: company.address.complement ?? '',
      };

      const fields = Object.keys(editData) as ValueKey[];
      fields.forEach(field => setValue(field, editData[field]));
    }
  }, [company, setValue]);

  const onSubmit = handleSubmit(data => {
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
    saveOrUpdate(companyData, (route.params as ParamsRoute)?.companyId).then(
      () => {
        setOpenNotify(true);
      },
    );
  });

  const onRequestClose = () => {
    navigation.navigate('Home');
    setOpenNotify(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          width="48px"
          variant="ghost"
          bg="primary.700"
          onPress={() => navigation.goBack()}>
          <Text>b</Text>
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <S.Container>
      <Notify isOpen={openNotify} onRequestClose={onRequestClose}>
        <Icon
          name="checkboxCircle-fill"
          size="70"
          color={theme.colors.success[700]}
        />
        <Text>
          {(route.params as ParamsRoute)?.companyId
            ? 'Company updated successfully'
            : 'Company created successfully'}
        </Text>
      </Notify>
      <ScrollView>
        <S.Form>
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Logo"
                placeholder="Logo URL"
                error={errors.logo?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="logo"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Name"
                placeholder="Name"
                error={errors.name?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="CNPJ"
                placeholder="CNPJ"
                keyboardType="numeric"
                maxLength={14}
                error={errors.cnpj?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="cnpj"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Description"
                placeholder="Description"
                error={errors.description?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="description"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Zip Code"
                placeholder="Zip Code"
                keyboardType="numeric"
                maxLength={8}
                error={errors.zip?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="zip"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Street"
                placeholder="Street"
                error={errors.street?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="street"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Number"
                placeholder="Number"
                keyboardType="numeric"
                error={errors.number?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="number"
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Complement"
                placeholder="Complement"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="complement"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="Neighborhood"
                placeholder="Neighborhood"
                error={errors.neighborhood?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="neighborhood"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="City"
                placeholder="City"
                error={errors.city?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="city"
          />
          <Controller
            control={control}
            rules={{required: true}}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                label="State"
                placeholder="State"
                error={errors.state?.message}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
            name="state"
          />
          <S.SubmitWrapper>
            <Button variant="raised" onPress={onSubmit}>
              <Text color="grayscale.100">Save</Text>
            </Button>
          </S.SubmitWrapper>
        </S.Form>
      </ScrollView>
    </S.Container>
  );
};
