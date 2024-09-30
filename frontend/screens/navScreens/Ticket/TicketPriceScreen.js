import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { logo, play, playBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function TicketPriceScreen({ navigation }) {
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
            <View style={styles.titleBox}>
              <Text style={styles.title}>TICKETS & MEMBERSHIPS</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>ADMISSION TICKET PRICES</Text>
              <Text style={styles.heading}>INTRODUCTORY PARK ENTRY FEE:</Text>
            </View>
            <Text style={styles.subHeading}>
              Adult tickets (Weekdays) -<Text style={styles.heading}> ₹ 20</Text>
            </Text>
            <Text style={styles.subHeading}>
              Adult tickets (Weekends &Public Holidays) -<Text style={styles.heading}> ₹ 30</Text>
            </Text>
            <Text style={styles.subHeading}>
              Senior citizens -<Text style={styles.heading}> ₹ 10</Text>
            </Text>
            <Text style={styles.subHeading}>
              Bicycle -<Text style={styles.heading}> ₹ 20</Text>
            </Text>
            <Text style={styles.subHeading}>
              Kids upto 15 years -<Text style={styles.heading}> FREE</Text>
            </Text>
            <View style={{ ...styles.titleBox, marginTop: windowHeight * 0.11 }}>
              <Text style={styles.title}>MONTHLY PASSES</Text>
            </View>
            <Text style={styles.heading}>MEMBERSHIP FEE:</Text>
            <Text style={styles.subHeading}>
              Monthly Morning Entry Pass -<Text style={styles.heading}> ₹ 250</Text>
            </Text>
            <Text style={styles.subHeading}>
              Monthly Morning &Evening Entry Pass -<Text style={styles.heading}> ₹ 500</Text>
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.ticket} />
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
    backgroundColor: '#fff',
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
    borderColor: colors.kalpataruColor.colorShade1,
    borderWidth: 1,
  },
  title: {
    fontFamily: 'montserratMedium',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 3,
    color: colors.kalpataruColor.colorShade1,
  },
  heading: {
    fontFamily: 'montserratMedium',
    fontSize: 13,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
  subHeading: {
    fontFamily: 'montserratLight',
    textAlign: 'center',
    marginTop: windowHeight * 0.01,
    width: '90%',
    fontSize: 12,
  },
};

const dummyData = {
  details: {
    title: '',
    heading: '',
    description: '',
  },
  data: [
    {
      name: 'SKATE PARK',
      time: '6:00 AM - 9:00 PM',
      image: play,
    },
    {
      name: "KID'S PLAY AREA",
      time: '6:00 AM - 9:00 PM',
      image: play,
    },
    {
      name: 'SPORTS ARENA',
      time: '6:00 AM - 9:00 PM',
      image: play,
    },
    {
      name: 'THEME GARDENS',
      time: '6:00 AM - 9:00 PM',
      image: play,
    },
  ],
};
