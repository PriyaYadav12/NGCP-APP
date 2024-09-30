import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { logo, active, playBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import Card from '../../../components/Card';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function ThemeGardenScreen({ navigation }) {
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
              <Text style={styles.title}>THEME GARDEN</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>
                GO ON A JOURNEY OF DISCOVERY AND FUN AROUND THE GARDENS.
              </Text>
            </View>
            <Card
              cards={dummyData.data}
              backgroundColor={colors.fourth.colorShade1}
              transparentColor={colors.transparentColors.sixth}
              navigation={navigation}
              activeShow={screenName.map}
              background={playBackground}
            />
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
  titleBox: {
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: colors.fourth.colorShade1,
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

const dummyData = {
  details: {
    title: '',
    heading: '',
    description: '',
  },
  data: [
    {
      name: {
        english: 'MUGHAL GARDENIA',
        marathi: 'MUGHAL GARDENIA'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
      },
      description: {
        english:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
        marathi:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
      }
    },
    {
      name: {
        english: 'CHINESE GARDEN',
        marathi: 'CHINESE GARDEN'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
      },
      description: {
        english:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
        marathi:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
      }
    },
    {
      name: {
        english: 'MOROCCAN GARDEN',
        marathi: 'MOROCCAN GARDEN'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
      },
      description: {
        english:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
        marathi:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
      }
    },
    {
      name: {
        english: 'JAPANESE GARDEN',
        marathi: 'JAPANESE GARDEN'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
      },
      description: {
        english:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
        marathi:  'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear.',
      }
    },
  ],
};
