import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import TextInputForm from '../components/TextInputForm';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import LoginApp from '../loginApp';
import ErrorMessage from '../components/Form/ErrorMessage';
import {firebase} from '@react-native-firebase/auth';
import * as Yup from 'yup';

const Login = name => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
  });

  // async function signUp() {
  //   if (value.email === '' || value.password === '') {
  //     setValue({
  //       ...value,
  //       error: 'Email and password are mandatory.',
  //     });
  //     return;
  //   }

  //   try {
  //     await createUserWithEmailAndPassword(auth, value.email, value.password);
  //     // navigation.navigate('Sign In');
  //   } catch (error) {
  //     setValue({
  //       ...value,
  //       error: error.message,
  //     });
  //   }
  // }
  return (
    <Screen style={styles.MainView}>
      <View style={styles.titleView}>
        <Text style={styles.loginTxt}>LOGIN</Text>
        <Text style={styles.subTxt}>
          please login into your account to use the app
        </Text>
      </View>
      <View style={styles.formview}>
        <Formik
          validationSchema={validationSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View style={{padding: 20}}>
              <TextInputForm
                placeholder={'Email'}
                iconName={'user'}
                // onChangeText={text => setValue({...value, email: text})}
              />

              <ErrorMessage error={errors[name]} visible={touched[name]} />

              <TextInputForm
                placeholder={'Password'}
                iconName={'key'}
                // onBlur={() => setFieldTouched(name)}

                secureTextEntry
                // onChangeText={text => setValue({...value, password: text})}
              />

              <ErrorMessage error={errors[name]} visible={touched[name]} />

              <AppButton style={styles.loginButton} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  MainView: {
    backgroundColor: '#f4d9d9',
  },
  titleView: {
    width: '75%',
    padding: 20,
    marginTop: 100,
  },

  loginTxt: {
    color: '#b82c45',
    fontSize: 30,
    fontWeight: '700',
  },
  subTxt: {
    fontSize: 16,
  },
  loginButton: {
    color: 'white',
    backgroundColor: '#b82c45',
    marginTop: 20,
  },
});

export default Login;
