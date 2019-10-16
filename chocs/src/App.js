import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';

import Homepage from './components/HomePage';
import Loginpage from './components/LoginPage';
import Signup from './components/SignupPage';
import Header from './components/Header';
import Brandpage from './components/Brandpage';
import Choclatepage from './components/Choclatepage'
import ChocolatesDetails from './components/ChoclateDetailpage';
import BrandDetails from './components/BrandDetailpage';

// import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/brands" component={Brandpage}/>
        <Route exact path="/brands/:id" component={BrandDetails} />
        <Route exact path="/chocolates" component={Choclatepage}/>
        <Route exact path="/chocolates/:id" component={ChocolatesDetails} />
        <Route exact path="/login" component={Loginpage}/>
        <Route exact path="/signup" component={Signup} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
