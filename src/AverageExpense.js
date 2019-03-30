import React, { Component } from 'react';

class AverageExpense extends React.Component{
    render(){
        
        const averageExpense = this.props.averageExpense;

        return(
            <h1>Average Expense: {averageExpense}</h1>
        );

    }
}

export default AverageExpense;