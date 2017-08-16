/*
* @Author: yzqing
* @Date:   2017-08-12 18:51:57
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-12 18:57:12
*/

module.exports = {
  path: 'grid',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('components/grid'))
    })
  }
}