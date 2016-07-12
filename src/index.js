import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory,Router} from 'react-router';
//browserHistory,Link,Redirect,IndexRoute,IndexLink

import routers from './router/router';

ReactDOM.render(
	<Router history={hashHistory}>{routers}</Router>,
	document.body
)
