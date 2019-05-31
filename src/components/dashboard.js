import React, { Component } from 'react';

import PieChart from './piechart';
import List from './list';
import './styles/dashboard.css';

class Dashboard extends Component {
    state = {
        chartData: undefined
    }
    componentDidMount() {
        fetch('./../../data/sampledata.json').then((res) => {
            return res.json()
        }).then((json) => {
            this.processData(json);
        })
    }

    processData(data) {
        const labels = [...new Set(data.map(element => element.cat))];
        let array = new Array(labels.length).fill(0);
        data.map((element) => {
            array[labels.indexOf(element.cat)] += element.amount;
            return element;
        })
        const backgroundColor = [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ];
        const hoverBackgroundColor = [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]

        const chartData = {
            labels,
            datasets: [
                {
                    data: array,
                    backgroundColor,
                    hoverBackgroundColor
                }

            ]

        }
        this.setState({
            chartData
        })
        // console.log(labels,array);

    }

    render() {
        return (<div className="dashboard-main">
            <div className="header">
                Expense Manager
            </div>
            <div className="dashboard-container">
                <div>
                    <PieChart data={this.state.chartData} />
                </div>
                <div className="list-container">
                    <List />
                </div>
            </div>
        </div>);
    }
}

export default Dashboard;