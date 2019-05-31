import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

import './styles/piechart.css'


const option = {
	responsive: true,
	tooltips: {
		mode: 'label'
	}
};

const legend = {
	display: true,
	position: 'bottom',
	fullWidth: true,
	reverse: false,
	labels: {
		fontColor: 'rgb(255, 99, 132)'
	}
};


class PieChart extends Component {
	state = {

	}

	render() {
		console.log(this.props)
		if (this.props.data) {

			return (<div className="main">
				<div className="container">
					<Doughnut data={this.props.data} legend={legend} option={option} />
				</div>
			</div>);
		}
		else {
			return (
				<div>
					No Data
				</div>
			)
		}

	}
}

export default PieChart;