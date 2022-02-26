import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './note-normal.style';

const NoteNormal: React.FC = () => {
  return (
    <View style={styles.vMain}>
      <FlatList
        style={styles.flNoteList}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.toNoteItem} activeOpacity={0.8}>
            <Text style={styles.tNoteItemTitle}>Tiêu đề</Text>
            <Text style={styles.tNoteItemPreview} numberOfLines={2}>
              Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội dung Nội
              dung Nội dung Nội dung Nội dung Nội dung Nội dung
            </Text>
            <Text style={styles.tNoteItemTime}>27/02/2022</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => `${item}`}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: 55,
          height: 55,
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: 'green',
          zIndex: 40,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 30,
            color: '#FFF',
          }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoteNormal;
