import React,{findDOMNode,Component} from 'react';
import ReactEcharts from '../echarts-for-react';

class Phone extends Component{
	getOtion(){
        const option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            // selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达'},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
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
					<td>购买渠道</td>
					<td>数量</td>
					<td>占比</td>
				</tr>
				<tr>
					<td>只在POS购买</td>
					<td>210000</td>
					<td>23.6%</td>
				</tr>
				<tr>
					<td>只在Tmall购买</td>
					<td>210000</td>
					<td>23.6%</td>
				</tr>
				<tr>
					<td>POS&Tmall均购买</td>
					<td>210000</td>
					<td>23.6%</td>
				</tr>
				<tr>
					<td>未购买</td>
					<td>210000</td>
					<td>23.6%</td>
				</tr>
                </tbody>
			</table>
			<p className="shuoming">
			POS&Tmall重合率为17%<br/>
			*注：重合率 ：在两个渠道都购买过的人群占所有<br/>
购买人群的比例
			</p>
        </div>
      	</div>
      </div>
    )
  }
}

export default Phone;