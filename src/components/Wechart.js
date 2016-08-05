import React,{findDOMNode,Component} from 'react';
import ReactEcharts from '../echarts-for-react';
import {mhttp,urlMap} from '../mhttp';

class Wechart extends Component{
    constructor(){
        super();
        this.state={
          register_phone:'',
          unregister_phone:'',
          registepct:'',
          unregisterpct:''
        }
      }

      componentWillMount(){
        mhttp({url:urlMap.wxfansInfo, 
          success:function (res) {
                    if(res.flag == 200){
                        var datas = res.datas;
                        this.setState({
                          register_phone: datas.register_phone,
                          registepct: datas.registepct,
                          unregister_phone: datas.unregister_phone,
                          unregisterpct: datas.unregisterpct,
                        });
                    }
          }.bind(this)})
      }

	getOtion(){
        const option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            color:['#606d7a','#ceb180'],
            series : [
                {
                    name: '微信粉丝手机注册情况',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:this.state.register_phone, name:'注册过手机号'},
                        {value:this.state.unregister_phone, name:'未注册手机号'},
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
      	<h3>微信粉丝手机注册情况</h3>
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
					<td>{this.state.register_phone}</td>
					<td>{this.state.registepct}%</td>
				</tr>
				<tr>
					<td>未注册手机号</td>
					<td>{this.state.unregister_phone}</td>
					<td>{this.state.unregisterpct}%</td>
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