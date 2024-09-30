import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { logo, playBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function AccountContactScreen({ navigation }) {
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
              <Text style={[styles.title]}>CONTACT US</Text>
            </View>
            <Text style={styles.heading}>CALL US:</Text>
            <Text style={styles.subHeading}>+91 7208820740</Text>
            <Text style={{ ...styles.heading, marginTop: 25 }}>WRITE TO US:</Text>
            <Text style={styles.subHeading}>SUPPORT@GCPTHANE.COM</Text>
            <Text style={{ ...styles.heading, marginTop: 25 }}>ADDRESS:</Text>
            <Text style={{ ...styles.subHeading, width: '80%', lineHeight: 20 }}>
              NAMO GRAND CENTRAL PARK, KALPATARU PARKCITY, KOLSHET ROAD, THANE WEST, MAHARASHTRA -
              400 607
            </Text>
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
  },
  subHeading: {
    fontFamily: 'montserratLight',
    fontSize: 11,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
  },
};
