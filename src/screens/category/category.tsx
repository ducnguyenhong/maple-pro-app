import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import LogoMen from '../../assets/common/user-men.png';
import LogoVerify from '../../assets/common/check-circle.png';
import {styles} from './category.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {CATEGORY_LIST} from './category.data';
import {useNavigation} from '@react-navigation/native';

const CategoryScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vMain}>
      <View style={styles.vTop}>
        <Image source={LogoMen} resizeMode="contain" style={styles.imgUser} />
        <View style={styles.vTopInfo}>
          <View style={styles.vTopName}>
            <Text style={styles.tFullname}>Nguyễn Hồng Đức</Text>
            <Image source={LogoVerify} style={styles.imgVerify} />
          </View>
          <Text style={styles.tUsername}>@admin</Text>
        </View>
      </View>

      <View>
        <FlatList
          data={CATEGORY_LIST}
          keyExtractor={item => item.icon}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate('NewsWebView', {
                  url: 'https://www.24h.com.vn/bong-da/lich-thi-dau-bong-da-hom-nay-moi-nhat-c48a364371.html',
                })
              }>
              <Icon name={item.icon} />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;
