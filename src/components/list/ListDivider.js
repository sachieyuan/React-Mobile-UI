/*
* @Author: yzqing
* @Date:   2017-08-06 21:37:00
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-06 21:46:30
*/

import React, { Component, PropTypes } from 'react'

export default class ListDivider extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  render () {
    const { title } = this.props
    return (
      <li className='item-divider'>{title}</li>
    )
  }
}
