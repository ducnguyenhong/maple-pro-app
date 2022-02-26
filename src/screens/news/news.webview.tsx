import {useRoute} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';

const NewsWebView: React.FC = () => {
  const route = useRoute<any>();
  const {url} = route.params;

  return (
    <WebView
      source={{
        uri: url,
      }}
      javaScriptEnabled
    />
  );
};

export default NewsWebView;
