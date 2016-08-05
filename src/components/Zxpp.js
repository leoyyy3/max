import React, {
	findDOMNode,
	Component
} from 'react';
import {mhttp,urlMap} from '../mhttp';

class Zxpp extends Component {

	constructor(props){
	    super(props);
	    this.state={
	    	data:{}
	    }
	  }

	  componentWillMount(){
	  	var t = this;
	    mhttp({url:urlMap.getAllConditionCount, 
	      success:function (res) {
	      // var datas = res.datas;
	      
	        this.setState({
	          data: res.datas,
	        });
	    }.bind(this)})
	  }
	
	render() {

		return ( 
			< div className = "box" > 
				< h3 > 整体匹配情况 < /h3> 
				< div className = "box_wrap" >
					<table className="chart_tab now_tab">
						<tr>
							<td><span>跨渠道ID匹配数</span></td>
							<td><span>手机号</span></td>
							<td><span>Wechat OpenID</span></td>
							<td><span>weibo uid</span></td>
						</tr>
						<tr>
							<td>手机号</td>
							<td>--</td>
							<td>{this.state.data.phonewxMatchNum}</td>
							<td>{this.state.data.phonewbMatchNum}</td>
						</tr>
						<tr>
							<td>Wechat OpenID</td>
							<td>{this.state.data.phonewxMatchNum}</td>
							<td>--</td>
							<td>{this.state.data.wbwxMatchNum}</td>
						</tr>
						<tr>
							<td>weibo uid</td>
							<td>{this.state.data.phonewbMatchNum}</td>
							<td>{this.state.data.wbwxMatchNum}</td>
							<td>--</td>
						</tr>
					</table>
					<table className="chart_tab now_tab">
						<tr>
							<td><span>匹配率（以横轴为分母）</span></td>
							<td><span>手机号</span></td>
							<td><span>Wechat OpenID</span></td>
							<td><span>weibo uid</span></td>
						</tr>
						<tr>
							<td>手机号</td>
							<td>--</td>
							<td>{this.state.data.PXXmatchrate}%</td>
							<td>{this.state.data.PWWmatchrate}%</td>
						</tr>
						<tr>
							<td>Wechat OpenID</td>
							<td>{this.state.data.PXPmatchrate}%</td>
							<td>--</td>
							<td>{this.state.data.WXWmatchrate}%</td>
						</tr>
						<tr>
							<td>weibo uid</td>
							<td>{this.state.data.PWPmatchrate}%</td>
							<td>{this.state.data.WXXmatchrate}%</td>
							<td>--</td>
						</tr>
					</table>
				</div> 
			< /div>
		)
	}
}

export default Zxpp;