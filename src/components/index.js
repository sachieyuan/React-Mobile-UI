/*
* @Author: yzqing
* @Date:   2017-08-15 11:12:06
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-15 11:13:47
*/
import React from 'react'
import 'themes/global'


class App extends React.Component {

  render() {
    return <div id="app">
      {this.props.children}
    </div>
  }
}

module.exports = App
