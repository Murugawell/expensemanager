import React, { Component } from 'react';

import {Doughnut} from 'react-chartjs-2';

import './styles/piechart.css'
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


class PieChart extends Component {
    state = {
        
          }

    render() {
        return (<div className="container">
            <Doughnut data={data} />
        </div>);
    }
}

export default PieChart;