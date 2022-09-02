import loadable from '@loadable/component';
import React, {useState, useCallback} from 'react';
import {SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import {useQueryClient} from 'react-query';
import {styles} from './discovery.style';

const DiscoveryInfo = loadable(() => import('./discovery-info'));
const DiscoveryNoti = loadable(() => import('./discovery-noti'));
const DiscoveryMenu = loadable(() => import('./discovery-menu'));
const DiscoveryNews = loadable(() => import('./discovery-news'));

const DiscoveryScreen: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    setRefresh(true);
    queryClient.refetchQueries(['DISCOVERY_NEWS']).finally(() => setRefresh(false));
  }, [queryClient]);

  return (
    <SafeAreaView style={styles.savMain}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
        <DiscoveryInfo />
        <DiscoveryNoti />
        <DiscoveryMenu />
        <DiscoveryNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
