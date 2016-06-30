import React,{findDOMNode,Component} from 'react';

import ReactDOM from 'react-dom';

import routers from '../router/router';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';

class App extends Component{
  render(){
    return (
      <div className="wrap">
         <Router>{routers}</Router>
      </div>
    )
  }

  
}


export default App;
