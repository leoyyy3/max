import React from 'react';

import routers from './router/router';

import ReactDOM from 'react-dom';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';



ReactDOM.render(
	<Router>{routers}</Router>,
	document.getElementById('wrap')
)
