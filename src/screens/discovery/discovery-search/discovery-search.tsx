import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {styles} from './discovery-search.style';

const DiscoverySearch: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vSearch}>
      <TouchableOpacity activeOpacity={0.8} style={styles.toSearchLeft} onPress={() => navigation.navigate('Search')}>
        <Ionicon name="search" size={18} color="#828282" />
        <Text style={styles.tSearch}>Tìm kiếm nội dung...</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={styles.toSearchSpeed} onPress={() => navigation.navigate('Search')}>
        <Ionicon name="mic" size={18} color="#828282" />
      </TouchableOpacity>
    </View>
  );
};

export default DiscoverySearch;
