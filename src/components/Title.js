import React from 'react';
import reqwest from '../reqwest.min';
import urlMap from '../config';

var Title = React.createClass({
  getInitialState: function() {
      return {
        commonuser: '',
        poneuser: '',
        wechatuser: ''
      };
    },

  componentDidMount: function() {
    reqwest(urlMap.summaryInfo, function (res) {
      var datas = res.datas;
      // if (this.isMounted()) {
        this.setState({
          commonuser: datas.commonuser,
          poneuser: datas.poneuser,
          wechatuser: datas.wechatuser
        });
      // }  
    }.bind(this))
  },

  render: function() {
    return (
      <ul className="user_tit">
      	<li>
      		<i className="tit_left1"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>{this.state.commonuser}</p>
      		</div>
      	</li>
      	<li>
      		<i className="tit_left2"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>{this.state.poneuser}</p>
      		</div>
      	</li>
      	<li>
      		<i className="tit_left3"></i>
      		<div className="tit_right">
				<p>用户总数</p>
				<p>{this.state.wechatuser}</p>
      		</div>
      	</li>
      </ul>
    );
  }
});

export default Title;