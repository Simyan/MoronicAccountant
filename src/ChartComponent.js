
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
import './ChartComponent.css';



export default class ChartComponent extends Component{
    
    
    
    constructor(props){
        super(props);

        this.state = {
            data : {
                
                datasets: [
                    {
                        label: "Potatoes",
                        backgroundColor: "rgba(0, 0, 255, 0.75)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ],
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']            
            },

            options: {
              responsive: true
            }


        }
    }

    render(){
        return(
            <div>
                <div id="chart1">
                    <Line id="chart-inner"
                        //{console.log("This is the data content: " + this.state.data.labels)}
                                               
                        data = {this.state.data}
                    />
                </div>
            </div>
        );
    }
   
    // function makeChart() {
        
    // }
}
//export default ChartComponent; 