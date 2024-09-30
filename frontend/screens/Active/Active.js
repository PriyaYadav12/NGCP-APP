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
import { logo, active, treesBackground } from '../../assets/asset';
import BottomNavigation, { screenName } from '../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../utility/theme';
import Card from '../../components/Card';
import TopIcons from '../../components/TopIcons';
import { getData, selectEcoSectionData } from '../../app/slices/ecoSectionSlice';

const windowHeight = Dimensions.get('window').height;

export default function ActiveScreen({ navigation }) {
  const dispatchToRedux = useDispatch();
  const store = useSelector(selectEcoSectionData);
  
  useEffect(() => {
    if(!store.ecoData.ACTIVE) {
      dispatchToRedux(getData({type: 'ACTIVE'}));
    }
  }, [dispatchToRedux]);

  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  return (
    <>
      <ImageBackground source={treesBackground} style={styles.backgroundImage}>
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
              <Text style={styles.title}>{store.ecoData.ACTIVE?.name[store.language]}</Text>
            </View>
            <View style={{ width: '65%' }}>
              <Text style={styles.heading}>
              {store.ecoData.ACTIVE?.outerHeading[store.language]}
              </Text>
            </View>
            <Card
              cards={store.ecoData.ACTIVE?.ecoInfo}
              backgroundColor={colors.secondary.colorShade1}
              transparentColor={colors.transparentColors.secondary}
              navigation={navigation}
              background={treesBackground}
              activeShow={screenName.map}
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
    backgroundColor: colors.secondary.colorShade1,
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
