# React-Mobile-UI
 React Components for Mobile

### 網格佈局 Clo
- Row
- Clo
			`<Row>
			  <Clo size={50}>size50</Clo>
			  <Clo size={50}>size50</Clo>
			</Row>`
### 按鈕 Button
- Button
			`<Button>default 按钮</Button>
    		<Button active>active 按钮</Button>
            <Button disable>disabled 按钮</Button>
            <Button loading>loading 按钮</Button>
            <Button refresh>refresh 按钮</Button>
            <Button fill theme="pink">pink 按钮</Button>
            <Button inline>inline 按钮</Button>
            <Button inline small>inline 按钮</Button>
            <Button active inline small>inline 按钮</Button>
            <Button><Icon name="address-book-o"/> 自定义icon按钮</Button>
            <Button inline><Icon name="user-o"/> 按钮</Button>`
### 圖標 & 標簽 Icon & Badge
- Icon
- Badge
			`<Icon name="car"/> car
            <Icon name="child"/> child
            <Icon name="close"/> close
            <Icon name="check"/> check
            <Icon name="clock-o"/> clock-o<br/>
            <Icon name="bullhorn"/> bullhorn
            <br/>
            <br/>
            不同颜色Badge
            <br/>
            <Badge theme="pink">1</Badge>  <Badge theme="orange">2</Badge>  <Badge theme="lightblue">3</Badge>  <Badge theme="red">4</Badge>`
### 列表 List
#### List 
- 普通List
			`<List>
		  	<ListItem
		  	  iconName="user-circle-o"
		  	/>
		  	<ListItem
              iconName="key"
		  	/>
		  	<ListItem
              iconName="calendar-minus-o"
		  	/>
		  </List>`

- 帶href 和 Icon 的List
			`<List>
		  	<ListItem
		  	  iconName="hand-pointer-o"
		  	  title= "按钮"
		  	  after= "文件"
		  	  href='javascript:;'
		  	/>
		  	<ListItem
              iconName="bullhorn"
              title= "消息"
		  	  after= {<Badge theme="red">4</Badge>}
		  	/>
		  	<ListItem
              iconName="subway"
		  	/>
		  </List>`

- 多行組合
			`<List>
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
		  </List>`
### 導航 NavBar
- NavBar
			`	  let left=[{text:<span>Back</span>,iconName: 'angle-left',onClick: this.handleExample}],

			<NavBar
    	  	left={left}
    	  	title= "NavBar"
    	  	right={[{}]}
    	  />`