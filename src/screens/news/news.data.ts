import {ImageSourcePropType} from 'react-native';
import Logo24h from '../../assets/news/logo-24h.png';
import LogoZingNews from '../../assets/news/logo-zingnews.png';
import LogoVnExpress from '../../assets/news/logo-vnexpress.png';
import LogVTVNews from '../../assets/news/logo-vtvnews.png';
import LogoDanTri from '../../assets/news/logo-dantri.png';
import LogoVietNamNet from '../../assets/news/logo-vietnamnet.png';

interface NewsWeb {
  url: string;
  title: string;
  logo: ImageSourcePropType;
}

export const NEWS_WEB_LIST: NewsWeb[] = [
  {
    url: 'https://www.24h.com.vn',
    title: '24h',
    logo: Logo24h,
  },
  {
    url: 'https://zingnews.vn',
    title: 'Zing News',
    logo: LogoZingNews,
  },
  {
    url: 'https://vnexpress.net',
    title: 'VnExpress',
    logo: LogoVnExpress,
  },
  {
    url: 'https://vtv.vn',
    title: 'VTV News',
    logo: LogVTVNews,
  },
  {
    url: 'https://dantri.com.vn/',
    title: 'Dân Trí',
    logo: LogoDanTri,
  },
  {
    url: 'https://vietnamnet.vn',
    title: 'Vietnamnet',
    logo: LogoVietNamNet,
  },
];
