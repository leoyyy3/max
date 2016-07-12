import React from 'react';

var Title = React.createClass({
  render: function() {
    return (
      <ul className="user_tit">
      	<li>
      		<i className="tit_left1"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>230000</p>
      		</div>
      	</li>
      	<li>
      		<i className="tit_left2"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>230000</p>
      		</div>
      	</li>
      	<li>
      		<i className="tit_left3"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>230000</p>
      		</div>
      	</li>
      </ul>
    );
  }
});

export default Title;