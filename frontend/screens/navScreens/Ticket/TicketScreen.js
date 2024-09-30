import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { logo, play, homeBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function TicketScreen({ navigation }) {
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleNavigation = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'TicketPriceScreen',
      }),
    );
  };

  return (
    <>
      <ImageBackground source={homeBackground} style={styles.backgroundImage}>
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
              <Text style={styles.title}>PLAN YOUR VISIT</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>PARK TIMINGS</Text>
            </View>
            <Text style={styles.subHeading}>
              MORNING: 6:00 AM - 11:00 AM | EVENING: 1:00 PM - 9:00 PM
            </Text>
            <View>
              {dummyData.data.map((el, i) => (
                <TouchableWithoutFeedback key={i} onPress={handleNavigation}>
                  <View
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <Text style={styles.heading}>
                      {el.name}: <Text style={styles.subHeading}>{el.time}</Text>
                    </Text>
                    <View style={styles.image}>
                      <Image
                        source={el.image}
                        style={{
                          width: '100%',
                          height: '100%',
                          resizeMode: 'cover',
                        }}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
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
    fontSize: 12,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
  subHeading: {
    fontFamily: 'montserratLight',
    textAlign: 'center',
    marginTop: windowHeight * 0.01,
    width: '90%',
    fontSize: 11,
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
