import loadable from '@loadable/component';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './discovery.style';

const DiscoverySearch = loadable(() => import('./discovery-search'));
const DiscoveryInfo = loadable(() => import('./discovery-info'));
const DiscoveryNoti = loadable(() => import('./discovery-noti'));
const DiscoveryMenu = loadable(() => import('./discovery-menu'));
const DiscoveryNews = loadable(() => import('./discovery-news'));

const DiscoveryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      {/* <DiscoverySearch /> */}
      <DiscoveryInfo />
      <DiscoveryNoti />
      <DiscoveryMenu />
      <DiscoveryNews />
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
