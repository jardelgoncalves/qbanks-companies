import {api} from './api';

export const FetchService = {
  async call(url: string) {
    const {data} = await api.get(url);

    return data;
  },
  async createOrUpdate<T>(path: string, body: T, isUpdate?: boolean) {
    if (isUpdate) {
      const {data} = await api.put(path, body);
      return data;
    }
    const {data} = await api.post(path, body);
    return data;
  },
};
