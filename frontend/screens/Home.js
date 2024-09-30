import { useState } from 'react';
import * as assets from '../assets/asset';
import {
  View,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { logo, homeBackground } from '../assets/asset';
import { useDispatch } from 'react-redux';
import { setNavActive } from '../app/slices/authSlice';
import { colors, replaceOpacity } from '../utility/theme';
import BottomNavigation from '../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import TopIcons from '../components/TopIcons';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Home({ navigation }) {
  const [style, setStyle] = useState({
    trails: { ...styles.overlay, backgroundColor: colors.transparentColors.fifth },
    trees: { ...styles.overlay, backgroundColor: colors.transparentColors.tertiary },
    bird: { ...styles.overlay, backgroundColor: colors.transparentColors.sixth },
    play: { ...styles.overlay, backgroundColor: colors.transparentColors.primary },
    active: { ...styles.overlay, backgroundColor: colors.transparentColors.secondary },
    information: { ...styles.overlay, backgroundColor: colors.transparentColors.seventh },
    relaxation: { ...styles.overlay, backgroundColor: colors.transparentColors.fourth },
  });
  const dispatchToRedux = useDispatch();
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
    // await dispatchToRedux(setNavActive({activeNav: null}));
  };
  const handleNavigation = async (event) => {
    let screenName;
    switch (event) {
      case 'trees':
        screenName = 'Trees';
        break;
      case 'trails':
        screenName = 'Trails';
        break;
      case 'bird':
        screenName = 'Birds';
        break;
      case 'play':
        screenName = 'Play';
        break;
      case 'active':
        screenName = 'Active';
        break;
      case 'information':
        screenName = 'Information';
        break;
      case 'relaxation':
        screenName = 'Relaxation';
        break;
      default:
        screenName = 'Home';
    }
    // await dispatchToRedux(setNavActive({activeNav: null}));
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
      }),
    );
  };

  const handleStylePressIn = (event) => {
    setStyle((prevState) => {
      return Object.entries(prevState).reduce((acc, [key, value]) => {
        acc[key] = {
          ...value,
          backgroundColor: replaceOpacity(value.backgroundColor, key === event ? 0 : 1),
        };
        return acc;
      }, {});
    });
  };

  const handleStylePressOut = () => {
    setStyle((prevState) => {
      return Object.entries(prevState).reduce((acc, [key, value]) => {
        acc[key] = { ...value, backgroundColor: replaceOpacity(value.backgroundColor, 0.85) };
        return acc;
      }, {});
    });
  };

  return (
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
          <View
            style={{
              padding: 35,
            }}
          >
            <Text style={styles.heading}>GRASS IS NOW GREENER IN THANE</Text>
            <Text style={styles.bodyText}>
              Inspired by internationally acclaimed green spaces, the NaMo Grand Central Park,
              spread across 20 acres, is a gift of greens to Thane amidst the greys of concrete. One
              of the most well-planned natural spaces, the aim of NaMoCCP is to motivate you to -
              take deep breaths, listen to the music of birds &water, capture 50 shades of flashy
              butterflies, play &laugh together.
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => handleNavigation('trails')}
            onPressIn={() => handleStylePressIn('trails')}
            onPressOut={() => handleStylePressOut('trails')}
          >
            <View style={styles.trailCard}>
              <ImageBackground source={assets.trails} style={styles.imageBackground}>
                <View style={style.trails}>
                  <Text style={styles.cardText}>TRAILS</Text>
                </View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>

          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('trees')}
              onPressIn={() => handleStylePressIn('trees')}
              onPressOut={() => handleStylePressOut('trees')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.trees} style={styles.imageBackground}>
                  <View style={style.trees}>
                    <Text style={styles.cardText}>TREES</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => handleNavigation('bird')}
              onPressIn={() => handleStylePressIn('bird')}
              onPressOut={() => handleStylePressOut('bird')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.bird} style={styles.imageBackground}>
                  <View style={style.bird}>
                    <Text style={styles.cardText}>BIRDS</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('play')}
              onPressIn={() => handleStylePressIn('play')}
              onPressOut={() => handleStylePressOut('play')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.play} style={styles.imageBackground}>
                  <View style={style.play}>
                    <Text style={styles.cardText}>PLAY</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('active')}
              onPressIn={() => handleStylePressIn('active')}
              onPressOut={() => handleStylePressOut('active')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.active} style={styles.imageBackground}>
                  <View style={style.active}>
                    <Text style={styles.cardText}>ACTIVE</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.rowContainer}>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('information')}
              onPressIn={() => handleStylePressIn('information')}
              onPressOut={() => handleStylePressOut('information')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.information} style={styles.imageBackground}>
                  <View style={style.information}>
                    <Text style={styles.cardText}>INFO CENTRE</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('relaxation')}
              onPressIn={() => handleStylePressIn('relaxation')}
              onPressOut={() => handleStylePressOut('relaxation')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={assets.relaxation} style={styles.imageBackground}>
                  <View style={style.relaxation}>
                    <Text style={styles.cardText}>RELAXATION</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation currentActive={null} />
    </ImageBackground>
  );
}

const styles = {
  container: {
    padding: 10,
    paddingTop: 0,
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight,
    backgroundColor: 'transparent',
  },
  logo: {
    width: 120,
    height: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  heading: {
    textAlign: 'center',
    marginBottom: windowHeight * 0.02,
    fontFamily: 'montserratMedium',
    fontSize: 14,
  },
  bodyText: {
    fontFamily: 'montserratLight',
    textAlign: 'center',
    fontSize: 12,
  },
  trailCard: {
    width: '95%',
    alignSelf: 'center',
    height: 100,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    height: 100,
  },
  smallCard: {
    width: '49.25%', // Adjust this for spacing
    marginTop: 5,
    overflow: 'hidden',
    borderRadius: 10,
  },
  card: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'montserratBold',
    color: '#fff',
  },
};
