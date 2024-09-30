import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import Home from './Home';
import BottomNavigation from '../components/BottomNavigation';
import { selectAuthData } from '../app/slices/authSlice';
import { screenName } from '../components/BottomNavigation';

import EventsScreen from './navScreens/EventsScreen';
import MapScreen from './navScreens/MapSection/MapScreen';
import TicketScreen from './navScreens/Ticket/TicketScreen';
import SOSScreen from './navScreens/sosScreen';
import AccountScreen from './navScreens/Account/AccountScreen';
import TreesScreen from './Trees/Trees';

// This routing was built previously by own from scratch
// As of now latest we are using Stack.Screen to show Navigation
// Bar at every screen

export default function NavigationRouting({ navigation }) {
  const { activeNav } = useSelector(selectAuthData);
  return (
    <>
      <ScrollView>
        {activeNav ? (
          <>
            {activeNav === screenName.event ? <EventsScreen navigation={navigation} /> : null}
            {activeNav === screenName.map ? <MapScreen navigation={navigation} /> : null}
            {activeNav === screenName.ticket ? <TicketScreen navigation={navigation} /> : null}
            {activeNav === screenName.sos ? <SOSScreen navigation={navigation} /> : null}
            {activeNav === screenName.account ? <AccountScreen navigation={navigation} /> : null}
            {activeNav === screenName.trees ? <TreesScreen navigation={navigation} /> : null}
          </>
        ) : (
          <Home navigation={navigation} />
        )}
      </ScrollView>
      <BottomNavigation navigation={navigation} />
    </>
  );
}
