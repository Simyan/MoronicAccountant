import React, { Component } from 'react';
import './AmountBox.css';

class AverageExpense extends React.Component{
    render(){
        
        const averageExpense = this.props.averageExpense;

        return(
            <div className="amountBox">
                <p className="header">Average</p>
                <h1 className="middle">{averageExpense}</h1>
                <p className="footer">Daily</p>
            </div>
        );

    }
}

export default AverageExpense; 