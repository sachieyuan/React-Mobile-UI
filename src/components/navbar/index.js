/*
* @Author: yzqing
* @Date:   2017-08-15 15:54:58
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-19 13:19:51
*/
import React, { propTypes } from 'react';
import NavBarView from '../utils/NavBarView';
import NavBar from './NavBar';
import ToolBar from './ToolBar';
import ToolBarItem from './ToolBarItem';
// import TabBar from './TabBar';
// import TabBarItem from './TabBarItem';
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
        <NavBarView
          name="NavBar"
        />
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

          <br/><br/>
          TabBar<br/><br/>

    	</section>
    )
  }
}
