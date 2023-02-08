import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastContainer } from 'react-toastify';
import store, { persistor } from './store';
import Header from './components/Header';
import history from './services/history';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header/>
            <Routes/>
            <GlobalStyles/>
            <ToastContainer autoClose={3000} className="toast-container"/>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
