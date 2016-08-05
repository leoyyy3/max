import React,{findDOMNode,Component} from 'react';
import {mhttp,urlMap} from '../mhttp';

class Title extends Component{
  constructor(){
    super();
    this.state={
      commonuser: '',
      poneuser: '',
      wechatuser: '',
    }
  }

  componentWillMount(){
    mhttp({url:urlMap.summaryInfo, 
      success:function (res) {
      var datas = res.datas;
        this.setState({
          commonuser: datas.userCount,
          poneuser: datas.poneCount,
          wechatuser: datas.openIdCount
        });
    }.bind(this)})
    
  }

  render() {
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
				<p>手机用户数</p>
				<p>{this.state.poneuser}</p>
      		</div>
      	</li>
      	<li>
      		<i className="tit_left3"></i>
      		<div className="tit_right">
				<p>OpenId用户数</p>
				<p>{this.state.wechatuser}</p>
      		</div>
      	</li>
      </ul>
    )
  }
}

export default Title;