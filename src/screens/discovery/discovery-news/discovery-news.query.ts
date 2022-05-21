import axios from 'axios';
import get from 'lodash/get';
import {convertXML} from 'simple-xml-to-json';

export const getNews = () => {
  return axios
    .get('https://news.google.com/rss?q=vietnam&hl=vi-VI')
    .then(response => {
      const a = convertXML(response.data);

      const b = get(a, 'rss.children.0.channel.children');

      const c = b.filter((item: any) => !!item.item);

      const d = c.map((item: any) => ({
        title: get(item, 'item.children.0.title.content'),
        link: get(item, 'item.children.1.link.content'),
        pubDate: get(item, 'item.children.3.pubDate.content'),
        source: get(item, 'item.children.5.source.content'),
      }));

      return d;
    })

    .catch(e => e);
};
