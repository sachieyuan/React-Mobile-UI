/*
* @Author: yzqing
* @Date:   2017-08-15 15:54:58
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-15 19:00:36
*/
import React, { propTypes } from 'react';
import NavBar from './Navbar';

module.exports = class extends React.Component {
  handleExample(){
    alert('handleEvent');
  }
  render() {
	const navbar1 = {
	  left:[{text:<span>Back</span>,iconName: 'angle-left',onClick: this.handleExample}],
	  right:[{iconName: 'edit'}]
	};
    return (
    	<section className="">
    	  <NavBar
    	  	left={navbar1.left}
    	  	title= "NavBar"
    	  	right={navbar1.right}
    	  />

          <br/>
          <br/>

          <NavBar
            title= "NavBar"
            right={[{iconName:'ellipsis-h',onClick: this.handleExample}]}
          />

          <br/>
          <br/>

          <NavBar
            title= "NavBar"
            left={[{iconName:'user-o',onClick: this.handleExample}]}
          />
    	</section>
    )
  }
}
