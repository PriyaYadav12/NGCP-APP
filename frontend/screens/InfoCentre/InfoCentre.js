import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import BottomNavigation from '../../components/BottomNavigation';
import { logo, birdsBackground } from '../../assets/asset';
import TopIcons from '../../components/TopIcons';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../utility/theme';

const windowHeight = Dimensions.get('window').height;

export default function InfoCentre({ navigation }) {
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  return (
    <>
      <ImageBackground source={birdsBackground} style={styles.backgroundImage}>
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
          <View style={styles.titleBox}>
            <Text style={styles.title}>PARK RULES</Text>
          </View>
          <Text style={styles.heading}>GRAND CENTRAL PARK: RULES &REGULATIONS</Text>

          <Text style={{ ...styles.heading, width: '90%', textAlign: 'left' }}>
            LOCATION -{' '}
            <Text style={styles.subHeading}>
              At the 3 Entry Gates (North, West and East) of the Park
            </Text>
          </Text>

          <Text style={{ ...styles.heading, width: '90%', textAlign: 'left' }}>
            PARK OPERATOR - <Text style={styles.subHeading}>Agile Real Estate Pvt Ltd.</Text>
          </Text>

          <View style={styles.pictogram}>
            <Text style={{ ...styles.heading, textAlign: 'left' }}>PICTOGRAMS REQUIRED</Text>
            {dummyData.pictogram.map((rule, i) => (
              <Text key={i} style={styles.subHeading}>
                {i + 1} {rule}
              </Text>
            ))}
            <Text style={{ ...styles.subHeading, marginTop: 20 }}>
              Entry to and use of the Grand Central Park, Thane ("Park") is subject to certain Rules
              and Regulations as set out herein below.
            </Text>

            <Text style={{ ...styles.heading, marginTop: 30, textAlign: 'left' }}>
              PARK RULES &REGULATIONS:
            </Text>
            {dummyData.regulations.map((rule, i) => (
              <Text key={i} style={styles.subHeading}>
                {i + 1} {rule}
              </Text>
            ))}
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={null} />
    </>
  );
}

const styles = {
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight,
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
    backgroundColor: colors.transparentColors.seventh,
  },
  title: {
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
    marginTop: 5,
  },
  pictogram: {
    width: '90%',
  },
};

const dummyData = {
  pictogram: [
    'No Smoking.',
    'No littering.',
    'No Alcohol Consumption.',
    'No Pets.',
    'No Narcotic Substances.',
    'No Spitting.',
    'No Explosives or Inflammable items.',
    'No Arms and Ammunition.',
    'CCTV in operation.',
    'No Plucking of Flowers/ Fruits/ Leaves/ Plants.',
  ],
  regulations: [
    'Entry to the Park will be on purchase of a valid ticket and during the operational hours only. Visitors must retain their entry ticket until they exit the park. Re-entry on same ticket is not permitted.',
    'Cycles inside the Park is allowed only for kids up to age of 21 years.',
  ],
};
