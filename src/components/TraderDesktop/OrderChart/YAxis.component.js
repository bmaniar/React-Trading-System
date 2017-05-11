import React from 'react';
var Yaxis = require('react-d3-core').Yaxis; 
export default class YAxisComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var chartData = this.props.orders;
        var chartSeries = [{
            "field": "quantity",
            "name": "Executed",
            "color": "#ff8000"
      }]

  
  var width = 500,
    // setting your svg height
    height = 300,
    // setting your margins of your svg
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    // your y Axis accessor
    y = function(d) {
        console.log(d);
      return d.quantity;
    },
    // y=[10,20,23,33,55],
    // set your y domain
    yDomain = d3.extent(chartData, function(d){console.log(d); return y(d); }),
    // set your y range
    yRange = [(height - margins.top - margins.bottom), 0];
    console.log(yRange,'abc');
    // your scale type 'linear', 'ordinal', 'time'... etc.
   var yScale = 'ordinal',
    // set your label name
    yLabel = "quantity",
    yLabelPosition = 'right',
    yOrient = "right",
    yTickFormat= d3.format(""),
    yTicks = [10,'.2s'],
    yTickOrient = "left";
    console.log(y,'ans')
        return(
         <svg width={width} height={height}>  
      <Yaxis
            width= {width}
        // height= {height}
        margins= {margins}
        y= {y}
        //  yDomain= {yDomain}
        //yRange = {yRange}
        chartSeries={chartSeries}
        // yScale= {yScale}
        // yLabel= {yLabel}
        // yLabelPosition= {yLabelPosition}
         yOrient= {yOrient}
     yTicks={yTicks}
        // yTickFormat={yTickFormat}
        // yTickOrient= {yTickOrient}
      />
       </svg>
        // yTickOrient= {yTickOrient}
     
  
        ); 
    }
}
