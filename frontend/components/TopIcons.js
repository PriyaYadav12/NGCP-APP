import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { search, hamburger, translate } from '../assets/asset';
import { changeLanguage, selectEcoSectionData } from '../app/slices/ecoSectionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function TopIcons() {
  const dispatchToRedux = useDispatch();
  const { language } = useSelector(selectEcoSectionData);
  const select = [
    { title: 'English' },
    { title: 'Marathi' }
  ];
  const [selected, setSelected] = useState('');
  const navigation = useNavigation(); // Get navigation object

  const handlePress = (screen) => {
    setSelected(screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.top}>
      {/* <SelectDropdown
        data={select}
        onSelect={(selectedItem, index) => {
          switch (selectedItem.title) {
            case 'English':
              dispatchToRedux(changeLanguage({ language: 'english' }));
              break;

            case 'Marathi':
              dispatchToRedux(changeLanguage({ language: 'marathi' }));
              break;
          }
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Image source={translate} style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} />
              <Text style={styles.dropdownButtonTxtStyle}>
                {language.charAt(0).toUpperCase() + language.slice(1)}
              </Text>
              <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{ ...styles.dropdownItemStyle, ...(isSelected && { backgroundColor: '#D2D9DF' }) }}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      /> */}
      <View style={{ ...styles.topIcon, marginRight: 10 }}>

        <TouchableOpacity onPress={() => handlePress('Search')}>
              <Image
                source={search}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
        </TouchableOpacity>
      </View>
      <View style={styles.topIcon}>
        <TouchableOpacity onPress={() => handlePress('Hamburger')}>
              <Image
                source={hamburger}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = {
  topIcon: {
    width: 22,
    height: 22,
  },
  top: {
    flexDirection: 'row',
    marginTop: windowHeight * 0.06,
    justifyContent: 'flex-end',
    marginRight: windowWidth * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  dropdownButtonStyle: {
    width: 120,
    height: 30,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginRight: windowWidth * 0.05
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 10,
    fontWeight: '500',
    color: '#151E26',
    fontFamily: 'montserratMedium'
  },
  dropdownButtonArrowStyle: {
    fontSize: 12,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 10,
    fontWeight: '500',
    color: '#151E26',
    fontFamily: 'montserratMedium'
  },
  icon: {
    marginLeft: 15,
    color: 'black',
  },
  thinIcon: {
    fontWeight: '300', // Making the icon thin
  },
  
};
