import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';
import {Formik} from 'formik';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as yup from 'yup';
import {styles} from './create-note.style';
import Toast from 'react-native-toast-message';
import get from 'lodash/get';
import {useNavigation} from '@react-navigation/native';

const CreateNote: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.vMain}>
      <Formik
        initialValues={{
          title: '',
          content: '',
        }}
        validationSchema={yup.object().shape({
          content: yup.string().required('Hãy nhập nội dung'),
        })}
        onSubmit={async (values, {setSubmitting}) => {
          try {
            const localNotes = await AsyncStorage.getItem('normal-note');
            const noteList = localNotes ? [...JSON.parse(localNotes)] : [];
            noteList.push({
              title: values.title,
              content: values.content,
              createdAt: dayjs().toDate(),
            });
            await AsyncStorage.setItem('normal-note', JSON.stringify(noteList));

            Toast.show({
              type: 'success',
              text1: 'Tạo ghi chú thành công',
            });
            navigation.goBack();
          } catch (e) {
            Toast.show({
              type: 'error',
              text1: 'Lỗi',
              text2: `${get(e, 'message')}`,
            });
          }
          setSubmitting(false);
        }}>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <View style={styles.vInput}>
            <View style={styles.vInpTitle}>
              <Text style={styles.tLabel}>Tiêu đề</Text>
              <TextInput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                autoCapitalize="none"
                style={styles.inpTitle}
                returnKeyType="next"
              />
            </View>

            <View style={styles.vInpContent}>
              <Text style={styles.tLabel}>Nội dung</Text>
              <TextInput
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                style={styles.inpContent}
                returnKeyType="done"
                multiline
                numberOfLines={10}
              />
              <Text style={styles.tContentError}>{errors.content && touched.content && errors.content}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.toCreate}
              onPress={() => handleSubmit()}
              disabled={isSubmitting}>
              <Text style={styles.tCreate}>Tạo mới</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateNote;
