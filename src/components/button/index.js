import React, { propTypes } from 'react';
import Button from './Button';
import Icon from './Icon';
import Badge from './Badge';
import NavBarView from '../utils/NavBarView';

module.exports = class extends React.Component {

  render() {
    return (
    	<section className="">
          <NavBarView
            name="Button&Icon"
            />
            
            Button
    		<Button>default 按钮</Button>
    		<Button active>active 按钮</Button>
            <Button disable>disabled 按钮</Button>
            <Button loading>loading 按钮</Button>
            <Button refresh>refresh 按钮</Button>
            <br/>
            <Button fill theme="pink">pink 按钮</Button>
            <br/>
            <Button inline>inline 按钮</Button>
            <Button inline small>inline 按钮</Button>
            <Button active inline small>inline 按钮</Button>
            <Button><Icon name="address-book-o"/> 自定义icon按钮</Button>
            <Button inline><Icon name="user-o"/> 按钮</Button>
            <br/>
            Icon
            <br/>
            <Icon name="car"/> car
            <Icon name="child"/> child
            <Icon name="close"/> close
            <Icon name="check"/> check
            <Icon name="clock-o"/> clock-o<br/>
            <Icon name="bullhorn"/> bullhorn
            <br/>
            <br/>
            不同颜色Badge
            <br/>
            <Badge theme="pink">1</Badge>  <Badge theme="orange">2</Badge>  <Badge theme="lightblue">3</Badge>  <Badge theme="red">4</Badge>
    	</section>
    )
  }
}
