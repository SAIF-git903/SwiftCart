import 'react-native-gesture-handler';
import React from "react";
import NavContainer from "./Navigation/NavContainer";
import { Provider } from "react-redux";
import store from "./redux/store"
import Notification from './components/Notification';
import ImageCom from './components/Image';

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
      {/* <ImageCom /> */}
    </Provider>
  )
}

export default App