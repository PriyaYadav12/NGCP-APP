import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';

import { store, persistor } from './app/store.js';
import { loadCustomFonts, fonts } from './utility/theme.js';

import AppRoutes from './navigation/AppRoutes.js';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  React.useEffect(() => {
    (async function () {
      await loadCustomFonts();
    })();
  }, []);

  if (!fontsLoaded) {
    // Font is not yet loaded, return an empty component or loading indicator
    return <View></View>;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <AppRoutes />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
