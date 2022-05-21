import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import dayjs from 'dayjs';
import get from 'lodash/get';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {styles} from './note-normal.style';

interface Note {
  title: string;
  content: string;
  createdAt: string;
}

const NoteNormal: React.FC = () => {
  const navigation = useNavigation<any>();
  const [notes, setNotes] = useState<Note[]>([]);

  const getNoteList = useCallback(async () => {
    try {
      const localNotes = await AsyncStorage.getItem('normal-note');
      const noteList = localNotes ? [...JSON.parse(localNotes)] : [];
      setNotes(noteList);
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Lỗi',
        text2: `${get(e, 'message')}`,
      });
    }
  }, []);

  useEffect(() => {
    getNoteList();

    return () => {};
  }, [getNoteList]);

  return (
    <View style={styles.vMain}>
      <FlatList
        style={styles.flNoteList}
        showsVerticalScrollIndicator={false}
        data={notes}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.toNoteItem} activeOpacity={0.8}>
            <Text style={styles.tNoteItemTitle}>{item.title}</Text>
            <Text style={styles.tNoteItemPreview} numberOfLines={2}>
              {item.content}
            </Text>
            <Text style={styles.tNoteItemTime}>{dayjs(item.createdAt).format('DD/MM/YYYY')}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${index}`}
      />

      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('CreateNote')}
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
