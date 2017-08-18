/*
* @Author: yzqing
* @Date:   2017-08-12 13:25:08
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-18 22:50:40
*/

import React, { propTypes } from 'react';
import Clo from './Grid';
import Row from './Row';
import NavBarView from '../utils/NavBarView'
module.exports = class extends React.Component {

  render() {
    const style = {

    };
    return (
    	<div className="row-clo">
			<NavBarView 
			  name="Grid"
			/>    
			<br/>	
    	    <Row> 布局Row Clo  gutter</Row>
			<Row>
			  <Clo size={50}>size50</Clo>
			  <Clo size={50}>size50</Clo>
			</Row>

			<Row style={{height:'.2rem'}}/>

			<Row>
			  <Clo size={33}>size33</Clo>
			  <Clo size={33}>size33</Clo>
			  <Clo size={33}>size33</Clo>
			</Row>

			<Row style={{height:'.2rem'}}/>
			
			<Row>
			  <Clo size={25}>size25</Clo>
			  <Clo size={25}>size25</Clo>
			  <Clo size={25}>size25</Clo>
			  <Clo size={25}>size25</Clo>
			</Row>
	    </div>
    )
  }
}
