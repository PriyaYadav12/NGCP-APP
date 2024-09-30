import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, Image, Alert } from 'react-native';
import { back, hamburgerBlur, search, playBackground, searchIcon, event } from '../assets/asset';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation, { screenName } from '../components/BottomNavigation';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const searchMapping = {
  trails: 'Trails',
  trees: 'Trees',
  birds: 'Birds',
  play: 'Play',
  active: 'Active',
  relaxation: 'Relaxation',
  map: 'MAP',
  tickets: 'TICKET',
  information: 'Information',
  event:'EVENTS',
  sos:'SOS',
  account:'ACCOUNT',
  setting:'ACCOUNT',
  garden: 'ThemeGarden',


};

const SearchScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    { id: '1', title: 'TRAILS', screen: 'Trails' },
    { id: '2', title: 'TREES', screen: 'Trees' },
    { id: '3', title: 'BIRDS', screen: 'Birds' },
    { id: '4', title: 'PLAY', screen: 'Play' },
    { id: '5', title: 'ACTIVE', screen: 'Active' },
    { id: '6', title: 'RELAXATION', screen: 'Relaxation' },
    { id: '7', title: 'MAP', screen: 'MAP' },
    { id: '8', title: 'BOOK TICKETS', screen: 'TICKET' },
    { id: '9', title: 'INFORMATION CENTRE', screen: 'Information' },
  ]);
  const [filteredData, setFilteredData] = useState(data);

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const handleSearch = () => {
    const searchKey = query.toLowerCase().trim();
    if (searchMapping[searchKey]) {
      navigation.navigate(searchMapping[searchKey]);
    } else {
      Alert.alert('Error', 'No match found.');
    }
  };

  return (
    <ImageBackground source={playBackground} style={styles.backgroundImage}>
      <View style={styles.top}>
        <View style={{ ...styles.topIcon, marginRight: 10 }}>
          <TouchableOpacity onPress={() => handlePress('Home')}>
            <Image
              source={search}
              style={styles.topIconImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topIcon}>
          <TouchableOpacity onPress={() => handlePress('Hamburger')}>
            <Image
              source={hamburgerBlur}
              style={styles.topIconImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={() => handlePress('Home')}>
            <Image
              source={back}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="What are you looking for?"
            value={query}
            onChangeText={setQuery}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Image
              source={searchIcon}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <BottomNavigation currentActive={null} activeShow={null} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  topIcon: {
    width: 22,
    height: 22,
  },
  topIconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  top: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.06,
    justifyContent: 'flex-end',
    marginRight: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for better readability
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    paddingHorizontal: 8,
    fontWeight: '300', // Medium
    fontSize: 12, // 12pt
    fontFamily: 'MontserratRoman',

  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 16,
  },
  item: {
    padding: 16,
  },
  itemText: {
    fontWeight: '300', // Medium
    fontSize: 12, // 12pt
    fontFamily: 'MontserratRoman',

  },
});

export default SearchScreen;
