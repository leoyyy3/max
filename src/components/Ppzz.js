import React, {
	findDOMNode,
	Component
} from 'react';
import ReactEcharts from '../echarts-for-react';
import {mhttp,urlMap} from '../mhttp';

class Ppzz extends Component {
	constructor(props){
	    super(props);
	    this.state={
	    	sourceName:['手机号微博匹配数量','微博微信匹配数量','手机号微信匹配数量'],
	    	seriesName : ['TelWebUidValue','WeChatAndWebUidValue','TelWeChatValue'],
	    	dayIdList:[],
	    	seriesData:[]
	    }
	  }

	  componentWillMount(){
	  	var t = this;
	    mhttp({url:urlMap.getMatchCount, 
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
	          dayIdList: datas.dayId,
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
                		color:"#1790cf",
                		width:1
                	}
                }
			}],
			series: state.seriesData
		};;
		return option;
	}
	render() { 

		return ( < div className = "box" >
			< h3 > 近30天跨渠道ID匹配数趋势图 < /h3> < div className = "box_wrap" >
			< ReactEcharts option = {this.getOtion()} height={300}/></div> < /div>
		)
	}
}

export default Ppzz;