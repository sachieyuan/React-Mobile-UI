import React from 'react';
import Button from '../button/Button';
import Badge from '../button/Badge';
import NavBar from '../navbar/NavBar';
import List from '../list/List';
import ListItem from '../list/ListItem';

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
        <NavBar
          style={{'width':'100%','height':'.9rem','position':'fixed','left':'0','zIndex':99}}
          title= "Components List"
        />
        <List>
          <ListItem
            iconName="bus"
            title= "Grid"
            href="/grid"
          />
          <ListItem
            iconName="hand-pointer-o"
            title= "Button&Icon&Image"
            href="/button"
          />
          <ListItem
            iconName="bullhorn"
            title= "List"
            href="/list"
          />
          <ListItem
            iconName="subway"
            title= "Navbar"
            href="/navbar"
          />
        </List> 
        <Button onClick={this.handleClickLink.bind(null, '/grid')}>Grid</Button>
        <Button onClick={this.handleClickLink.bind(null, '/button')}>Button&Icon&Image</Button>
        <Button onClick={this.handleClickLink.bind(null, '/list')}>List</Button>
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
