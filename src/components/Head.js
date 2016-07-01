import React,{findDOMNode,Component} from 'react';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';


class Head extends Component{
// ()=>{console.log(this.props.route.name);}
	// console.log(123);
  render(){
  	// var x= this;
    return (
      <header>
      	<h1>max factory</h1>
      	<div className="head_tit">{(()=>{console.log(this.props.text)})()}</div>
      </header>
    )
  }
}

export default Head;