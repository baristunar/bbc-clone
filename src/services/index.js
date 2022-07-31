import URLS from './urls';
import { AxiosInstance } from '../utils/axios-instance';

export const fetchLastMinuteNews = async () => {
  const response = await AxiosInstance().get(URLS.lastMinute);
  return response.data;
};

export const fetchEconomy = async () => {
  const response = await AxiosInstance().get(URLS.economy);
  return response.data;
};

export const fetchAgenda = async () => {
  const response = await AxiosInstance().get(URLS.agenda);
  return response.data;
};

export const fetchArt = async () => {
  const response = await AxiosInstance().get(URLS.art);
  return response.data;
};

export const fetchAutomobile = async () => {
  const response = await AxiosInstance().get(URLS.automobile);
  return response.data;
} ;

export const fetchEducation = async () => {
  const response = await AxiosInstance().get(URLS.education);
  return response.data;
};

export const fetchHealth = async () => {
  const response = await AxiosInstance().get(URLS.health);
  return response.data;
};

export const fetchLife = async () => {
  const response = await AxiosInstance().get(URLS.life);
  return response.data;
};

export const fetchNlife = async () => {
  const response = await AxiosInstance().get(URLS.nlife);
  return response.data;
};

export const fetchNtvMoney = async () => {
  const response = await AxiosInstance().get(URLS.ntvMoney);
  return response.data;
};

export const fetchPhotoGallery = async () => {
  const response = await AxiosInstance().get(URLS.photoGallery);
  return response.data;
};

export const fetchSport = async () => {
  const response = await AxiosInstance().get(URLS.sport);
  return response.data;
};

export const fetchTechnology = async () => {
  const response = await AxiosInstance().get(URLS.technology);
  return response.data;
};

export const fetchTravel = async () => {
  const response = await AxiosInstance().get(URLS.travel);
  return response.data;
};

export const fetchTurkeyNews = async () => {
  const response = await AxiosInstance().get(URLS.turkeyNews);
  return response.data;
};

export const fetchVideoGallery = async () => {
  const response = await AxiosInstance().get(URLS.videoGallery);
  return response.data;
};

export const fetchWorldNews = async () => {
  const response = await AxiosInstance().get(URLS.worldNews);
  return response.data;
};