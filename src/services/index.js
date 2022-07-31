import URLS from './urls';
import { AxiosInstance } from '../utils/axios-instance';

export const fetchNews = async () => {
  const response = await AxiosInstance().get(URLS.news);
  return response.data;
};

export const fetchEconomy = async () => {
  const response = await AxiosInstance().get(URLS.economy);
  return response.data;
};

export const fetchEnglishLessons = async () => {
  const response = await AxiosInstance().get(URLS.englishLessons);
  return response.data;
};

export const fetchMultimedia = async () => {
  const response = await AxiosInstance().get(URLS.multimedia);
  return response.data;
};

export const fetchPressSummary = async () => {
  const response = await AxiosInstance().get(URLS.pressSummary);
  return response.data;
};

export const fetchSpecialFiles = async () => {
  const response = await AxiosInstance().get(URLS.specialFiles);
  return response.data;
};
