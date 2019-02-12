import React, { Component } from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import Home from './Screens/HomeScreen/HomeScreen'
import Header from './Components/Header/Header'
import logo from './logo.svg';
import './App.css';
import SubHeader from './Components/SubHeader/SubHeader';
import AddUser from './Components/User/AddUser/AddUser';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <Switch>
            <Route path="/">
              {props => <div>
                <Header></Header>
                <SubHeader {...props}></SubHeader>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/adduser" component={AddUser}></Route>
              </div>}
            </Route>
          </Switch>
        </HashRouter>
      </React.Fragment>

    );
  }
}

export default App;
