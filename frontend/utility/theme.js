import * as Font from 'expo-font';

const fonts = {
  montserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  montserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  montserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  montserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
  montserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
};

const colors = {
  primary: {
    colorShade1: '#d82f6e',
    colorShade2: '#e58da3',
    colorShade3: '#fce8f1',
  },
  secondary: {
    colorShade1: '#f9a21a',
    colorShade2: '#fdc982', //confusion
    colorShade3: '#fff0e1',
  },
  tertiary: {
    colorShade1: '#59a846',
    colorShade2: '#a4c98f',
    colorShade3: '#ebf4e7',
  },
  fourth: {
    colorShade1: '#3884be',
    colorShade2: '#8eb3d9',
    colorShade3: '#e1f3fd',
  },
  fifth: {
    colorShade1: '#7c51a1',
    colorShade2: '#957ab7',
    colorShade3: '#c7b9db',
  },
  kalpataruColor: {
    colorShade1: '#00AEEF',
    colorShade2: '#5acbf5',
    colorShade3: '#e1f3fd',
  },
  transparentColors: {
    primary: 'rgba(216, 47, 110, 0.85)',
    secondary: 'rgba(249, 162, 26, 0.85)',
    tertiary: 'rgba(89, 168, 70, 0.85)',
    fourth: 'rgba(56, 132, 190, 0.85)',
    fifth: 'rgba(124, 81, 161, 0.85)',
    sixth: 'rgba(143, 179, 218, 0.85)',
    seventh: 'rgba(70, 69, 71, 0.85)',
    eighth: 'rgba(229, 141, 163, 0.85)',
  },
};

async function loadCustomFonts() {
  await Font.loadAsync(fonts);
}

function replaceOpacity(colorString, newOpacity) {
  const rgbaRegex = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([01]?(\.\d+)?)\s*\)$/i;
  const match = colorString.match(rgbaRegex);
  if (!match) {
    throw new Error('Invalid RGBA color string.');
  }
  const red = match[1];
  const green = match[2];
  const blue = match[3];
  const newColorString = `rgba(${red}, ${green}, ${blue}, ${newOpacity})`;
  return newColorString;
}

export { fonts, colors, loadCustomFonts, replaceOpacity };
