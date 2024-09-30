import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import BottomNavigation, { screenName } from '../../components/BottomNavigation';
import { useSelector } from 'react-redux';
import { logo } from '../../assets/asset';
import TopIcons from '../../components/TopIcons';
import { CommonActions } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { selectEcoSectionData } from '../../app/slices/ecoSectionSlice';
import React, { useEffect, useState } from 'react';
import MapView, { Polyline,Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function TrailMap({ navigation }) {
  const route = useRoute();
  const [location, setLocation] = useState(null);
  const { background, titleColor, name, coordinates } = route.params;
  const { language } = useSelector(selectEcoSectionData);
  
  const handleLogoPress = async () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home',
      }),
    );
  };

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } else {
        Alert.alert(
          'Location Permission Required',
          'This app needs location access to show the map. Please enable location services in your device settings.',
          [
            {
              text: 'Open Settings',
              onPress: () => Linking.openSettings(),
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ]
        );
      }
    };

    getLocation();
  }, []);

  return (
    <>
      <ImageBackground source={background} style={styles.backgroundImage}>
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
          <View style={{ ...styles.titleBox, backgroundColor: titleColor }}>
            <Text style={styles.title}>{name[language]}</Text>
          </View>
          <View style={styles.trailMap}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location ? location.coords.latitude : 19.22972222222222,
                longitude: location ? location.coords.longitude : 72.98916666666666,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                coordinate={coordinates[0]} // Start marker at the first coordinate
                title="Start"
                description="Starting point"
              />
              <Polyline
                coordinates={coordinates}
                strokeColor="purple" // change the color to purple
                strokeWidth={1}
                lineDashPattern={[1, 4]}
              />
              <Marker
              coordinate={coordinates[coordinates.length - 1]} // End marker at the last coordinate
              title="End"
              description="End point"
            />
            </MapView>
          </View>
        </View>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={screenName.map} />
    </>
  );
}

const styles = StyleSheet.create({
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
    marginTop: windowHeight * 0.03,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'montserratMedium',
    fontSize: 14,
    color: '#fff',
    letterSpacing: 2,
  },
  trailMap: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    marginTop: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
