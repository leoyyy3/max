import {Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';
import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div className="slide">
      	<h2 className="menu1">整体概况</h2>
      	<ul>
    			<li><Link activeClassName="on" to="sjzz">数据资产总量</Link></li>
    			<li><Link activeClassName="on" to="sjzzhang">数据增长趋势</Link></li>
    			<li><Link activeClassName="on" to="gmqd">购买渠道分布</Link></li>
      	</ul>
      	<h2 className="menu2">整体概况</h2>
      	<ul>
    			<li><Link activeClassName="on" to="zxpp">最新匹配状态</Link></li>
    			<li><Link activeClassName="on" to="ppzz">匹配增长趋势</Link></li>
      	</ul>
      </div>
    );
  }
});

export default Header;