/*
* @Author: sachieyuan
* @Date:   2017-08-11 23:26:35
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-12 09:31:48
*/

import React, { Component, PropTypes } from 'react';
import { getThemes } from '../../utils/theme';
import classNames from 'classnames';

export default class Badge extends Component {

  static propTypes = {
    theme: PropTypes.oneOf(getThemes()),
    children: PropTypes.node,
    className: PropTypes.string
  };

  render () {
    const { theme, children, className, ...props } = this.props
    const classes = classNames({
      'badge': true,
      [`bg-${theme}`]: theme
    }, className)
    return (
      <span className={classes} {...props}>{children}</span>
    )
  }
}
