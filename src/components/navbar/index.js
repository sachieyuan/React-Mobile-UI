/*
* @Author: yzqing
* @Date:   2017-08-15 15:54:58
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-16 18:31:05
*/
import React, { propTypes } from 'react';
import NavBar from './NavBar';
import ToolBar from './ToolBar';
import ToolBarItem from './ToolBarItem';

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
        NavBar<br/><br/>
    	  <NavBar
    	  	left={navbar1.left}
    	  	title= "NavBar"
    	  	right={navbar1.right}
    	  />

          <br/><br/>

          <NavBar
            title= "NavBar"
            right={[{iconName:'ellipsis-h',onClick: this.handleExample}]}
          />

          <br/><br/>

          <NavBar
            title= "NavBar"
            left={[{iconName:'user-o',onClick: this.handleExample}]}
          />

          <br/><br/>
          ToolBar<br/><br/>

          <ToolBar>
            <ToolBarItem align="left">
              <span>Left</span>
            </ToolBarItem>
          </ToolBar>


    	</section>
    )
  }
}
