import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AverageExpense from './AverageExpense';
import ChartComponent from './ChartComponent';

class Appfoo extends Component {

  render() {
    return (
      <div className="Container">

        <div className="statsBarContainer">
        <AverageExpense averageExpense = {50} />
          
        </div>
        <div className="purchaseDetailsContainer">
        <AverageExpense averageExpense = {50} />
        </div>
        <div className="graphContainer">
        <ChartComponent/>
        </div>


      </div>
      // <div>
      //   <AverageExpense averageExpense = {50} />
      //   <AverageExpense averageExpense = {90} />
      //   <ChartComponent/>
      // </div>
    )
  }








  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </div>
  //   );
  // }
}

export default Appfoo;
