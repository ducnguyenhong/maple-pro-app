import { ImageProps } from 'react-native';
import LogoBundesliga from './images/logo-bundesliga.png';
import LogoChampionLeague from './images/logo-champion-league.png';
import LogoEuropaLeague from './images/logo-europa-league.png';
import LogoLaLiga from './images/logo-la-liga.png';
import LogoLeague1 from './images/logo-league-1.png';
import LogoPremierLeague from './images/logo-premier-league.png';
import LogoSerieA from './images/logo-serie-a.png';
import LogoVLeague from './images/logo-v-league.png';
import LogoWorldCup from './images/logo-world-cup.png';

export interface FootBallItem {
  url: string;
  logo: ImageProps;
  title: string;
}

const URL_WORLD_CUP =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+world+cup+2022&sxsrf=ALiCzsZ6k7NAyCr3eA0JcWNHn2tV-Ptxsg%3A1662147780385&ei=xFwSY5SZF4OPmAW4yY3wCQ&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+w&gs_lcp=Cgdnd3Mtd2l6EAEYADILCAAQgAQQsQMQyQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIICAAQgAQQsQM6CggAEEcQ1gQQsAM6BwgAELADEEM6DAguEMgDELADEEMYAUoECEEYAEoECEYYAFDyAVjyAWDvC2gBcAF4AIABbogBbpIBAzAuMZgBAKABAcgBC8ABAdoBBAgBGAg&sclient=gws-wiz#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;';

const URL_CHAMPION_LEAGUE =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+champions+league&sxsrf=ALiCzsaVH4PkOlkDYM3cMpYu-0S7H3s1KA%3A1662147837849&ei=_VwSY6DBM8ehmAXb36ywDw&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+cham&gs_lcp=Cgdnd3Mtd2l6EAMYADILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6DQgAEEcQ1gQQsAMQyQM6BwgAELADEEM6BAgjECc6CAgAEIAEELEDOggIABCxAxCDAUoECEEYAEoECEYYAFC0AljzBWCNDWgBcAF4AIABcIgBsgOSAQMwLjSYAQCgAQHIAQrAAQE&sclient=gws-wiz#sie=lg;/g/11mvmxlddg;2;/m/0c1q0;mt;fp;1;;;';

const URL_EUROPA_LEAGUE =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+europa+league&sxsrf=ALiCzsYeDU9IblCiViT3gMPQ6XTHfSnoWg%3A1662147882777&ei=Kl0SY5eCL5GUr7wPweC2kAs&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+europ&gs_lcp=Cgdnd3Mtd2l6EAMYATIFCAAQgAQyCwgAEIAEELEDEIMBMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEENKBAhBGABKBAhGGABQqQNYnBVgwh5oAXABeACAAXyIAboEkgEDMC41mAEAoAEByAEKwAEB&sclient=gws-wiz#sie=lg;/g/11ns2_zxyw;2;/m/01hrtp;mt;fp;1;;;';

const URL_LEAGUE_1 =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+league+1&sxsrf=ALiCzsYDZjcBGB6vqsQ5b_XFRMlSyN6BWQ%3A1662147700836&ei=dFwSY_vQMoqBmAXFhpqgAw&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+le&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzILCAAQgAQQsQMQgwEyBQgAEIAEMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoHCAAQsAMQQzoMCC4QyAMQsAMQQxgBSgQIQRgASgQIRhgAULECWLECYKAKaAFwAXgAgAFoiAFokgEDMC4xmAEAoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz#sie=lg;/g/11pzkdpbgw;2;/m/044hxl;mt;fp;1;;;';

const URL_PREMIER_LEAGUE =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+premier+league&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+PREM&aqs=chrome.0.0i131i433i512j69i57j0i512l7j0i131i433i512.13842869j1j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11pz7zbpnb;2;/m/02_tc;mt;fp;1;;;';

const URL_LA_LIGA =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+la+liga&sxsrf=ALiCzsZQhMteUxNCRDkAD2Y0hz5mLBaV3w%3A1662147658116&ei=SlwSY8rYBpeVr7wPhKmrMA&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+la&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgQIABADMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6CwgAEIAEELEDEIMBOggIABCABBCxAzoICAAQsQMQgwFKBAhBGABKBAhGGABQmARYoAVgrA9oAXABeACAAaEBiAGyApIBAzAuMpgBAKABAcgBCsABAQ&sclient=gws-wiz#sie=lg;/g/11sqj24s0_;2;/m/09gqx;mt;fp;1;;;';

