import {BASE_URL_API} from '@/constants/url';
import axios from 'axios';

export const api = axios.create({
  baseURL: BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
