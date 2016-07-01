import React,{findDOMNode,Component} from 'react';

class Ppzz extends Component {
	aa(x){
		console.log(this)
  		// this.setState(title:this.props.route.name)
  	}
	  render() {
	  	var x = this.route;
	    return (
	      <div onClick={this.aa(x)}>
	      	匹配增长趋势
	      </div>
	    );
	  }
};

export default Ppzz;