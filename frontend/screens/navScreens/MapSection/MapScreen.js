import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  StyleSheet
} from 'react-native';
import {
  logo,
  trees,
  cycle,
  relaxation,
  active,
  playZoneMap,
  playZoneMap2,
  lakeZoneMap,
  lakeZoneMap2,
  sportsArenaMap,
  sportsArenaMap2,
  themeGardenMap,
  themeGardenMap2,
  homeBackground
} from '../../../assets/asset.js';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function MapScreen({ navigation }) {
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleNavigation = (index, points) => {
    let screenName;
    switch (index) {
      case 0:
        screenName = 'PlayZoneFirstMap';
        break;
      case 1:
        screenName = 'ThemeGardenFirstMap';
        break;
      case 2:
        screenName = 'SportsArenaFirstMap';
        break;
      case 3:
        screenName = 'LakeSideFirstMap';
      break;
      case 'Trails':
        screenName = 'Trails';
        break;
      case 'Zone':
        screenName = 'MAP';
      break;
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
        params: {
          points
        }
      }),
    );
  }

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
              <Text style={styles.title}>ZONE</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>
                GO ON A JOURNEY OF DISCOVERY AND FUN AROUND THE GARDENS.
              </Text>
            </View>
            {dummyData.data?.map((card, i) => (
              <TouchableWithoutFeedback
                onPress={() => handleNavigation(i, card.points)}
                key={i}
              >
                <View style={styles.smallCard}>
                  <ImageBackground source={card.image} style={styles.imageBackground}>
                    <View
                      style={{
                        ...styles.overlay,
                      }}
                    >
                      <Text style={styles.cardText}>{card.name}</Text>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableWithoutFeedback>
            ))}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%'
              }}
            >
              <TouchableWithoutFeedback onPress={() => handleNavigation('Zone')}>
                <View
                  style={{
                    ...styles.titleBox2,
                    width: '45%',
                  }}
                >
                  <Text style={[styles.title2]}>ZONE</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => handleNavigation('Trails')}>
                <View
                  style={{
                    ...styles.titleBox2,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: colors.kalpataruColor.colorShade1,
                    width: '45%',
                  }}
                >
                  <Text style={{ ...styles.title2, color: colors.kalpataruColor.colorShade1 }}>
                    TRAILS
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.map} />
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight + 80,
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
  titleBox2: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
    backgroundColor: colors.kalpataruColor.colorShade1,
  },
  title2: {
    textAlign: 'center',
    fontFamily: 'montserratMedium',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 2,
  },
  titleBox: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: colors.primary.colorShade1,
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
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
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
  smallCard: {
    width: '49%', // Adjust this for spacing
    marginTop: 10,
    overflow: 'hidden',
    borderRadius: 10,
    height: 120,
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
      name: 'PLAY ZONE',
      heading:
        'A CHILHOOD FULL OF NEW EXPERIENCES',
      image: trees,
      map: [playZoneMap, playZoneMap2],
      points: ['ZIP LINE', 'MAZE', 'SPLASH PAD', 'ADVENTURE PLAY', 'ADVENTURE PLAY', 'ADVENTURE PLAY', {color: '#464547', text: 'RESTROOMS'}]
    },
    {
      name: 'THEME GARDEN',
      heading:
        'A CHILHOOD FULL OF NEW EXPERIENCES',
      image: cycle,
      map: [themeGardenMap, themeGardenMap2],
      points: ['ZIP LINE', 'MAZE', 'SPLASH PAD', 'ADVENTURE PLAY']
    },
    {
      name: 'SPORTS ARENA',
      heading:
        'WHERE FITNESS IS NOT AN ORDEAL',
      image: active,
      map: [sportsArenaMap, sportsArenaMap2],
      points: ['ZIP LINE', 'MAZE', 'SPLASH PAD', 'ADVENTURE PLAY']
    },
    {
      name: 'LAKE ZONE',
      heading:
        'THANE 34TH BUT YOUR WATERS OF SERENITY',
      image: relaxation,
      map: [lakeZoneMap, lakeZoneMap2],
      points: ['ZIP LINE', 'MAZE', 'SPLASH PAD', 'ADVENTURE PLAY']
    },
  ],
};
