import { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  logo,
  playBackground,
  trees,
  cycle,
  nature,
  trails,
  walkingBackground,
  natureBackground,
  cyclingBackground,
} from '../../assets/asset';
import { useDispatch, useSelector } from 'react-redux';
import BottomNavigation, { screenName } from '../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../utility/theme';
import { replaceOpacity } from '../../utility/theme';
import TopIcons from '../../components/TopIcons';
import { getData, selectEcoSectionData } from '../../app/slices/ecoSectionSlice';

const windowHeight = Dimensions.get('window').height;

export default function TrailsScreen({ navigation }) {
  const dispatchToRedux = useDispatch();
  const store = useSelector(selectEcoSectionData);

  const [style, setStyle] = useState({
    cycling: { ...styles.overlay, backgroundColor: colors.transparentColors.secondary },
    walking: { ...styles.overlay, backgroundColor: colors.transparentColors.primary },
    experience: { ...styles.overlay, backgroundColor: colors.transparentColors.seventh },
    nature: { ...styles.overlay, backgroundColor: colors.transparentColors.tertiary },
  });

  useEffect(() => {
    if(!store.ecoData.TRAIL) {
      dispatchToRedux(getData({type: 'TRAIL'}));
    }
  }, [dispatchToRedux]);

  const handleNavigation = async (event) => {
    let currentIndex;
    let background;
    let titleColor;
    let type;
    switch (event) {
      case 'walking':
        currentIndex = 0;
        background = walkingBackground;
        titleColor = colors.transparentColors.primary;
        type = 'walking';
        break;
      case 'cycling':
        currentIndex = 1;
        background = cyclingBackground;
        titleColor = colors.transparentColors.secondary;
        type = 'cycling';
        break;
      case 'nature':
        currentIndex = 2;
        background = natureBackground;
        titleColor = colors.transparentColors.tertiary;
        type = 'nature';
        break;
      case 'experience':
        currentIndex = 4;
        break;
    }

    navigation.dispatch(
      CommonActions.navigate({
        name: 'IndividualDetail',
        params: {
          data: store.ecoData.TRAIL?.ecoInfo,
          currentIndex,
          titleColor,
          background,
          activeShow: screenName.map,
          trails: { background, type },
        },
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
              <Text style={styles.title}>{store.ecoData.TRAIL?.name[store.language]}</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>
              {store.ecoData.TRAIL?.outerHeading[store.language]}
              </Text>
            </View>

            <TouchableWithoutFeedback
              onPress={() => handleNavigation('walking')}
              onPressIn={() => handleStylePressIn('walking')}
              onPressOut={() => handleStylePressOut('walking')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={trees} style={styles.imageBackground}>
                  <View style={style.walking}>
                    <Text style={styles.cardText}>{store.language === 'english' ? 'WALKING' : 'पायांचे चालन'}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('cycling')}
              onPressIn={() => handleStylePressIn('cycling')}
              onPressOut={() => handleStylePressOut('cycling')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={cycle} style={styles.imageBackground}>
                  <View style={style.cycling}>
                    <Text style={styles.cardText}>{store.language === 'english' ? 'CYCLING' : 'सायकलिंग'}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('nature')}
              onPressIn={() => handleStylePressIn('nature')}
              onPressOut={() => handleStylePressOut('nature')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={nature} style={styles.imageBackground}>
                  <View style={style.nature}>
                    <Text style={styles.cardText}>{store.language === 'english' ? 'NATURE' : 'प्राकृतिक सौंदर्य'}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              // onPress={() => handleNavigation('experience')}
              onPressIn={() => handleStylePressIn('experience')}
              onPressOut={() => handleStylePressOut('experience')}
            >
              <View style={styles.smallCard}>
                <ImageBackground source={trails} style={styles.imageBackground}>
                  <View style={style.experience}>
                    <Text style={styles.cardText}>{store.language === 'english' ? '360° EXPERIENCE OF NGCP' : 'NGCPच्या 360° अनुभव'}</Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={null} />
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight + 80,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'montserratBold',
    color: '#fff',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallCard: {
    width: '49.25%', // Adjust this for spacing
    marginTop: 5,
    overflow: 'hidden',
    borderRadius: 10,
    height: 100,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: colors.transparentColors.fifth,
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
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
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
};