import React, { useCallback, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { useQueryClient } from 'react-query';
import DiscoveryDashboard from './discovery-dashboard';
import DiscoveryInfo from './discovery-info';
import DiscoveryMenu from './discovery-menu';
import DiscoveryNews from './discovery-news';
import DiscoverySearch from './discovery-search';
import { styles } from './discovery.style';

const DiscoveryScreen: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const queryClient = useQueryClient();

  const onRefresh = useCallback(() => {
    setRefresh(true);
    queryClient.refetchQueries(['DISCOVERY_NEWS']).finally(() => setRefresh(false));
  }, [queryClient]);

  return (
    <SafeAreaView style={styles.savMain}>
      <StatusBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
        <DiscoveryInfo />
        <DiscoveryDashboard />
        <DiscoverySearch />
        <DiscoveryMenu />
        <DiscoveryNews />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
