import NtvMoney from '../assets/images/ntv-money.svg';
import Nlife from '../assets/images/n-life.svg';
import Sport from '../assets/images/sport.svg';
import { ROUTES } from '../constants/routes';

export const NAV_MENU = [
  {
    name: 'SON DAKİKA',
    link: ROUTES.lastMinute,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'Türkiye',
    link: ROUTES.turkey,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'Para',
    image: NtvMoney,
    link: ROUTES.ntvMoney,
    width: 93,
    height: 20
  },
  {
    name: 'Dünya',
    link: ROUTES.worldNews,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'N life',
    image: Nlife,
    link: ROUTES.nlife,
    width: 80,
    height: 21
  },
  {
    name: 'Teknoloji',
    link: ROUTES.technology,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'Spor',
    image: Sport,
    link: ROUTES.sport,
    width: 80,
    height: 21
  },
  {
    name: 'Sağlık',
    link: ROUTES.health,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'Otomobil',
    link: ROUTES.automobile,
    image: null,
    width: null,
    height: null
  },
  {
    name: 'Eğitim',
    link: ROUTES.education,
    image: null,
    width: null,
    height: null
  }
];
