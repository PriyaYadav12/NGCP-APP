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
import { logo, birdsBackground, left, right } from '../../../../assets/asset';
import BottomNavigation, { screenName } from '../../../../components/BottomNavigation';
import { CommonActions } from '@react-navigation/native';
import { colors } from '../../../../utility/theme';
import TopIcons from '../../../../components/TopIcons';
import { useState } from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function PlayZoneSecondMap({ navigation }) {
    const route = useRoute();
    const { points: originalPoints, secondMap, leftScreen, rightScreen } = route.params;
    const points = originalPoints.slice(0, -1); // Create a new array without the last element
    const [currentPointIndex, setCurrentPointIndex] = useState(0); // Add state for current point
    const pointToCheck = ['RESTAURANT/CAFE', 'RESTROOMS', 'MULTI-LEVEL CAR PARK'];

    const handleLogoPress = async () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Home',
            }),
        );
    };

    const handleNavigation = (event) => {
        event === 'left'
            ? navigation.dispatch(
                  CommonActions.navigate({
                      name: leftScreen,
                  }),
              )
            : navigation.dispatch(
                  CommonActions.navigate({
                      name: rightScreen,
                  }),
              );
    };

    const handleArrowPress = (direction) => {
        setCurrentPointIndex((prevIndex) => {
            if (direction === 'left') {
                return prevIndex === 0 ? points.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === points.length - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    const dots = [
        { top: 70, left: 140 },
        { top: 60, left: 120 },
        { top: 50, left: 170 },
        { top: 50, left: 200 },
        { top: 100, left: 140 },
        { top: 40, left: 100 },
        { top: 35, left: 130 },
        { top: 3, left: 160 },
        { top: 120, left: 180 },
        { top: 230, left: 210 },
        { top: 330, left: 110 },
        { top: 150, left: 150 },
        { top: 150, left: 190 },
    ];

    return (
        <>
            <ImageBackground source={birdsBackground} style={styles.backgroundImage}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                        <View style={styles.heading}>
                            <TouchableWithoutFeedback onPress={() => handleNavigation('left')}>
                                <View style={styles.arrow}>
                                    <Image
                                        source={left}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={{ ...styles.titleBox, backgroundColor: colors.primary.colorShade1 }}>
                                <Text style={styles.title}>PLAY ZONE</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => handleNavigation('right')}>
                                <View style={styles.arrow}>
                                    <Image
                                        source={right}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Text style={styles.headingText}>A CHILDHOOD FULL OF NEW EXPERIENCES</Text>
                        <View style={styles.map}>
                            <Image source={secondMap} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            {dots.map((dot, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.point,
                                        { top: dot.top, left: dot.left },
                                        currentPointIndex === index && styles.currentPoint, // Highlight current point
                                    ]}
                                >
                                    <View style={[styles.circle , currentPointIndex === index && styles.currentCircle]}>
                                        <Text style={[styles.label, currentPointIndex === index && styles.currentLabel]}>
                                            A{index + 1}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                        <View style={styles.zoneHeading}>
                            <TouchableWithoutFeedback onPress={() => handleArrowPress('left')}>
                                <View style={styles.arrow}>
                                    <Image
                                        source={left}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={{ ...styles.ZoneBox, backgroundColor: colors.primary.colorShade1 }}>
                                <View style={styles.letter}>
                                    <Text style={styles.text}>{`A${currentPointIndex + 1}`}</Text>
                                </View>
                                <Text style={styles.pointText}>{points[currentPointIndex]}</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => handleArrowPress('right')}>
                                <View style={styles.arrow}>
                                    <Image
                                        source={right}
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            resizeMode: 'contain',
                                        }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
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
        borderRadius: 10,
        backgroundColor: colors.kalpataruColor.colorShade1,
    },
    arrow: {
        width: 25,
        height: 25,
    },
    title: {
        textAlign: 'center',
        fontFamily: 'montserratMedium',
        fontSize: 14,
        color: '#fff',
        letterSpacing: 2,
    },
    ZoneBox: {
        paddingHorizontal: 20, // Make the box broader
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.kalpataruColor.colorShade1,
        flexDirection: 'row', // Ensure the text and point are side by side
        alignItems: 'center',
    },
    subHeading: {
        fontFamily: 'montserratLight',
        fontSize: 11,
        marginRight: 10,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: windowHeight * 0.03,
    },
    zoneHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: windowHeight * 0.03,
    },
    headingText: {
        fontFamily: 'montserratMedium',
        fontSize: 12,
        textAlign: 'center',
        marginTop: windowHeight * 0.02,
    },
    map: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.45,
        marginTop: windowHeight * 0.05,
        position: 'relative',
    },
    point: {
        position: 'absolute',
        alignItems: 'center',
    },
    currentPoint: {
        transform: [{ scale: 1.5 }], // Enlarge the current point
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#d82f6e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    currentCircle: {
        backgroundColor: '#fff',
    },
    label: {
        color: '#fff',
        fontSize: 10,
    },
    currentLabel: {
        color: '#d82f6e',
    },
    letter: {
        borderRadius: 10,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        backgroundColor: '#fff',
    },
    pointText: {
        fontFamily: 'montserratLight',
        fontSize: 12,
        color: '#fff',
    },
    text:{
        color:colors.primary.colorShade1,
        fontSize:10,
    }
};
