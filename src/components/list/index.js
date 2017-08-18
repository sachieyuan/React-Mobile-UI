/*
* @Author: yzqing
* @Date:   2017-08-06 21:36:00
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-18 22:50:54
*/

import React, { PropTypes } from 'react'
import Icon from '../button/Icon'
import Badge from '../button/Badge'
import List from './List'
import ListItem from './ListItem'
import ListDivider from './ListDivider'
import NavBarView from '../utils/NavBarView'
module.exports = class extends React.Component {

  render() {
    return (
    	<section className="page-content">
    	  <NavBarView 
    	    name="List"
    	  />
    	  <div className="content-block-title">普通列表</div>
		  <List>
		  	<ListItem
		  	  iconName="user-circle-o"
		  	/>
		  	<ListItem
              iconName="key"
		  	/>
		  	<ListItem
              iconName="calendar-minus-o"
		  	/>
		  </List>
		  <div className="content-block-title">带href&icon列表</div>
		  <List>
		  	<ListItem
		  	  iconName="hand-pointer-o"
		  	  title= "按钮"
		  	  after= "文件"
		  	  onClick={() => {}}
		  	/>
		  	<ListItem
              iconName="bullhorn"
              title= "消息"
		  	  after= {<Badge theme="red">4</Badge>}
		  	/>
		  	<ListItem
              iconName="subway"
		  	/>
		  </List>

		  <List>
		  	<ListItem
		  	  title= "光輝歲月"
		  	  subTitle="Beyond"
		  	  text="钟声响起归家的讯号在他生命里仿佛带点唏嘘黑色肌肤给他的意义是一生奉献肤色斗争中"
		  	  after= {<Badge theme="red">喜欢</Badge>}
		  	/>
		  	<ListItem
              icon={<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1445274336,2682847003&fm=26&gp=0.jpg"/>}
              title= "光輝歲月"
		  	  subTitle="Beyond"
		  	  text="钟声响起归家的讯号在他生命里仿佛带点唏嘘黑色肌肤给他的意义是一生奉献肤色斗争中"
		  	  after= {<Badge theme="orange">4</Badge>}
		  	/>
		  	<ListItem
              icon={<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1445274336,2682847003&fm=26&gp=0.jpg"/>}
              title= "光輝歲月"
		  	  subTitle="Beyond"
		  	  text="钟声响起归家的讯号在他生命里仿佛带点唏嘘黑色肌肤给他的意义是一生奉献肤色斗争中"
		  	  after= "黄家驹"
		  	  href="javascript:;"
		  	/>
		  </List>

    	</section>
    )
  }
}
