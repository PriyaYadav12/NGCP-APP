import { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors } from '../utility/theme';
import {
  event,
  map,
  ticket,
  SOS,
  profile,
  activeEvent,
  activeProfile,
  activeSOS,
  activeTicket,
} from '../assets/asset';
import { useSelector } from 'react-redux';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { selectEcoSectionData } from '../app/slices/ecoSectionSlice';

const screenName = {
  event: 'EVENTS',
  map: 'MAP',
  ticket: 'TICKET',
  sos: 'SOS',
  account: 'ACCOUNT',
  trees: 'Trees',
};

function BottomNavigation({ currentActive, activeShow }) {
  const navigation = useNavigation();
  const { language } = useSelector(selectEcoSectionData);

  const handlePress = async (screenName) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: screenName,
      }),
    );
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={activeShow === screenName.event ? styles.activeContainer : styles.smallContainer}
          onPress={() => handlePress(screenName.event)}
        >
          <View style={styles.image}>
            <Image
              source={activeShow === screenName.event ? activeEvent : event}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>{language === 'english' ? 'EVENTS' : 'इव्हेंट्स' }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={activeShow === screenName.map ? styles.activeContainer : styles.smallContainer}
          onPress={() => handlePress(screenName.map)}
        >
          <View style={styles.image}>
            <Image source={map} style={styles.icon} />
          </View>
          <Text style={styles.text}>{language === 'english' ? 'MAP' : 'नकाशा' }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={activeShow === screenName.ticket ? styles.activeContainer : styles.smallContainer}
          onPress={() => handlePress(screenName.ticket)}
        >
          <View style={styles.image}>
            <Image
              source={activeShow === screenName.ticket ? activeTicket : ticket}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>{language === 'english' ? 'TICKET' : 'टिकिट' }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={activeShow === screenName.sos ? styles.activeContainer : styles.smallContainer}
          onPress={() => handlePress(screenName.sos)}
        >
          <View style={styles.image}>
            <Image source={activeShow === screenName.sos ? activeSOS : SOS} style={styles.icon} />
          </View>
          <Text style={styles.text}>
          {language === 'english' ? <>S<Text style={{ color: 'red' }}>O</Text>S</> : 'एसओएस' }
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={activeShow === screenName.account ? styles.activeContainer : styles.smallContainer}
          onPress={() => handlePress(screenName.account)}
        >
          <View style={styles.image}>
            <Image
              source={activeShow === screenName.account ? activeProfile : profile}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>{language === 'english' ? 'ACCOUNT' : 'खाते' }</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.fourth.colorShade3,
    width: '96%',
    flex: 1,
    marginLeft: '2%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
    minHeight: 55,
  },
  text: {
    fontFamily: 'montserratLight',
    fontSize: 10,
    marginTop: 5,
  },
  smallContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  activeContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    padding: 4,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  icon: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  image: {
    height: 23,
    width: 23,
  },
};

export { screenName };

export default BottomNavigation;
