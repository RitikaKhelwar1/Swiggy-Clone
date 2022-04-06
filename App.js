import React from 'react';
import {
  SafeAreaView,

} from 'react-native';
import Styling from './src/styles/Styling';
import Routes from './src/navigation/Routes';
import store from './src/redux/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';



const App = () => {

  return (

    <SafeAreaView style={Styling.MainContainer} >
      <Provider store={store} >
        <Routes />
      </Provider>
    </SafeAreaView>

  )
}

export default App;
