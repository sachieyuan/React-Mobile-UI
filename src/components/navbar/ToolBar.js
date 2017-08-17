/*
* @Author: yuanziqing
* @Date:   2017-08-16 14:01:20
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-16 18:21:55
*/
import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Toolbar extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  render () {
    const { className, children } = this.props
    const classes = classNames({
      'toolbar': true
    }, className)
    return (
      <div className={classes}>
        {children &&
          <div className='toolbar-inner'>
            {children}
          </div>
        }
      </div>
    )
  }
}
