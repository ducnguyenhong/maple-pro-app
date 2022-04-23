import axios from 'axios';
import get from 'lodash/get';

export const getNews = () => {
  return axios
    .get('https://newsapi.org/v2/everything', {
      params: {
        q: 'tin tức',
        apiKey: '4401cc4d4f6a4072b22f8e379a7dc6b7',
        pageSize: 10,
        domains: '24h.com.vn,vnexpress.net,zingnews.vn,vtv.vn',
      },
    })
    .then(response => {
      return get(response, 'data.articles');
    })
    .catch(e => e);
};
