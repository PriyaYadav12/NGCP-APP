import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logo, down, treesBackground } from '../../assets/asset';
import DetailsScreen from '../../components/DetailsScreen';
import { colors } from '../../utility/theme';
import BottomNavigation, { screenName } from '../../components/BottomNavigation';
import TopIcons from '../../components/TopIcons';
import { CommonActions } from '@react-navigation/native';
import { getData, selectEcoSectionData } from '../../app/slices/ecoSectionSlice';

const windowHeight = Dimensions.get('window').height;

export default function TreesScreen({ navigation }) {
  const scrollViewRef = useRef();
  const dispatchToRedux = useDispatch();
  const store = useSelector(selectEcoSectionData);
  const [scrollPosition, setScrollPosition] = useState({ position: 1 });
  const [contentHeight, setContentHeight] = useState(1);

  useEffect(() => {
    if(!store.ecoData.TREE) {
      dispatchToRedux(getData({type: 'TREE'}));
    }
  }, [dispatchToRedux]);

  const handleScrollByDistance = () => {
    if (scrollViewRef.current) {
      setScrollPosition({
        position: scrollPosition.position >= contentHeight ? 0 : scrollPosition.position + 200,
      });

      scrollViewRef.current?.scrollTo({ y: scrollPosition.position, animated: true });
    }
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
      <ImageBackground source={treesBackground} style={styles.backgroundImage}>
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
            <Text style={styles.title}>{store.ecoData.TREE?.name[store.language]}</Text>
          </View>
          <View style={{ width: '62%' }}>
            <Text style={styles.heading}>
            {store.ecoData.TREE?.outerHeading[store.language]}
            </Text>
          </View>
          <View style={{ width: '90%' }}>
            <Text style={styles.subHeading}>
            {store.ecoData.TREE?.outerSubHeading[store.language]}
            </Text>
          </View>

          <DetailsScreen
            data={store.ecoData.TREE?.ecoInfo}
            scrollViewRef={scrollViewRef}
            scrollPosition={scrollPosition}
            setContentHeight={setContentHeight}
            navigation={navigation}
            titleColor={colors.tertiary.colorShade1}
            background={treesBackground}
            activeShow={screenName.map}
          />
        </View>
        <TouchableWithoutFeedback onPress={handleScrollByDistance}>
          <View style={styles.downArrow}>
            <Image
              source={down}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.map} />
    </>
  );
}

const styles = {
  parentContainer: {
    height: Platform.OS === 'android' ? windowHeight - 40 : windowHeight,
  },
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
    backgroundColor: colors.tertiary.colorShade1,
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
  downArrow: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 65,
  },
};
