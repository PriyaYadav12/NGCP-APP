import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectEcoSectionData } from '../app/slices/ecoSectionSlice';
import { banyan } from '../assets/asset';

const windowHeight = Dimensions.get('window').height;

export default function DetailsScreen({
  data,
  scrollViewRef,
  setContentHeight,
  navigation,
  titleColor,
  background,
  activeShow,
})
{
  const { language } = useSelector(selectEcoSectionData);
  return (
    <View style={styles.parentContainer}>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={(contentWidth, contentHeight) => {
          setContentHeight(contentHeight);
        }}
      >
        <View style={styles.container}>
          {data?.map((element, i) => (
            <TouchableWithoutFeedback
              key={i}
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: 'IndividualDetail',
                    params: {
                      data,
                      currentIndex: i,
                      titleColor,
                      background,
                      activeShow,
                    },
                  }),
                )
              }
            >
              <View style={styles.card}>
                <View style={styles.image}>
                  <Image
                    source={{ uri: element.image }}
                    style={{
                      width: '100%',
                      height: '100%',
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <Text style={styles.text}>{element.name[language]}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  parentContainer: {
    height: Platform.OS === 'android' ? windowHeight * 0.48 : windowHeight * 0.52,
    marginTop: windowHeight * 0.02,
  },
  container: {
    alignSelf: 'center',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  card: {
    width: '30%',
    marginBottom: windowHeight * 0.02,
  },

  image: {
    width: 110,
    height: 80,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 3,
  },
  text: {
    fontFamily: 'montserratMedium',
    fontSize: 10,
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
};
