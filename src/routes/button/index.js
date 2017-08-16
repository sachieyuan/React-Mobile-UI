module.exports = {
  path: 'button',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('components/button'))
    })
  }
}