import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import { logo, homeBackground, sos,sosafter } from '../../assets/asset';
import BottomNavigation, { screenName } from '../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../utility/theme';
import TopIcons from '../../components/TopIcons';

const windowHeight = Dimensions.get('window').height;

export default function AccountMerchandiseScreen({ navigation }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  const handleHelplinePress = () => {
    setIsPressed(!isPressed);
    Linking.openURL('tel:+917700986586');
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
            <View style={styles.image}>
              <Image
                source={isPressed?sosafter:sos}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={styles.contentContainer}>
            {isPressed ? (
                <Text style={styles.sosText}>
                  YOUR SOS WILL{'\n'}GET CONNECTED{'\n'}TO THE SECURITY{'\n'}CONTROL ROOM.
                </Text>
              ) : (
                <>
                  <Text style={[styles.title, styles.centerText]}>
                    EMERGENCY ASSISTANCE
                  </Text>
                  <Text style={styles.text}>
                    If you find yourself in an emergency situation within NaMo Grand Central Park, help is just a tap away. Our Emergency Assistance feature is here to ensure your safety and well-being.
                  </Text>
                  <Text style={[styles.subtitle, styles.centerText]}>HOW IT WORKS:</Text>
                  <Text style={styles.text}>
                    <Text style={styles.bold}>Activate SOS:</Text> In case of an emergency, tap the SOS button located prominently on the app's home screen. Your distress signal will immediately be sent to our dedicated emergency response team along with your precise location within Park at Thane.
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.bold}>Response Team Activation:</Text> Our trained personnel will swiftly respond to your SOS signal and dispatch assistance to your location.
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.bold}>Stay Connected:</Text> Keep your phone nearby to receive updates and instructions from our emergency response team until help arrives.
                  </Text>
                  <Text style={styles.text}>
                    <Text style={styles.bold}>When to Use SOS:</Text>
                  </Text>
                  <View style={styles.listContainer}>
                    <Text style={styles.listItem}>Medical Emergencies</Text>
                    <Text style={styles.listItem}>Safety Concerns</Text>
                    <Text style={styles.listItem}>Threatening Situations</Text>
                    <Text style={styles.listItem}>Any Other Urgent Assistance Required</Text>
                  </View>
                  <Text style={styles.text}>
                    Your safety is our top priority. With NaMo Grand Central Park Emergency Assistance feature, you can explore with confidence, knowing help is always within reach.
                  </Text>
                  <View style={styles.helplineContainer}>
                    <Text style={styles.helplineText}>HELPLINE NUMBER</Text>
                    <TouchableOpacity
                      style={[
                        styles.helplineButton,
                        isPressed && styles.helplineButtonActive,
                      ]}
                      onPress={handleHelplinePress}
                    >
                      <Text
                        style={[
                          styles.helplineButtonText,
                          isPressed && styles.helplineButtonTextActive,
                        ]}
                      >
                        +917700986586
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.sos} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight,
  },
  scrollContainer: {
    flexGrow: 1,
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
  image: {
    width: '50%',
    height: windowHeight * 0.1,
    marginTop: windowHeight * 0.05,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional background for readability
    borderRadius: 10,
    marginTop: windowHeight * 0.03,
    marginBottom: windowHeight * 0.03,
  },
  centerText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  listContainer: {
    marginLeft: 10, // Add some padding to the left
  },
  listItem: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    textAlign: 'left',
    marginBottom: 5,
  },
  helplineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  helplineText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 10,
  },
  helplineButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#3FA2F6',
  },
  helplineButtonActive: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
  },
  helplineButtonText: {
    fontSize: 12,
    color: 'black',
  },
  helplineButtonTextActive: {
    color: 'white',
  },
  sosText: {
    fontSize: 14,
    paddingTop:25,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
});
