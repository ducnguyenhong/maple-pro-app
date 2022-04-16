import React from 'react';
import {FlatList, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {styles} from './discovery-noti.style';

const DiscoveryNoti: React.FC = () => {
  return (
    <View style={styles.vNoti}>
      <View style={styles.vLabel}>
        <Text style={styles.tLabel}>Thông báo mới</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.toSeeAll}>
          <Text style={styles.tSeeAll}>Xem thêm {'>>'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={[1, 2, 3]}
        keyExtractor={item => `${item}`}
        style={styles.flNoti}
        renderItem={({item}) => (
          <TouchableHighlight style={styles.thNotiItem}>
            <View style={styles.vNotiItem}>
              <View style={styles.vNotiItemTime}>
                <Text style={styles.tNotiItemTime}>14:00</Text>
              </View>
              <View style={styles.vNotiItemContent}>
                <Text numberOfLines={1} style={styles.tNotiItemTitle}>
                  Update task jira
                </Text>
                <Text numberOfLines={1} style={styles.tNotiItemContent}>
                  Update task jira Update task jira Update task jira
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

export default DiscoveryNoti;
