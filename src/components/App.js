import React,{findDOMNode,Component} from 'react';
//var React = require('react');
import {Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';
import ReactDOM from 'react-dom';

class App extends Component{
  render(){
    return (
      <div>
        <Link to="home">home</Link><br/>
        <Link to="about">about</Link>
        {this.props.children}
      </div>
    )
  }

  
}


export default App;
