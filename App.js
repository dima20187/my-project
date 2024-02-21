import React, { useState } from 'react';
import { Provider } from 'react-redux';
// import { View } from 'react-native-web';
import store from './src/store';
import Navigation from './src/navigation/NavigationComponent';

// function Component() {
//   return <View />;
// }

function App() {
  // const [isLoadedApp, setIsLoadedApp] = useState(false);
  return (
    <Provider store={store}>
      {/* {!isLoadedApp ? <Component /> : <Navigation />} */}
      <Navigation />
    </Provider>
  );
}

export default App;