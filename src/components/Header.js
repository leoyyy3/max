import React,{findDOMNode,Component} from 'react';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';


class Header extends Component{
// ()=>{console.log(this.props.route.name);}
  render(){
    return (
      <header>
      	<h1>max factory</h1>
      	<div className="head_tit"></div>
      </header>
    )
  }
}

export default Header;