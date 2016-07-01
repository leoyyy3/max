import React from 'react';

var Header = React.createClass({
	// var x = this.props.route.name;
	// console.log(this.props.route.name)
  render: function() {
    return (
      <div onClick={()=>{aa()}}>
      	匹配增长趋势
      </div>
    );
  }

  aa(){
  	return this.props.route.name
  }
});

export default Header;