const URL_BUNDESLIGA =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+bundesliga&sxsrf=ALiCzsZGn4XT4a4mjuYTXhyItld7jM2J_w%3A1662147722034&ei=ilwSY4nhAYKMr7wPgveEOA&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+bun&gs_lcp=Cgdnd3Mtd2l6EAEYATIQCAAQgAQQsQMQgwEQRhD9ATILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQywEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDAToKCAAQRxDWBBCwAzoHCAAQsAMQQzoECCMQJ0oECEEYAEoECEYYAFCABFiVCGCvFmgBcAF4AIABe4gB3gKSAQMwLjOYAQCgAQHIAQrAAQE&sclient=gws-wiz#sie=lg;/g/11j4slbd63;2;/m/037169;mt;fp;1;;;';

const URL_SERIE_A =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+serie+a&sxsrf=ALiCzsZSmA51zlGUeC-dLkYdTva2vzn5sg%3A1662147753580&ei=qVwSY6eII6abr7wPuNu28Ao&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+se&gs_lcp=Cgdnd3Mtd2l6EAEYATIECCMQJzILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQRxDWBBCwAzoHCAAQsAMQQzoMCC4QyAMQsAMQQxgBSgQIQRgASgQIRhgAUIQEWL8GYJ4PaAJwAXgAgAF0iAHbAZIBAzAuMpgBAKABAcgBDMABAdoBBAgBGAg&sclient=gws-wiz#sie=lg;/g/11sqvtnwvb;2;/m/03zv9;mt;fp;1;;;';

const URL_V_LEAGUE =
  'https://www.google.com/search?q=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+vleague&bih=656&biw=1536&hl=vi&sxsrf=ALiCzsY0wW-djCiC_VQ4clBUlUofRQc5IQ%3A1662150370284&source=hp&ei=4mYSY8mYD4eohwOLu7DoBg&iflsig=AJiK0e8AAAAAYxJ08tGiCdAZ7UoQEzqYTfP7bev5Kv5z&oq=l%E1%BB%8Bch+thi+%C4%91%E1%BA%A5u+vle&gs_lcp=Cgdnd3Mtd2l6EAMYADILCAAQgAQQsQMQgwEyDQgAEIAEELEDEIMBEAoyDQgAEIAEELEDEIMBEAoyBAgAEAMyBQgAEIAEMgsIABCABBCxAxCDATIGCAAQChADMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOgQIIxAnOgQIABBDOgQILhBDOgYIIxAnEBM6CgguELEDEIMBEEM6CQgjECcQRhD9AToHCAAQsQMQQzoHCAAQyQMQQzoFCAAQkgM6CAgAELEDEIMBOggIABCABBCxA1DbB1iqIGD4KWgIcAB4BoABggGIAcUUkgEEMS4yNJgBAKABAbABCg&sclient=gws-wiz#sie=lg;/g/11p064jgqw;2;/m/0263v35;mt;fp;1;;;';

export const FOOTBALL_DATA: FootBallItem[] = [
  {
    url: URL_PREMIER_LEAGUE,
    logo: LogoPremierLeague,
    title: 'Premier League - Ngoại Hạng Anh',
  },
  {
    url: URL_LA_LIGA,
    logo: LogoLaLiga,
    title: 'La Liga - Tây Ban Nha',
  },
  {
    url: URL_LEAGUE_1,
    logo: LogoLeague1,
    title: 'League 1 - Pháp',
  },
  {
    url: URL_BUNDESLIGA,
    logo: LogoBundesliga,
    title: 'Bundesliga - Đức',
  },
  {
    url: URL_SERIE_A,
    logo: LogoSerieA,
    title: 'Serie A - Ý',
  },
  {
    url: URL_CHAMPION_LEAGUE,
    logo: LogoChampionLeague,
    title: 'UEFA Champion League',
  },
  {
    url: URL_EUROPA_LEAGUE,
    logo: LogoEuropaLeague,
    title: 'UEFA Europa League',
  },
  {
    url: URL_WORLD_CUP,
    logo: LogoWorldCup,
    title: 'FIFA World Cup 2022',
  },
  {
    url: URL_V_LEAGUE,
    logo: LogoVLeague,
    title: 'V-League - Việt Nam',
  },
];
