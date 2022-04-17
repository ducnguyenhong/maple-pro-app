import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './discovery-assistant.style';
// import ImgAssistant from '../images/img-assistant.png';

const DiscoveryAssistant: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.vAssistant}>
      <Text style={styles.tAssistant}>Trợ lý ảo Lily</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('VirtualAssistant')}
        style={styles.toAssistant}>
        {/* <Image source={ImgAssistant} resizeMode="cover" style={styles.imgAssistant} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default DiscoveryAssistant;
