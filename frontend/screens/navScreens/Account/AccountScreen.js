import { useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { logo, homeBackground } from '../../../assets/asset';
import BottomNavigation, { screenName } from '../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../utility/theme';
import TopIcons from '../../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function TicketScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleStylePressIn = (index) => {
    setActiveIndex(index);
  };

  const handleStylePressOut = () => {
    setActiveIndex(null);
  };

  const handleNavigation = (index) => {
    let screen;
    switch (index) {
      case 0:
        screen = 'AccountEditScreen';
        break;
      case 1:
        screen = 'AccountEditScreen';
        break;
      case 2:
        screen = 'AccountMerchandiseScreen';
        break;
      case 3:
        screen = 'AccountContactScreen';
        break;
      case 4:
        screen = 'AccountFeedbackScreen';
        break;
    }
    navigation.dispatch(
      CommonActions.navigate({
        name: screen,
      }),
    );
  };

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
            <View style={{ marginTop: windowHeight * 0.03 }}>
              {account.map((el, i) => (
                <TouchableWithoutFeedback
                  key={i}
                  onPressIn={() => handleStylePressIn(i)}
                  onPressOut={handleStylePressOut}
                  onPress={() => handleNavigation(i)}
                >
                  <View style={[styles.titleBox, activeIndex === i && styles.activeTitleBox]}>
                    <Text style={[styles.title, activeIndex === i && styles.activeTitle]}>
                      {el}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.account} />
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight,
  },
  image: {
    width: '90%',
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 3,
    marginTop: 5,
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
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'montserratBold',
    fontSize: 14,
    color: 'black',
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
    marginTop: windowHeight * 0.01,
    width: '90%',
    fontSize: 11,
  },
  activeTitleBox: {
    backgroundColor: colors.kalpataruColor.colorShade1,
  },
  activeTitle: {
    color: '#fff',
    fontFamily: 'montserratMedium',
  },
};

const account = ['ACCOUNT', 'EDIT PROFILE', 'MERCHANDISE', 'CONTACT US', 'FEEDBACK'];
