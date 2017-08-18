/*
* @Author: yzqing
* @Date:   2017-08-15 11:12:06
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-18 15:00:40
*/
import React from 'react'
import 'themes/global'


class App extends React.Component {

  render() {
    return <div className="page-content">
      {this.props.children}
    </div>
  }
}

module.exports = App
