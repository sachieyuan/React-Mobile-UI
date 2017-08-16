import auth from 'utils/auth'

module.exports = {
  component: 'div',
  childRoutes: [{
    path: '/',
    component: require('components'),
    getIndexRoute(location, callback) {
      require.ensure([], function (require) {
        callback(null, {
          component: require('components/dashboard')
        })
      })
    },
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./button'),
          require('./list'),
          require('./grid'),
          require('./navbar')
        ])
      })
    }
  }, {
    path: 'login',
    component: require('components/login'),
    onEnter(nextState, replace) {
      if (auth.isLogin()) {
        replace('/')
      }
    }
  }, {
    path: 'register',
    component: require('components/register')
  }]
}
