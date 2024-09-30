import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Snackbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { isValidEmail, checkPassStrength } from '../utility/validate';
import config from '../config/config';
import { login, selectAuthData, setNavActive } from '../app/slices/authSlice';
import { colors } from '../utility/theme';
import { authBackground, logo, google, facebook } from '../assets/asset';

export default function Authentication({ navigation }) {
  const [form, setFormDetails] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: false, password: false });
  const [loading, setLoading] = useState(false);
  const [changeColor, setChangeColor] = useState({
    continue: { bgColor: '#fff', textColor: colors.fourth.colorShade2 },
    google: { bgColor: '#fff', textColor: colors.fourth.colorShade2 },
    facebook: { bgColor: '#fff', textColor: colors.fourth.colorShade2 },
    skip: { bgColor: '#fff', textColor: colors.fourth.colorShade2 },
  });
  const dispatchToRedux = useDispatch();
  const authData = useSelector(selectAuthData);

  const handleSkip = async () => {
    await dispatchToRedux(setNavActive({ activeNav: null }));
    navigation.navigate('Home');
  };

  const handlePressIn = (event) => {
    setChangeColor((prevState) => ({
      ...prevState,
      [event]: { bgColor: colors.kalpataruColor.colorShade1, textColor: '#fff' },
    }));
  };
  const handlePressOut = (event) => {
    setChangeColor((prevState) => ({
      ...prevState,
      [event]: { bgColor: '#fff', textColor: colors.fourth.colorShade2 },
    }));
  };

  const handleSubmit = async () => {
    setErrors({ password: false, email: false });
    if (!isValidEmail(form.email)) {
      setErrors({ ...errors, email: true });
    } else if (!checkPassStrength(form.password)) {
      setErrors({ ...errors, password: true });
    } else {
      setLoading(true);
      console.log('before loading');
      await dispatchToRedux(
        login({ email: form.email.toLocaleLowerCase(), password: form.password }),
      );
      console.log('after loading');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authData.isAuthenticated) {
      navigation.navigate('Home', {});
    }
  }, [authData]);

  const handleGoogleOauth = async () => {
    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ];
    const redirect_uri = `${config.domain_api}/api/auth/oauth/google/callback`;

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: config.google_client_id,
      redirect_uri,
      scope: scopes.join(' '),
      access_type: 'offline',
      state: '1234_purpleGoogle',
      prompt: 'consent',
    });

    const result = await WebBrowser.openAuthSessionAsync(
      `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`,
      redirect_uri,
    );

    if (result.type === 'success') {
      const url = result.url;
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      const error = params.get('error');
      if (error) {
        navigation.navigate('BottomNavigation', { user }); // TODO: to be removed from here
        return console.log(error);
      }
      const email = params.get('email');
      const name = params.get('name');

      const user = {
        email,
        name,
      };
      navigation.navigate('BottomNavigation', { user });
    }
  };

  const handleFacebookOauth = async () => {
    try {
      const redirect_uri = `${config.domain_api}/api/auth/oauth/facebook/callback`;

      const params = new URLSearchParams({
        client_id: config.facebook_id,
        redirect_uri,
        scope: 'email',
        auth_type: 'rerequest',
      });

      const result = await WebBrowser.openAuthSessionAsync(
        `https://www.facebook.com/v19.0/dialog/oauth?${params.toString()}`,
        redirect_uri,
      );

      if (result.type === 'success') {
        const url = result.url;
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);
        const error = params.get('error');
        if (error) {
          navigation.navigate('BottomNavigation', { user }); // TODO: to be removed from here
          return console.log(error);
        }
        const email = params.get('email');
        const name = params.get('name');

        const user = {
          email,
          name,
        };
        navigation.navigate('BottomNavigation', { user });
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <ImageBackground source={authBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.logo}>
          <Image source={logo} style={styles.image} />
        </View>
        <Text style={styles.heading}>Welcome</Text>
        <Card style={styles.card}>
          <Card.Content>
            <Text style={styles.cardHeading}>New user? Create an account</Text>
            <TextInput
              placeholder="Email address"
              placeholderTextColor={colors.fourth.colorShade2}
              value={form.email}
              onChangeText={(text) => setFormDetails({ ...form, email: text })}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.fourth.colorShade2}
              secureTextEntry
              value={form.password}
              onChangeText={(text) => setFormDetails({ ...form, password: text })}
              style={styles.input}
            />

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={handleSubmit}
              onPressIn={() => handlePressIn('continue')}
              onPressOut={() => handlePressOut('continue')}
              style={{
                ...styles.button,
                width: '40%',
                height: 30,
                backgroundColor: changeColor.continue.bgColor,
                marginTop: Dimensions.get('window').height * 0.02,
                marginBottom: Dimensions.get('window').height * 0.02,
              }}
            >
              <Text
                style={{
                  fontFamily: 'montserratRegular',
                  fontSize: 12,
                  color: changeColor.continue.textColor,
                }}
              >
                CONTINUE
              </Text>
            </TouchableOpacity>
          </Card.Content>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              fontFamily: 'montserratMedium',
              marginBottom: Dimensions.get('window').height * 0.02,
            }}
          >
            OR
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'montserratMedium',
              marginBottom: Dimensions.get('window').height * 0.01,
            }}
          >
            Don't have an account? Signup
          </Text>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGoogleOauth}
            onPressIn={() => handlePressIn('google')}
            onPressOut={() => handlePressOut('google')}
            style={{
              ...styles.button,
              width: '80%',
              height: 35,
              backgroundColor: changeColor.google.bgColor,
              marginBottom: Dimensions.get('window').height * 0.01,
              flexDirection: 'row',
            }}
          >
            <View style={styles.authIcon}>
              <Image source={google} style={styles.image} />
            </View>
            <Text
              style={{
                fontFamily: 'montserratRegular',
                fontSize: 12,
                color: changeColor.google.textColor,
              }}
            >
              Continue with Google
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleFacebookOauth}
            onPressIn={() => handlePressIn('facebook')}
            onPressOut={() => handlePressOut('facebook')}
            style={{
              ...styles.button,
              width: '80%',
              height: 35,
              backgroundColor: changeColor.facebook.bgColor,
              marginBottom: Dimensions.get('window').height * 0.01,
              flexDirection: 'row',
            }}
          >
            <View style={styles.authIcon}>
              <Image source={facebook} style={styles.image} />
            </View>
            <Text
              style={{
                fontFamily: 'montserratRegular',
                fontSize: 12,
                color: changeColor.facebook.textColor,
              }}
            >
              Continue with Facebook
            </Text>
          </TouchableOpacity>
        </Card>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handleSkip}
          onPressIn={() => handlePressIn('skip')}
          onPressOut={() => handlePressOut('skip')}
          style={{
            ...styles.button,
            width: '20%',
            height: 35,
            backgroundColor: changeColor.skip.bgColor,
            marginTop: Dimensions.get('window').height * 0.05,
          }}
        >
          <Text
            style={{
              fontFamily: 'montserratRegular',
              fontSize: 12,
              color: changeColor.skip.textColor,
            }}
          >
            SKIP
          </Text>
        </TouchableOpacity>
      </View>
      <Snackbar
        visible={errors.email || errors.password}
        onDismiss={() => {
          setErrors({ email: false, password: false });
        }}
        duration={2000}
      >
        {errors.email
          ? 'Email address is invalid!'
          : 'Password should contain at least one uppercase letter, one number, and minimum 6 characters'}
      </Snackbar>
    </ImageBackground>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 50,
    marginTop: Dimensions.get('window').height * 0.06,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  authIcon: {
    width: 22,
    height: 22,
    marginRight: 7,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  card: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.fourth.colorShade3,
    padding: 15,
    borderColor: colors.fourth.colorShade2,
    borderWidth: 1,
  },
  heading: {
    fontSize: 18,
    marginBottom: Dimensions.get('window').height * 0.05,
    fontFamily: 'montserratRegular',
    marginTop: Dimensions.get('window').height * 0.05,
  },
  cardHeading: {
    textAlign: 'center',
    marginBottom: Dimensions.get('window').height * 0.04,
    fontFamily: 'montserratMedium',
  },
  input: {
    color: colors.fourth.colorShade2,
    backgroundColor: '#fff',
    borderColor: colors.fourth.colorShade2,
    fontFamily: 'montserratRegular',
    borderWidth: 1,
    marginBottom: Dimensions.get('window').height * 0.02,
    height: 35,
    paddingLeft: 20,
    borderRadius: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.fourth.colorShade2,
    alignSelf: 'center',
    color: colors.fourth.colorShade2,
  },
};
