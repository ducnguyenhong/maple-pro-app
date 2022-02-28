import {Formik} from 'formik';
import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import * as yup from 'yup';

const CreateNote: React.FC = () => {
  return (
    <View>
      <Formik
        initialValues={{
          title: '',
          content: '',
        }}
        validationSchema={yup.object().shape({
          title: yup.string().required('Username is required'),
          content: yup
            .string()
            .min(6, 'Password minimum 6 characters')
            .max(14, 'Password up to 14 characters')
            .required('Password is required'),
        })}
        onSubmit={(values, {setSubmitting}) => {}}>
        {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
          <View>
            <Text>Tiêu đề</Text>
            <TextInput
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              autoCapitalize="none"
              // style={styles.ipUsername}
              returnKeyType="next"
            />
            <Text
            //  style={styles.tErrorUsername}
            >
              {errors.title && touched.title && errors.title}
            </Text>
            <View
            // style={styles.vPassword}
            >
              <Text>Nội dung</Text>
              <TextInput
                onChangeText={handleChange('content')}
                onBlur={handleBlur('content')}
                value={values.content}
                // style={styles.ipPassword}
                returnKeyType="done"
              />
              <Text
              //  style={styles.tErrorPassword}
              >
                {errors.content && touched.content && errors.content}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleSubmit()} disabled={isSubmitting}>
              {isSubmitting ? (
                <Text
                //  style={styles.tSignInLoading}
                >
                  ...
                </Text>
              ) : (
                <Text
                // style={styles.tSignIn}
                >
                  Tạo mới
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateNote;
