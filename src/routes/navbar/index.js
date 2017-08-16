/*
* @Author: yzqing
* @Date:   2017-08-15 16:02:18
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-15 16:03:09
*/
module.exports = {
  path: 'navbar',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('components/navbar'))
    })
  }
}