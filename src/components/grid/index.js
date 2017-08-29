/*
* @Author: yzqing
* @Date:   2017-08-12 13:25:08
* @Last Modified by:   yuanziqing
* @Last Modified time: 2017-08-29 11:50:36
*/

import React, { propTypes } from 'react';
import Col from './Grid';
import Row from './Row';
import NavBarView from '../utils/NavBarView'
module.exports = class extends React.Component {

  render() {
    const style = {

    };
    return (
    	<div className="row-col">
			<NavBarView 
			  name="Grid"
			/>    
			<br/>	
    	    <Row> 布局Row Col  gutter</Row>
			<Row>
			  <Col size={50}>size50</Col>
			  <Col size={50}>size50</Col>
			</Row>

			<Row style={{height:'.2rem'}}/>

			<Row>
			  <Col size={33}>size33</Col>
			  <Col size={33}>size33</Col>
			  <Col size={33}>size33</Col>
			</Row>

			<Row style={{height:'.2rem'}}/>
			
			<Row>
			  <Col size={25}>size25</Col>
			  <Col size={25}>size25</Col>
			  <Col size={25}>size25</Col>
			  <Col size={25}>size25</Col>
			</Row>
	    </div>
    )
  }
}
