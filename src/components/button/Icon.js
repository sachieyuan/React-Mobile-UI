/*
* @Author: sachieyuan
* @Date:   2017-08-11 22:49:45
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-11 23:09:24
*/

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Icon extends Component {

  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
  };

  render () {
    const { name, className, ...props } = this.props
    const classes = classNames({
      'fa': true,
      [`fa-${name}`]: name
    }, className)
    return (
      <i className={classes} {...props} />
    )
  }
}
