import { View, Text, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { left, right,steps } from '../assets/asset';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function Map({ name, heading, color, map, points, pointLetter, leftScreen, rightScreen, onClickScreen, navigation, secondMap }) {
    const pointToCheck = ['RESTAURANT/CAFE', 'RESTROOMS', 'MULTI-LEVEL CAR PARK','LAKE SIDE RESTAURANT'];
    const handleNavigation = (event) => {
        if(event === 'mapClick') {
            navigation.dispatch(
                CommonActions.navigate({
                  name: onClickScreen,
                  params: {
                    points,
                    secondMap,
                    leftScreen,
                    rightScreen
                  }
                }),
            )
            return;
        }
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

    return (
        <>
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
                <View style={{ ...styles.titleBox, backgroundColor: color }}>
                    <Text style={styles.title}>{name}</Text>
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
            <Text style={styles.headingText}>{heading}</Text>
            <TouchableWithoutFeedback
              onPress={() => handleNavigation('mapClick')}
            >
                <View style={styles.map}>
                    <Image source={map} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.points}>
                {
                    points.map((point, i) => <View style={styles.point} key={i}>
                        <View style={{ ...styles.letter, backgroundColor: (typeof point === 'string' && pointToCheck.includes(point)) 
                            ? 'black' 
                            : (typeof point === 'string' 
                                ? color 
                                : point.color) }}>
                            {point === 'WALKING ROUTE' ? (
                                    <Image
                                    source={steps} 
                                    style={styles.steps}
                                    />
                                ) : (
                                    <Text style={styles.text}>{pointLetter}{i + 1}</Text>
                                )}                        
                        </View>
                        <Text style={styles.pointText}>{typeof point === 'string' ? point : point.text}</Text>
                    </View>)
                }
            </View>
        </>
    )
}

const styles = {
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-between',
        marginTop: windowHeight * 0.03
    },
    titleBox: {
        paddingHorizontal: 13,
        paddingVertical: 10,
        borderRadius: 10,
    },
    title: {
        fontFamily: 'montserratMedium',
        fontSize: 14,
        color: '#fff',
        letterSpacing: 2,
    },
    arrow: {
        width: 25,
        height: 25,
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
    },
    points: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        flexWrap: 'wrap'
    },
    point: {
        flexDirection: 'row',
        width: '30%',
        marginBottom: 10,
        alignItems: 'center'
    },
    letter: {
        borderRadius: 7.5,
        width: 15,
        height: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    pointText: {
        fontFamily: 'montserratLight',
        fontSize: 8,
    },
    steps:{
        width:10,
        height:10,
        transform: [{ rotate: '90deg' }],
    },
    text:{
        fontSize:8,
        color:'#fff'
    }
}