import {useRoute} from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';

const WebViewScreen: React.FC = () => {
  const route = useRoute<any>();
  const {url} = route.params;

  return <WebView source={{uri: url}} javaScriptEnabled />;
};

export default WebViewScreen;
