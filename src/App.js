import React from 'react';
import { Switch, Route } from 'react-router-dom';
// connect components to the redux 'store'
import { connect } from 'react-redux';
import NavBar from './Components/Nav/NavBar';
import FeatureContainer from './Components/FeatureContainer';
import ProductContainer from './Components/ProductContainer';
import FooterContainer from './Components/FooterContainer';
import ProductPage from './Components/ProductPage';

function App() {

  return (
    <>
      <NavBar />

      <main>
        <Switch>
          <Route exact path="/" component={FeatureContainer} />
          <Route exact path="/products" render={(routeProps) => <ProductContainer {...routeProps} />} />
          <Route path="/products/:id" render={(routeProps) => <ProductPage {...routeProps} />} />
        </Switch>
      </main>
      <FooterContainer />

    </>
  )

};

export default App;