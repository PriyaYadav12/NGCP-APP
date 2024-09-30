import { useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ImageBackground,
  Animated
} from 'react-native';
import { CommonActions, useRoute } from '@react-navigation/native';
import BottomNavigation from '../components/BottomNavigation';
import {
  logo,
  left,
  right,
  locationTrails,
  walkingTrail,
  cyclingTrail1,
  natureTrail,
} from '../assets/asset';
import { colors } from '../utility/theme';
import TopIcons from '../components/TopIcons';
import { useSelector } from 'react-redux';
import { selectEcoSectionData } from '../app/slices/ecoSectionSlice';
import { play } from '../assets/asset';
import {walkingTrailCoordinates,
  cyclingTrailCoordinates,
  natureTrailCoordinates,
} from '../utility/trailCoordinates';

const windowHeight = Dimensions.get('window').height;
const MAX_WORDS = 60;

export default function IndividualDetail({ navigation }) {
  const { language } = useSelector(selectEcoSectionData);
  const route = useRoute();
  const { data, currentIndex, titleColor, background, activeShow, trails } = route.params;
  const [index, setIndex] = useState(currentIndex);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));
  const imageURL = data[index].image;
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const handleArrowClick = (event) => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
    if (event === 'left') {
      const nextIndex = index === 0 ? data.length - 1 : index - 1;
      setIndex(nextIndex);
    } else {
      const nextIndex = index === data.length - 1 ? 0 : index + 1;
      setIndex(nextIndex);
    }
  };

  const words = data[index]?.description[language].split(' ');
  const truncatedDescription = words.slice(0, MAX_WORDS).join(' ');
  const hasMore = words.length > MAX_WORDS;

  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleTrailClick = () => {
    let name;
    let coordinates = [];
    switch (trails.type) {
      case 'walking':
        name = {
          english: 'WALKING',
          marathi: 'पायांचे चालन'
        };
        coordinates = walkingTrailCoordinates;
        break;
      case 'cycling':
        name = {
          english: 'CYCLING',
          marathi: 'सायकलिंग'
        };
        coordinates = cyclingTrailCoordinates;
        break;
      case 'nature':
        name = {
          english: 'NATURE',
          marathi: 'प्राकृतिक सौंदर्य'
        };
        coordinates = natureTrailCoordinates;
        break;
    }

    navigation.dispatch(
      CommonActions.navigate({
        name: 'TrailMapScreen',
        params: {
          background: trails.background,
          titleColor,
          coordinates,
          name,
        },
      }),
    );
  };

  return (
    <>
      <ImageBackground source={background}>
        <ScrollView>
          <TopIcons />
          <View style={styles.childContainer}>
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
            <Animated.View style={[{ ...styles.titleBox, backgroundColor: titleColor }, { opacity: fadeAnim }]}>
              <Text style={styles.title}>{data[index]?.name[language]}</Text>
            </Animated.View>
            <Animated.View style={[{ width: '62%' }, { opacity: fadeAnim }]}>
              <Text style={styles.heading}>{data[index]?.heading[language]}</Text>
            </Animated.View>
            <View style={styles.parentImageContainer}>
              <TouchableWithoutFeedback onPress={() => handleArrowClick('left')}>
                <View style={styles.arrow}>
                  <Image
                    source={left}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
              <Animated.View style={[styles.elementImage, { opacity: fadeAnim }]}>
                <Image
                  source={{ uri: imageURL }} 
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </Animated.View>
              <TouchableWithoutFeedback onPress={() => handleArrowClick('right')}>
                <View style={styles.arrow}>
                  <Image
                    source={right}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
            <Animated.Text style={[styles.subHeading, { opacity: fadeAnim }]}>{data[index]?.subHeading[language]}</Animated.Text>
            <Animated.Text style={[styles.description, { opacity: fadeAnim }]}>
              {showFullDescription ? data[index].description[language] : truncatedDescription}
            </Animated.Text>
            {hasMore && (
              <TouchableOpacity onPress={toggleDescription}>
                <Animated.Text style={[styles.more, { opacity: fadeAnim }]}>{showFullDescription ? 'Less' : 'More...'}</Animated.Text>
              </TouchableOpacity>
            )}
            {trails && (
              <TouchableWithoutFeedback onPress={handleTrailClick}>
                <View style={styles.trailButton}>
                  <Image
                    source={locationTrails}
                    style={{ width: 20, height: 20, resizeMode: 'contain' }}
                  />
                  <Text style={styles.trailBtnText}>{language === 'english' ? 'CLICK TO VIEW TRAIL' : 'ट्रेल पहा क्लिक करा'}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
        </ScrollView>
        <BottomNavigation navigation={navigation} activeShow={activeShow} />
      </ImageBackground>
    </>
  );
}

const styles = {
  childContainer: {
    minHeight: windowHeight,
    paddingBottom: 80,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 50,
  },
  trailButton: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: colors.kalpataruColor.colorShade1,
    flexDirection: 'column',
    borderRadius: 10,
    marginTop: 10,
  },
  trailBtnText: {
    color: '#fff',
    fontSize: 8,
    fontFamily: 'montserratRegular',
    marginTop: 3,
    textAlign: 'center',
  },
  titleBox: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'montserratMedium',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  heading: {
    fontFamily: 'montserratMedium',
    fontSize: 12,
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
  },
  parentImageContainer: {
    width: '90%',
    height: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: windowHeight * 0.03,
  },
  arrow: {
    width: 25,
    height: 25,
  },
  elementImage: {
    width: '80%',
    height: 250,
    overflow: 'hidden',
    borderRadius: 10,
  },
  subHeading: {
    fontFamily: 'montserratMedium',
    width: '85%',
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
    letterSpacing: 1,
    fontSize: 12,
  },
  description: {
    fontFamily: 'montserratLight',
    width: '85%',
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
    fontSize: 12,
    lineHeight: 17,
  },
  more: {
    color: colors.kalpataruColor.colorShade1,
    textAlign: 'left',
  },
};
