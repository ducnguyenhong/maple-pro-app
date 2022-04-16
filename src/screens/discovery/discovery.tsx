import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {styles} from './discovery.style';
import loadable from '@loadable/component';

const DiscoverySearch = loadable(() => import('./discovery-search'));
const DiscoveryInfo = loadable(() => import('./discovery-info'));
const DiscoveryNoti = loadable(() => import('./discovery-noti'));
const DiscoveryMenu = loadable(() => import('./discovery-menu'));
const DiscoveryAssistant = loadable(() => import('./discovery-assistant'));

const DiscoveryScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.savMain}>
      <StatusBar />
      <ScrollView>
        <DiscoverySearch />
        <DiscoveryInfo />
        <DiscoveryNoti />
        <DiscoveryMenu />
        <DiscoveryAssistant />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
