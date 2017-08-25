/*
* @Author: yuanziqing
* @Date:   2017-08-19 13:04:17
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-19 13:04:47
*/
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Icon from '../button/Icon'

export default class TabbarItem extends Component {

  static propTypes = {
    iconName: PropTypes.string,
    icon: PropTypes.node,
    label: PropTypes.string,
    active: PropTypes.bool,
    className: PropTypes.string
  };

  render () {
    const { iconName, icon, label, active, className, ...props } = this.props
    const classes = classNames({
      'tab-link': true,
      'active': active
    }, className)
    return (
      <a className={classes} {...props}>
        {iconName &&
          <Icon name={iconName} />
        }
        {icon}
        {label &&
          <span className='tabbar-label'>{label}</span>
        }
      </a>
    )
  }
}
