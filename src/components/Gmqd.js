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
            sourceName : ['POS&Tmall购买人数','只在POS购买','只在Tmall购买'],
            seriesName : ['PTValueList','PValueList','TValueList'],
            dayIdList:[],
            seriesData:[]
        }
      }

      componentWillMount(){
        var t = this;
        mhttp({url:urlMap.getUserPurByYearAndChanel, 
          success:function (res) {
          var datas = res.datas;
          for(var i=0;i<t.state.seriesName.length;i++){
            t.state.seriesData.push({
                name:t.state.sourceName[i],
                type:'bar',
                stack:'总量',
                label: {
                    normal: {
                        show: true,
                        position: ''
                    }
                },
                data:res.datas[t.state.seriesName[i]]
            })
          }
            t.setState({
              dayIdList: datas.yearIdList,
            });
        }.bind(this)})
      }

	getOtion() {
        var state = this.state;
		const option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:state.sourceName,
            textStyle:{
                color:"#fff"
            },
            y:10
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis:  {
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
        },
        xAxis: {
            type: 'category',
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
        },
        series: state.seriesData
    //     [
    //     {
    //         name: '直接访问',
    //         type: 'bar',
    //         stack: '总量',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'insideRight'
    //             }
    //         },
    //         data: [320, 302, 301, 334, 390, 330, 320]
    //     },
    //     {
    //         name: '邮件营销',
    //         type: 'bar',
    //         stack: '总量',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'insideRight'
    //             }
    //         },
    //         data: [120, 132, 101, 134, 90, 230, 210]
    //     },
    //     {
    //         name: '联盟广告',
    //         type: 'bar',
    //         stack: '总量',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'insideRight'
    //             }
    //         },
    //         data: [220, 182, 191, 234, 290, 330, 310]
    //     },
    //     {
    //         name: '视频广告',
    //         type: 'bar',
    //         stack: '总量',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'insideRight'
    //             }
    //         },
    //         data: [150, 212, 201, 154, 190, 330, 410]
    //     },
    //     {
    //         name: '搜索引擎',
    //         type: 'bar',
    //         stack: '总量',
    //         label: {
    //             normal: {
    //                 show: true,
    //                 position: 'insideRight'
    //             }
    //         },
    //         data: [820, 832, 901, 934, 1290, 1330, 1320]
    //     }
    // ]
};
		return option;
	}
	render() {

		return ( < div className = "box" >
			< h3 > 按年份看用户购买渠道分布 < /h3> < div className = "box_wrap" >
			< ReactEcharts option = {this.getOtion() } height = {300 }/></div> < /div>
		)
	}
}

export default Sjzzhang;