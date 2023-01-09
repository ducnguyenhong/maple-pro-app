import { useRoute } from '@react-navigation/native';
import NavigationBar from 'components/navigation-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';

const WebViewScreen: React.FC = () => {
  const route = useRoute<any>();
  const {url} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationBar title="Maple Pro" />
      <WebView source={{uri: url}} javaScriptEnabled />
    </SafeAreaView>
  );
};

export default WebViewScreen;
