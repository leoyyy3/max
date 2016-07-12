import React, {
	findDOMNode,
	Component
} from 'react';

class Zxpp extends Component {
	
	render() {

		return ( 
			< div className = "box" > 
				< h3 > 整体匹配情况 < /h3> 
				< div className = "box_wrap" >
					<table className="chart_tab now_tab">
						<tr>
							<td><span style={{width:200,display:'block'}}>跨渠道ID匹配数</span></td>
							<td>手机号</td>
							<td>Wechat OpenID</td>
							<td>weibo uid</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>13222222222</td>
							<td>23421342</td>
							<td>23423423</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>--</td>
							<td>23421342</td>
							<td>23423423</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>13222222222</td>
							<td>--</td>
							<td>23423423</td>
						</tr>
					</table>
					<table className="chart_tab now_tab">
						<tr>
							<td><span style={{width:200,display:'block'}}>匹配率（以横轴为分母）</span></td>
							<td>手机号</td>
							<td>Wechat OpenID</td>
							<td>weibo uid</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>13222222222</td>
							<td>23421342</td>
							<td>23423423</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>--</td>
							<td>23421342</td>
							<td>23423423</td>
						</tr>
						<tr>
							<td>234234</td>
							<td>13222222222</td>
							<td>--</td>
							<td>23423423</td>
						</tr>
					</table>
				</div> 
			< /div>
		)
	}
}

export default Zxpp;