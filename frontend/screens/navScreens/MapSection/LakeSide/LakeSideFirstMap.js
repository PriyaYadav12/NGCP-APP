import {
    View,
    Text,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ScrollView,
    ImageBackground,
  } from 'react-native';
  import { useRoute } from '@react-navigation/native';
  import { logo, birdsBackground, lakeZoneMap, lakeZoneMap2 } from '../../../../assets/asset';
  import BottomNavigation, { screenName } from '../../../../components/BottomNavigation';
  import { CommonActions } from '@react-navigation/native';
  import { colors } from '../../../../utility/theme';
  import TopIcons from '../../../../components/TopIcons';
  import Map from '../../../../components/Map';

  const windowHeight = Dimensions.get('window').height;
  
  export default function LakeSideFirstMap({ navigation }) {
    // const route = useRoute();
    // const { points } = route.params;
    const points = ['BRIDGE','CENTRAL LAKE','ISLANDS',
      '750 M LONG LAKE PROMENADE','VIEWING DECK','LAKE SIDE PLAZA',
      'STAGE','AMBHITHEATRE','FOUNTAINS','KID\'S PLAY AREA','LAKE SIDE RESTAURANT','RESTROOMS'
    ];
    const handleLogoPress = async () => {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
        }),
      );
    };
  
    return (
      <>
        <ImageBackground source={birdsBackground} style={styles.backgroundImage}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
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
              <Map 
                name={'LAKE ZONE'} 
                heading={'THANE 34TH BUT YOUR WATERS OF SERENITY'} 
                color={colors.fourth.colorShade2}
                map={lakeZoneMap} 
                points={points}
                pointLetter={'D'}
                leftScreen={'SportsArenaFirstMap'}
                rightScreen={'PlayZoneFirstMap'} 
                onClickScreen={'LakeSideSecondMap'}
                navigation={navigation}
                secondMap={lakeZoneMap2}
              />
            </View>
          </ScrollView>
        </ImageBackground>
        <BottomNavigation currentActive={null} activeShow={screenName.map} />
      </>
    );
  }
  
  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      minHeight: windowHeight,
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
      backgroundColor: colors.kalpataruColor.colorShade1,
    },
    title: {
      textAlign: 'center',
      fontFamily: 'montserratMedium',
      fontSize: 14,
      color: '#fff',
      letterSpacing: 2,
    },
    text: {
      fontFamily: 'montserratMedium',
      fontSize: 12,
      textAlign: 'center',
      marginTop: windowHeight * 0.02,
      width: '70%',
      lineHeight: 35,
    },
    subHeading: {
      fontFamily: 'montserratLight',
      fontSize: 11,
      marginRight: 10,
    },
  };
  