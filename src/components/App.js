import React,{findDOMNode,Component} from 'react';
import ReactDOM from 'react-dom';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';

import Header from '../components/Header';
import Slider from '../components/Slider';
import Title from '../components/Title';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {title:'123'}
  }
  render(){
    return (
      <div className="wrap">
         <Header></Header>
         <Slider></Slider>
         <div className="content">
         	<Title></Title>
         	<div className="right_con">{this.props.children}</div>
         </div>
      </div>
    )
  }
}


export default App;
