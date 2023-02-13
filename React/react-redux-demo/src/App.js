import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';
// import CakeContainer from './components/CakeContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> */}
        <UserContainer/>
      </div>
    </Provider>

  );
}

export default App;
