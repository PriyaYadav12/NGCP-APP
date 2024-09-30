import { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logo, active, playBackground } from '../../assets/asset';
import BottomNavigation from '../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../utility/theme';
import Card from '../../components/Card';
import TopIcons from '../../components/TopIcons';
import { getData, selectEcoSectionData } from '../../app/slices/ecoSectionSlice';

const windowHeight = Dimensions.get('window').height;

export default function RelaxationScreen({ navigation }) {
  const dispatchToRedux = useDispatch();
  const store = useSelector(selectEcoSectionData);

  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  useEffect(() => {
    if(!store.ecoData.TREE) {
      dispatchToRedux(getData({type: 'TREE'}));
    }
  }, [dispatchToRedux]);

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
              <Text style={styles.title}>RELAXATION</Text>
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
              furtherScreen={true}
              background={playBackground}
            />
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={'MAP'} />
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
        english: 'THEME GARDEN',
        marathi: 'THEME GARDEN'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium'
      },
      description: {
        english: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.',
        marathi: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.'
      },
    },
    {
      name: {
        english: 'OTHER GARDEN',
        marathi: 'OTHER GARDEN'
      },
      heading:
        'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium'
      },
      description: {
        english: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.',
        marathi: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.'
      },
    },
    {
      name: {
        english: 'LAKE SIDE',
        marathi: 'LAKE SIDE'
      },
      heading: {
        english: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!',
        marathi: 'REVERED ACROSS RELIGIONS THIS FIG FLOWER HAS ONE MORE INTERESTING FEATURE - INVISIBILITY!'
      },
      image: active,
      subHeading: {
        english: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium',
        marathi: 'Ficus religiosa - Pimpal/Sacred Fig Family - Moracee; Native Tree - large (30-40m), evergreen; Leaves - simple, with unique acuminate tip, alternate; stipulate; Flower - synconium, during spring; Fruit - synconium'
      },
      description: {
        english: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.',
        marathi: 'Few Indians, whether or not from botany background, will be unable to recognize the Peepal tree, that flushes a unique pink of new-born leaves each spring. Its uniquely shaped leaves - and indeed the entire tree - have vibrant and positive socio-cultural connotations. The tree is considered sacred in both Hinduism and Buddhism. While Lord Krishna declares himself as the Ashvatthah (Peepal) tree in the Bhagwat Gita (BG 10.26), Siddharth became Buddha after 49 days of meditation under this massive tree with heart-shaped leaves. The Jain religion also holds the Peepal tree dear. The Sacred Fig tree is an ecological wonder. It is a m o n g those species that can tolerate a wide range of temperature, rainfall, altitude and soil types. That is to say, it can be found all over India, from the Himalayas to the coastal belts - even in the Andaman and Nicobar Islands and can grow even in the cracks of rocks and buildings. The fig trees have had interesting association with the wasps. Ficus religiosa is no different. Blastophaga quadriceps, the sacred fig wasp, is its pollinator.'
      },
    },
  ],
};
