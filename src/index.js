import React from 'react';
import ReactDOM from 'react-dom';
import {ReactRouter,Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';

import routers from './router/router';

ReactDOM.render(
	<Router>{routers}</Router>,
	document.body
)
