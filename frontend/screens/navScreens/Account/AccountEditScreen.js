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
import { List } from 'react-native-paper';
import { logo, playBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';
import ProfilePictureUpdate from './ProfilePictureScreen';
import NotificationScreen from './NotificationScreen';

const windowHeight = Dimensions.get('window').height;

export default function AccountEditScreen({ navigation }) {
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleAction = (event) => {
    if (event === 'save') {
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName.account,
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
              <Text style={[styles.title]}>EDIT PROFILE</Text>
            </View>
            <View style={{ width: '90%' }}>
              <List.AccordionGroup>
                <List.Accordion
                  title="PERSONAL INFORMATION"
                  id="1"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <View style={styles.accordianBox}>
                    <Text style={styles.subHeading}>Full Name: </Text>
                    <TextInput
                      placeholder="Your Full Name"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.accordianBox, marginTop: 10 }}>
                    <Text style={styles.subHeading}>Email Address: </Text>
                    <TextInput
                      placeholder="Your Email address"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.accordianBox, marginTop: 10 }}>
                    <Text style={styles.subHeading}>Date of Birth: </Text>
                    <TextInput
                      placeholder="DD-MM-YYYY"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                </List.Accordion>
                <List.Accordion
                  title="CONTACT INFORMATION:"
                  id="2"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <Text style={{ ...styles.subHeading, textAlign: 'center' }}>
                    Contact: +91 9872-276-908{' '}
                  </Text>
                  <Text style={{ ...styles.subHeading, textAlign: 'center', marginTop: 10 }}>
                    Email: hello@kalpataru.com{' '}
                  </Text>
                </List.Accordion>
                <List.Accordion
                  title="PROFILE PICTURE:"
                  id="3"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <ProfilePictureUpdate> </ProfilePictureUpdate>
                </List.Accordion>
                <List.Accordion
                  title="CHANGE PASSWORD:"
                  id="4"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <View style={styles.accordianBox}>
                    <Text style={styles.subHeading}>Current Password: </Text>
                    <TextInput
                      placeholder="Your Current Password"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.accordianBox, marginTop: 10 }}>
                    <Text style={styles.subHeading}>New Password: </Text>
                    <TextInput
                      placeholder="Your New Password"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                  <View style={{ ...styles.accordianBox, marginTop: 10 }}>
                    <Text style={styles.subHeading}>Confirm Password: </Text>
                    <TextInput
                      placeholder="Confirm Password"
                      placeholderTextColor={colors.fourth.colorShade2}
                      // value={form.email}
                      // onChangeText={(text) => setFormDetails({ ...form, email: text })}
                      style={styles.input}
                    />
                  </View>
                </List.Accordion>
                <List.Accordion
                  title="NOTIFICATION SETTINGS:"
                  id="5"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <NotificationScreen />
                </List.Accordion>
                <List.Accordion
                  title="DELETE ACCOUNT:"
                  id="8"
                  style={styles.accordian}
                  titleStyle={styles.accordionTitle}
                  rippleColor="transparent"
                >
                  <Text style={{ ...styles.subHeading, textAlign: 'center' }}>TBD </Text>
                </List.Accordion>
              </List.AccordionGroup>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <TouchableWithoutFeedback onPress={() => handleAction('save')}>
                  <View
                    style={{
                      ...styles.titleBox,
                      width: '47%',
                    }}
                  >
                    <Text style={[styles.title]}>SAVE CHANGES</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={handleAction}>
                  <View
                    style={{
                      ...styles.titleBox,
                      backgroundColor: '#fff',
                      borderWidth: 1,
                      borderColor: colors.kalpataruColor.colorShade1,
                      width: '47%',
                    }}
                  >
                    <Text style={{ ...styles.title, color: colors.kalpataruColor.colorShade1 }}>
                      CANCEL
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
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
  image: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 3,
    marginTop: 5,
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
  },
  input: {
    color: colors.fourth.colorShade2,
    backgroundColor: '#fff',
    borderColor: colors.fourth.colorShade2,
    fontFamily: 'montserratRegular',
    borderWidth: 1,
    height: 25,
    paddingLeft: 20,
    borderRadius: 10,
    width: '65%',
  },
  accordian: {
    backgroundColor: '#fff',
  },
  accordionTitle: {
    fontFamily: 'montserratSemiBold',
    fontSize: 12,
    color: 'black',
  },
  accordianBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
};
