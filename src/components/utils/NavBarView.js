/*
* @Author: yuanziqing
* @Date:   2017-08-18 21:42:12
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-18 22:55:49
*/

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { width as getDomWidth } from 'dom-helpers/query'
import style from 'dom-helpers/style'
import getComputedStyle from 'dom-helpers/style/getComputedStyle'
import NavBar from '../navbar/NavBar'


export default class NavBarView extends Component {
  static contextTypes = {
    router: Object
  }
  constructor(props, context) {
    super(props, context);
    this.context.router; 
  }
  handleToIndex() {
    this.context.router.push('/');
  }
  render () {
  	const navbar = {
	  left:[{text:<span>Back</span>,iconName: 'angle-left',onClick: this.handleToIndex.bind(this)}],
	};
    return (
      <div className="nav-bar-view">
        <NavBar
    	  left={navbar.left}
    	  title= {this.props.name}
    	/>
      </div>
    )
  }
}
