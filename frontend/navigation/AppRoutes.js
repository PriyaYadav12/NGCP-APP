import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';

import Home from '../screens/Home';
import Authentication from '../components/Authentication';
import NavigationRouting from '../screens/NavigationRouting';
import BottomNavigation from '../components/BottomNavigation';

// Nav Screens
import { screenName } from '../components/BottomNavigation';
import EventsScreen from '../screens/navScreens/EventsScreen';
import MapScreen from '../screens/navScreens/MapSection/MapScreen';
import TicketScreen from '../screens/navScreens/Ticket/TicketScreen';
import SOSScreen from '../screens/navScreens/sosScreen';
import HamburgerScreen from '../screens/Hamburger';
import SearchScreen from '../screens/Search';
import AccountScreen from '../screens/navScreens/Account/AccountScreen';

import TreesScreen from '../screens/Trees/Trees';
import BirdScreen from '../screens/Birds/Birds';
import PlayScreen from '../screens/Play/Play';
import ActiveScreen from '../screens/Active/Active';
import RelaxationScreen from '../screens/Relaxation/Relaxation';
import ThemeGardenScreen from '../screens/Relaxation/Theme_Garden/ThemeGarden';
import OtherGardenScreen from '../screens/Relaxation/Other_Garden/OtherGarden';
import LakeScreen from '../screens/Relaxation/Lake_Side/Lake';
import IndividualDetail from '../screens/IndividualDetail';
import TrailsScreen from '../screens/Trails/Trails';
import TrailMap from '../screens/Trails/TrailsMap';
import InfoCentre from '../screens/InfoCentre/InfoCentre';
import TicketPriceScreen from '../screens/navScreens/Ticket/TicketPriceScreen';
import AccountEditScreen from '../screens/navScreens/Account/AccountEditScreen';
import AccountMerchandiseScreen from '../screens/navScreens/Account/AccountMerchandise';
import AccountContactScreen from '../screens/navScreens/Account/AccountContact';
import AccountFeedbackScreen from '../screens/navScreens/Account/AccountFeedback';

// Maps
import PlayZoneFirstMap from '../screens/navScreens/MapSection/PlayZone/PlayZoneFirstMap';
import PlayZoneSecondMap from '../screens/navScreens/MapSection/PlayZone/PlayZoneSecondMap';
import ThemeGardenFirstMap from '../screens/navScreens/MapSection/ThemeGarden/ThemeGardenFirstMap';
import LakeSideFirstMap from '../screens/navScreens/MapSection/LakeSide/LakeSideFirstMap';
import SportsArenaFirstMap from '../screens/navScreens/MapSection/SportsArena/SportsArenaFirstMap';
import ThemeGardenSecondMap from '../screens/navScreens/MapSection/ThemeGarden/ThemeGardenSecondMap';
import SportsArenaSecondMap from '../screens/navScreens/MapSection/SportsArena/SportsArenaSecondMap';
import LakeSideSecondMap from '../screens/navScreens/MapSection/LakeSide/LakeSideSecondMap';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Hamburger" component={HamburgerScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name={'BottomNavigation'}
          component={NavigationRouting}
          options={{ headerShown: false }}
        />
        {/* Nav Screens */}
        <Stack.Screen
          name={screenName.event}
          component={EventsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenName.map}
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenName.ticket}
          component={TicketScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenName.sos}
          component={SOSScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenName.account}
          component={AccountScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'AccountEditScreen'}
          component={AccountEditScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'AccountMerchandiseScreen'}
          component={AccountMerchandiseScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'AccountContactScreen'}
          component={AccountContactScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'AccountFeedbackScreen'}
          component={AccountFeedbackScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={'TicketPriceScreen'}
          component={TicketPriceScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Trails" component={TrailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrailMapScreen" component={TrailMap} options={{ headerShown: false }} />
        <Stack.Screen name="Trees" component={TreesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Birds" component={BirdScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Play" component={PlayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Active" component={ActiveScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Information" component={InfoCentre} options={{ headerShown: false }} />
        <Stack.Screen
          name="Relaxation"
          component={RelaxationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThemeGarden"
          component={ThemeGardenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Lake" component={LakeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="OtherGarden"
          component={OtherGardenScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IndividualDetail"
          component={IndividualDetail}
          options={{ headerShown: false }}
        />
        {/* Map */}
        <Stack.Screen
          name="PlayZoneFirstMap"
          component={PlayZoneFirstMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayZoneSecondMap"
          component={PlayZoneSecondMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThemeGardenFirstMap"
          component={ThemeGardenFirstMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ThemeGardenSecondMap"
          component={ThemeGardenSecondMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SportsArenaFirstMap"
          component={SportsArenaFirstMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SportsArenaSecondMap"
          component={SportsArenaSecondMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LakeSideFirstMap"
          component={LakeSideFirstMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LakeSideSecondMap"
          component={LakeSideSecondMap}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTheme(AppRoutes);
