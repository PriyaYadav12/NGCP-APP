import { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, ImageBackground, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { replaceOpacity } from '../utility/theme';
import { useSelector } from 'react-redux';
import { selectEcoSectionData } from '../app/slices/ecoSectionSlice';
import { active } from '../assets/asset';

export default function Card({
  cards,
  backgroundColor,
  transparentColor,
  navigation,
  furtherScreen,
  background,
  activeShow,
}) {
  const [activeCard, setActiveCard] = useState(null);
  const { language } = useSelector(selectEcoSectionData);
  const handleStylePressIn = (event) => {
    setActiveCard(event);
  };

  const handleStylePressOut = () => {
    setActiveCard(null);
  };

  const handleNavigation = (index, name) => {
    let screen = null;
    if (furtherScreen && name.toLowerCase().includes('theme')) {
      screen = 'ThemeGarden';
    } else if (furtherScreen && name.toLowerCase().includes('other')) {
      screen = 'OtherGarden';
    } else if (furtherScreen && name.toLowerCase().includes('lake')) {
      screen = 'Lake';
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: screen ? screen : 'IndividualDetail',
        params: {
          data: cards,
          currentIndex: index,
          titleColor: backgroundColor,
          background,
          activeShow,
        },
      }),
    );
  };

  return (
    <View style={styles.container}>
      {cards?.map((card, i) => (
        <TouchableWithoutFeedback
          onPress={() => handleNavigation(i, card.name[language])}
          onPressIn={() => handleStylePressIn(`${i}`)}
          onPressOut={() => handleStylePressOut('trees')}
          key={i}
        >
          {/* ToDo: change the image after the resources received */}
          <View style={styles.smallCard}>
            <ImageBackground source={active} style={styles.imageBackground}>
              <View
                style={{
                  ...styles.overlay,
                  backgroundColor: activeCard
                    ? activeCard == i
                      ? replaceOpacity(transparentColor, 0)
                      : backgroundColor
                    : transparentColor,
                }}
              >
                <Text style={styles.cardText}>{card.name[language]}</Text>
              </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
    alignItems: 'center',
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
