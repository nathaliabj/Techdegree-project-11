import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Imgs from './Components/Imgs';
import NoRoute from './Components/NoRoute';
import './App.css';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Route path ="/" component={Header} />
        <Switch>
          <Route path="/query/:term" render={ props => <Imgs term={ props.match.params.term }/> } />
          <Route exact path="/" render={ props => <Imgs term='Space'/> } />
          <Route component={NoRoute}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
