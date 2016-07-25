import React,{findDOMNode,Component} from 'react';
import ReactEcharts from '../echarts-for-react';
import reqwest from '../reqwest.min';
import urlMap from '../config';

class Phone extends Component{
      constructor(){
        super();
        this.state={
          purchase: '', //购买数量
            purchasePct: '',//购买数量所占百分比
            Unpurchase: '',//未购买数量
            unpurachasePct: '',//未购买数量所占百分比
            PosValue: '',//只在Pos购买的数量
            PosPct: '',//只在pos购买的数量所占百分比
            TmallValue: '',//只在Tmall购买的数量
            TmallPct: '',//只在Tmall购买的数量所占百分比
            PosTmallValue: '',//Pos&Tmall均购买的数量
            PosTmallPct: '',//Pos&Tmall均购买的数量所占百分比
            coincide: ''//Pos&Tmall的重合率
        }
      }

      componentWillMount(){
        reqwest(urlMap.purchaseInfo, function (res) {
            if(res.flag == 200){
                var datas = res.datas;
                this.setState({
                  purchase: datas.purchase,
                  purchasePct: datas.purchasePct,
                  unpurachase:datas.Unpurchase,
                  unpurachasePct:datas.unpurachasePct,
                    PosValue: datas.PosValue,//只在Pos购买的数量
                    PosPct: datas.PosPct,//只在pos购买的数量所占百分比
                    TmallValue: datas.TmallValue,//只在Tmall购买的数量
                    TmallPct: datas.TmallPct,//只在Tmall购买的数量所占百分比
                    PosTmallValue: datas.PosTmallValue,//Pos&Tmall均购买的数量
                    PosTmallPct: datas.PosTmallPct,//Pos&Tmall均购买的数量所占百分比
                    coincide: datas.coincide//Pos&Tmall的重合率
                });
            }
          
        }.bind(this))
      }
	getOtion(){
        var state = this.state;
        // console.log(state)
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
                        {value:state.unpurachase, name:'未购买'},
                        {value:state.purchase, name:'购买'},
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:state.unpurachase, name:'未购买'},
                        {value:state.PosValue, name:'只在Pos购买'},
                        {value:state.TmallValue, name:'只在Tmall购买'},
                        {value:state.PosTmallValue, name:'Pos&Tmall均购买'},
                        
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
					<td>{this.state.PosValue}</td>
					<td>{this.state.PosPct}%</td>
				</tr>
				<tr>
					<td>只在Tmall购买</td>
					<td>{this.state.TmallValue}</td>
					<td>{this.state.TmallPct}%</td>
				</tr>
				<tr>
					<td>POS&Tmall均购买</td>
					<td>{this.state.PosTmallValue}</td>
					<td>{this.state.PosTmallPct}%</td>
				</tr>
				<tr>
					<td>未购买</td>
					<td>{this.state.unpurachase}</td>
					<td>{this.state.unpurachasePct}%</td>
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