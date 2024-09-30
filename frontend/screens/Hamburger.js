import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Dimensions, Text, ImageBackground, StyleSheet, ScrollView, Share, Linking } from 'react-native';
import { searchBlur, 
  hamburger,
  playBackground,
  aboutUs,
  ads,
  card,
  favourite,
  help,
  language,
  notification,
  question,
  share,
  ticketPass, facebookSocial,
  instagramSocial, 
  instagram} from '../assets/asset';
import { useNavigation } from '@react-navigation/native';
import BottomNavigation, { screenName } from '../components/BottomNavigation';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const HamburgerScreen = () => {
  const navigation = useNavigation(); // Get navigation object

  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this amazing app!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleOpenWebsite = (location) => {
    let url;
    if (location === null) {
      url = 'https://www.namograndcentralpark.com/';
    } else if (location === 'instagram') {
      url = 'https://www.instagram.com/namogcp?igsh=aWJwOXRubHQ3dGg4';
    }
  
    if (url) {
      Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    }
  };
  

  return (
    <>
      <ImageBackground source={playBackground} style={styles.backgroundImage}>
        <View style={styles.top}>
          <View style={{ ...styles.topIcon, marginRight: 10 }}>
            <TouchableOpacity onPress={() => handlePress('Search')}>
              <Image
                source={searchBlur}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.topIcon}>
            <TouchableOpacity onPress={() => handlePress('Home')}>
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

        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.profileImage}></View>
          <View style={styles.authButtons}>
            <TouchableOpacity style={styles.authButton} onPress={() =>  handlePress('Authentication')}>
              <Text style={styles.authButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.authButton} onPress={() =>  handlePress('Authentication')}>
              <Text style={styles.authButtonText}>SIGNUP</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.menuList}>
            <MenuItem icon={notification} title="NOTIFICATION SETTING" handlePress={handlePress} screen="ACCOUNT" />
            <MenuItem icon={ticketPass} title="YOUR TICKET/PASSES" handlePress={handlePress} screen="TICKET" />
            <MenuItem icon={card} title="CARD RECHARGES" handlePress={handlePress} screen="TICKET" />
            <MenuItem icon={favourite} title="FAVOURITE" handlePress={handlePress} screen="Home" />
            <MenuItem icon={share} title="SHARE WITH YOUR FRIENDS" handlePress={handleShare} screen={null} />
            <MenuItem icon={language} title="CHANGE LANGUAGE" handlePress={handlePress} screen="Home" />
            <MenuItem icon={ads} title="REMOVE ADS" handlePress={handlePress} screen="Home" />
            <MenuItem icon={help} title="HELP @NGCP" handlePress={handlePress} screen="Home" />
            <MenuItem icon={question} title="FREQUENTLY ASKED QUESTIONS" handlePress={handlePress} screen="Home" />
            <MenuItem icon={aboutUs} title="ABOUT US" handlePress={handlePress} screen="Home" />
          </View>
          
          <View style={styles.socialMediaTextContainer}>
                <TouchableOpacity style={styles.websiteLink} onPress={() => handleOpenWebsite(null)}>
                <Text style={styles.menuText}>VISIT NGCP WEBSITE</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.socialMedia}>
            <View style={styles.socialMediaTextContainer}>
              <Text style={styles.socialMediaText}>FOLLOW US ON</Text>
            </View>
            <View style={styles.socialIcons}>
              <TouchableOpacity  onPress={() => handleOpenWebsite('instagram')}>

                <Image
                  source={instagram}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <BottomNavigation currentActive={null} activeShow={null} />
    </>
  );
};

const MenuItem = ({ icon, title, handlePress, screen }) => (
  <TouchableOpacity style={styles.menuItem} onPress={() => screen ? handlePress(screen) : handlePress()}>
    <Image
      source={icon}
      style={styles.menuIcon}
    />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    minHeight: windowHeight + 200,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
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
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor:'#758694',
  },
  authButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  authButton: {
    marginHorizontal: 10,
    paddingHorizontal: 70,
  },
  authButtonText: {
    color: 'black',
    fontWeight: '500', // Medium
    fontSize: 12, // 12pt
    fontFamily: 'MontserratRoman',
  },
  divider: {
    width: '90%',
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  menuList: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    color: '#007BFF',
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginHorizontal: 20,
  },
  menuText: {
    color: '#333',
    fontWeight: '300', // Medium
    fontSize: 12, // 12pt
    fontFamily: 'MontserratRoman',
  },
  websiteLink: {
    paddingVertical: 15,
    paddingHorizontal: 20,

  },
  socialMedia: {
    marginTop: 30,
    width: '100%',
  },
  socialMediaTextContainer: {
    paddingHorizontal: 20,
  },
  socialMediaText: {
    color: '#333',
    fontWeight: '300', // Medium
    fontSize: 12, // 12pt
    fontFamily: 'MontserratRoman',
  },
  socialIcons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical:20,
  },
  socialIcon: {
    marginHorizontal: 10,
    color: '#007BFF',
  },
};

export default HamburgerScreen;
