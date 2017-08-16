/*
* @Author: sachieyuan
* @Date:   2017-08-11 22:49:45
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-12 12:37:49
*/

import React, { Component, PropTypes } from 'react';
import { getThemes } from '../../utils/theme';
import classNames from 'classnames';

export default class Button extends Component {

  static propTypes = {
    theme: PropTypes.oneOf(getThemes()),
    active: PropTypes.bool,
    inline: PropTypes.bool,
    small: PropTypes.bool,
    loading: PropTypes.bool,
    refresh: PropTypes.bool,
    disable: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const { theme, active, disable, fill, inline, small, loading, refresh, children, className, ...props } = this.props
    const classes = classNames({
      'button': true,
      'active': active,
      'disabled': disable,
      'inline': inline,
      'small': small,
      'fill': fill,
      [`color-${theme}`]: theme
    }, className);
    return (
    	<a className={classes} {...props}>
        { loading ? <span className="fa fa-spinner fa-spin"></span> : null}
    	  { refresh ? <span className="fa fa-refresh fa-spin"></span> : null}
	      {children}
	    </a>
    )
  }
}
