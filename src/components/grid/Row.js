/*
* @Author: yzqing
* @Date:   2017-08-12 20:46:48
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-12 20:47:24
*/

import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Row extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.bool
  };

  static defaultProps = {
    gutter: true
  };

  render () {
    const { className, children, gutter, ...props } = this.props
    const classes = classNames({
      'row': true,
      'no-gutter': !gutter
    }, className)
    return (
      <div className={classes} {...props}>{children}</div>
    )
  }
}
