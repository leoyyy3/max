import {Router ,Route ,Link,Redirect,IndexRoute,IndexLink} from 'react-router';
import React from 'react';

var Header = React.createClass({
  render: function() {
    return (
      <div>
      	<h2>整体概况</h2>
      	<ul>
			<li><Link to="sjzz">数据资产总量</Link></li>
			<li><Link to="sjzzhang">数据增长趋势</Link></li>
			<li><Link to="gmqd">购买渠道分布</Link></li>
      	</ul>
      	<h2>整体概况</h2>
      	<ul>
			<li><Link to="zxpp">最新匹配状态</Link></li>
			<li><Link to="ppzz">匹配增长趋势</Link></li>
      	</ul>
      </div>
    );
  }
});

export default Header;