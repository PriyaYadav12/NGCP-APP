import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import { logo, playBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function AccountFeedbackScreen({ navigation }) {
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  return (
    <>
      <ImageBackground source={playBackground} style={styles.backgroundImage}>
        <ScrollView>
          <TopIcons />
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={handleLogoPress}>
              <View style={styles.logo}>
                <Image
                  source={logo}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
            <View
              style={{
                ...styles.titleBox,
                marginTop: windowHeight * 0.05,
                marginBottom: windowHeight * 0.02,
              }}
            >
              <Text style={[styles.title]}>FEEDBACK</Text>
            </View>
            <Text style={styles.heading}>WE VALUE YOUR FEEDBACK</Text>
            <Text style={styles.subHeading}>
              At NaMo Grand Central Park, we are committed to providing you with the best experience
              possible. Your feedback helps us understand how we can improve and better serve your
              needs. Please take a moment to share your thoughts with us.
            </Text>
            <Text style={{ ...styles.heading, marginTop: windowHeight * 0.1 }}>
              HOW WAS YOUR EXPERIENCE WITH NGCP?
            </Text>
            <TextInput
              placeholder="Your Feedback..."
              placeholderTextColor={colors.fourth.colorShade2}
              // value={form.email}
              // onChangeText={(text) => setFormDetails({ ...form, email: text })}
              style={styles.input}
            />
            <TouchableWithoutFeedback>
              <View
                style={{
                  ...styles.titleBox,
                  marginTop: windowHeight * 0.05,
                  marginBottom: windowHeight * 0.02,
                }}
              >
                <Text style={[styles.title]}>SUBMIT</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.account} />
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 120,
    height: 50,
  },
  titleBox: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
    backgroundColor: colors.kalpataruColor.colorShade1,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'montserratMedium',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 2,
  },
  heading: {
    fontFamily: 'montserratMedium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
  subHeading: {
    fontFamily: 'montserratLight',
    fontSize: 11,
    marginRight: 10,
    marginTop: 10,
    width: '80%',
    textAlign: 'center',
  },
  input: {
    color: colors.fourth.colorShade2,
    backgroundColor: '#fff',
    borderColor: colors.fourth.colorShade2,
    fontFamily: 'montserratRegular',
    borderWidth: 1,
    height: windowHeight * 0.2,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    width: '65%',
    marginTop: 20,
  },
};
