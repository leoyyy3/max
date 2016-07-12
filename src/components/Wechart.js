import React,{findDOMNode,Component} from 'react';
import ReactEcharts from '../echarts-for-react';

class Wechart extends Component{
	getOtion(){
        const option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        return option;
    }
  render(){
  	
    return (
      <div className="box">
      	<h3>手机号购买渠道统计</h3>
      	<div className="box_wrap">
      	<div className="chart_left">
			<ReactEcharts
            option={this.getOtion()} 
            height={300} 
            />
        </div>
        <div className="chart_right">
			<table className="chart_tab we_tab">
            <tbody>
				<tr>
					<td>是否注册手机号</td>
					<td>数量</td>
					<td>占比</td>
				</tr>
				<tr>
					<td>注册过手机号</td>
					<td>数量</td>
					<td>占比</td>
				</tr>
				<tr>
					<td>未注册手机号</td>
					<td>数量</td>
					<td>占比</td>
				</tr>
                </tbody>
			</table>
        </div>
      	</div>
      </div>
    )
  }
}

export default Wechart;