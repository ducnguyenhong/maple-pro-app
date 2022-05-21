import loadable from '@loadable/component';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {styles} from './discovery.style';

const DiscoveryInfo = loadable(() => import('./discovery-info'));
const DiscoveryNoti = loadable(() => import('./discovery-noti'));
const DiscoveryMenu = loadable(() => import('./discovery-menu'));
const DiscoveryNews = loadable(() => import('./discovery-news'));

const DiscoveryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoveryInfo />
        <DiscoveryNoti />
        <DiscoveryMenu />
        <DiscoveryNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
