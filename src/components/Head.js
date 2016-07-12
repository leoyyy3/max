import React,{findDOMNode,Component} from 'react';

class Head extends Component{
  showName(path){
    switch(path){
      case '/':
        return '数据资产总量'
      case '/sjzz':
        return '数据资产总量'
      case '/sjzzhang':
        return '数据增长趋势'
      case '/gmqd':
        return '购买渠道分布'
      case '/zxpp':
        return '最新匹配状态'
      case '/ppzz':
        return '匹配增长趋势'
    }
  }
  render(){
  	var x= this.props.text;
    // console.log(x)
    return (
      <header className="head">
      	<h1><span></span></h1>
      	<div className="head_tit">{this.showName(x)}</div> 
      </header>
    )
  }
}

export default Head;