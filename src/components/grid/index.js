/*
* @Author: yzqing
* @Date:   2017-08-12 13:25:08
* @Last Modified by:   yzqing
* @Last Modified time: 2017-08-15 15:37:04
*/

import React, { propTypes } from 'react';
import Clo from './Grid';
import Row from './Row';

module.exports = class extends React.Component {

  render() {
    const style = {

    };
    return (
    	<div className="row-clo">
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
