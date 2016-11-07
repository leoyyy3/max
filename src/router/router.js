import React from 'react';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink,hashHistory } from 'react-router';

import Sjzz from '../components/Sjzz';
import Sjzzhang from '../components/Sjzzhang';
import Gmqd from '../components/Gmqd';
import Zxpp from '../components/Zxpp';
import Ppzz from '../components/Ppzz';
import App from '../components/App';
import NoFind from '../components/NoFind';

let enterFun = function(){
	console.log(123);
	return false
}

var routes = (<Route path="/" component={App}>
		<IndexRoute path="sjzz" component={Sjzz}></IndexRoute>
		<Route path="sjzz" component={Sjzz} onEnter={enterFun}></Route>
		<Route path="sjzzhang" component={Sjzzhang}></Route>
		<Route path="gmqd" component={Gmqd}></Route>
		<Route path="zxpp" component={Zxpp}></Route>
		<Route path="ppzz" component={Ppzz}></Route>
		<Route path="*" component={NoFind}></Route>
	</Route>);

export default routes;