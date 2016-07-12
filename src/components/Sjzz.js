import React from 'react';
import Phone from './Phone';
import Wechart from './Wechart';

var Header = React.createClass({
  render: function() {
    return (
      <div>
      	<Phone></Phone>
      	<Wechart></Wechart>
      </div>
    );
  }
});

export default Header;