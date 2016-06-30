import React from 'react';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';

import About from '../components/About';
import Home from '../components/Home';
import Config from './config';
import NoFind from '../components/NoFind';
import Index from '../components/Index';

let enterFun = function(){
	console.log(123);
	return false
}

var routes = (<Route path="/" component={Config}>
		<IndexRoute component={Index}></IndexRoute>
		<Route path="home" component={Home} onEnter={enterFun}></Route>
		<Route path="about" component={About}></Route>
		<Route path="*" component={NoFind}></Route>
	</Route>);

export default routes;