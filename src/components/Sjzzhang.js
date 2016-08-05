import React, {
	findDOMNode,
	Component
} from 'react';
import {mhttp,urlMap} from '../mhttp';
import ReactEcharts from '../echarts-for-react';

class Sjzzhang extends Component {
	constructor(props){
	    super(props);
	    this.state={
	    	sourceName : ['天猫&POS购买数量','微信粉丝数量','只在POS购买数量','用户总数','未产生购买','微信粉丝未注册手机号人数','只在天猫购买数量','手机号数量','微信粉丝注册手机号人数'],
	    	seriesName : ['PTValueList','WOpendIdValueList','PValueList','UCValueList','ReNoPurValueList','WNoReValueList','TValueList','telValueList','WRValueList'],
	    	dayIdList:[],
	    	seriesData:[]
	    }
	  }

	  componentWillMount(){
	  	var t = this;
	    mhttp({
	    	url:urlMap.getUserAssetCount, 
	      success:function (res) {
	      var datas = res.datas;
	      for(var i=0;i<t.state.seriesName.length;i++){
	      	t.state.seriesData.push({
	      		name:t.state.sourceName[i],
	      		type:'line',
	      		stack:'',
	      		data:res.datas[t.state.seriesName[i]]
	      	})
	      }
	        t.setState({
	          dayIdList: datas.dayIdList,
	        });
	    }.bind(this)})
	  }

	getOtion() {
		var state = this.state;
		const option = {
			tooltip: {
				trigger: 'axis'
			},
			legend: {
			    data:state.sourceName,
			    textStyle:{
			        color:"#fff"
			    },
			    y:10
			},
			grid: {
				show:false,
				borderWidth: 0,
				top:'30%',
				bottom:'3%'
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: state.dayIdList,
				splitLine:{
			　　　　show:false
			　　},
				axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine:{
                	lineStyle:{
                		color:"#1790cf",
                		width:1
                	}
                }
			}],
			yAxis: [{
				type: 'value',
				splitLine:{
			　　　　show:false
			　　},
				axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                axisLine:{
                	lineStyle:{
                		color:"#1790cf"
                	}
                }
			}],
			series:state.seriesData
			// [{
			// 	name: '搜索引擎',
			// 	type: 'line',
			// 	stack: '总量',
			// 	label: {
			// 		normal: {
			// 			show: true,
			// 			position: 'top'
			// 		}
			// 	},
			// 	data: [820, 932, 901, 934, 1290, 1330, 1320]
			// }]
		};
		return option;
	}
	render() {

		return ( < div className = "box" >
			< h3 > 最近1月各渠道资产增长趋势 < /h3> < div className = "box_wrap" >
			< ReactEcharts option = {this.getOtion() }/></div> < /div>
		)
	}
}

export default Sjzzhang;