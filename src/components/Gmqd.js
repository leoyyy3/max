import React, {
	findDOMNode,
	Component
} from 'react';
import ReactEcharts from '../echarts-for-react';

class Sjzzhang extends Component {
	getOtion() {
		const option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
        }
    },
    xAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日'],
        splitLine:{
	　　　　show:false
	　　},
		axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            }
        }
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
		return option;
	}
	render() {

		return ( < div className = "box" >
			< h3 > 手机号购买渠道统计 < /h3> < div className = "box_wrap" >
			< ReactEcharts option = {this.getOtion() } height = {300 }/></div> < /div>
		)
	}
}

export default Sjzzhang;