import React from 'react';
import Button from '../button/Button';

module.exports = class extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  state = {
    Link: '/'
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleClickLink.bind(null, '/button')}>Button&Icon&Image</Button>
        <Button onClick={this.handleClickLink.bind(null, '/list')}>List</Button>
        <Button onClick={this.handleClickLink.bind(null, '/grid')}>Grid</Button>
        <Button onClick={this.handleClickLink.bind(null, '/navbar')}>Navbar</Button>
      </div>
    )
  }

  handleClickLink = (route) => {
    this.setState({
      Link: route
    })

    this.context.router.push(route)
  }
}
