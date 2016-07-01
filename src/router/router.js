import React from 'react';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';

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
		<IndexRoute component={Sjzz}></IndexRoute>
		<Route path="sjzz" name="匹配增长趋势" component={Sjzz} onEnter={enterFun}></Route>
		<Route path="sjzzhang" name="匹配增长趋势" component={Sjzzhang}></Route>
		<Route path="gmqd" name="匹配增长趋势" component={Gmqd}></Route>
		<Route path="zxpp" name="匹配增长趋势" component={Zxpp}></Route>
		<Route path="ppzz" name="匹配增长趋势" component={Ppzz}></Route>
		<Route path="*" component={NoFind}></Route>
	</Route>);

export default routes;