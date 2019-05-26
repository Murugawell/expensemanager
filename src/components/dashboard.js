import React, { Component } from 'react';

import PieChart from './piechart';
import List from './list';

class Dashboard extends Component {
    state = {}

    componentDidMount() {
        fetch('./../../data/data.json').then(res => {
            return res.json()
        }).then((res) => {
            console.log(res.json())
        })
    }
    render() {
        return (<div>
            <PieChart />
            <List />
        </div>);
    }
}

export default Dashboard;