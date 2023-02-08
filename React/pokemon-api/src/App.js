import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Header from './components/Header';
import history from './services/history';
import MainRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router history={history}>
      {/* <Header/> */}
      <MainRoutes/>
      <GlobalStyles/>
      <ToastContainer autoClose={3000} className="toast-container"/>
    </Router>
  );
}

export default App;
