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

export default function LakeSideSecondMap({ navigation }) {
    const route = useRoute();
    const { points, secondMap, leftScreen, rightScreen } = route.params;
    const [currentPointIndex, setCurrentPointIndex] = useState(0); // Add state for current point

    const handleLogoPress = async () => {
        navigation.dispatch(
            CommonActions.navigate({
                name: 'Home',
            }),
        );
    };

    const handleNavigation = (event) => {
        event === 'left' ? 
        navigation.dispatch(
            CommonActions.navigate({
              name: leftScreen,
            }),
        ) : navigation.dispatch(
            CommonActions.navigate({
              name: rightScreen,
            }),
        );
    }
    const handleArrowPress = (direction) => {
        setCurrentPointIndex((prevIndex) => {
            if (direction === 'left') {
                return prevIndex === 0 ? points.length - 1 : prevIndex - 1;
            } else {
                return prevIndex === points.length - 1 ? 0 : prevIndex + 1;
            }
        });
    }
    const dots = [
        { top: 160, left: 180 },
        { top: 160, left: 230 },
        { top: 140, left: 120 },
        { top: 140, left: 250 },
        { top: 140, left: 210 },
        { top: 180, left: 290 },
        { top: 200, left: 170 },
        { top: 230, left: 190 },
        { top: 190, left: 230 },
        { top: 240, left: 250 },
        { top: 140, left: 70 },
        { top: 240, left: 150 },

    ];

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
                            <View style={{ ...styles.titleBox, backgroundColor: colors.fourth.colorShade1 }}>
                                <Text style={styles.title}>LAKE ZONE</Text>
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
                        <Text style={styles.headingText}>A CHILHOOD FULL OF NEW EXPERIENCES</Text>
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
                                            D{index + 1}
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
                            <View style={{ ...styles.ZoneBox, backgroundColor: colors.fourth.colorShade1 }}>
                                <View style={styles.letter}>
                                    <Text style={styles.text}>{`D${currentPointIndex + 1}`}</Text>
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
    headingText: {
        fontFamily: 'montserratMedium',
        fontSize: 12,
        textAlign: 'center',
        marginTop: windowHeight * 0.02,
    },
    map: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.45,
        marginTop: windowHeight * 0.05
    },
    ZoneBox: {
        paddingHorizontal: 20, // Make the box broader
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.kalpataruColor.colorShade1,
        flexDirection: 'row', // Ensure the text and point are side by side
        alignItems: 'center',
    },
    zoneHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: windowHeight * 0.03,
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
        backgroundColor: colors.fourth.colorShade1,
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
        color: colors.fourth.colorShade1,
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
        color:colors.fourth.colorShade1,
        fontSize:10,
    }

};
