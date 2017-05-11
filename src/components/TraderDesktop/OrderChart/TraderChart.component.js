import React from 'react';
import YAxisComponent from './YAxis.component';
var Legend = require('react-d3-core').Legend;

var Yaxis = require('react-d3-core').Yaxis;
var BarStackHorizontalChart = require('react-d3-basic').BarStackHorizontalChart;
import { WindowResizeListener } from 'react-window-resize-listener';

export default class TraderChartComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sizeChanged = this.sizeChanged.bind(this);
        this.width;
        this.showLegend
    }

    sizeChanged(windowSize) {
        console.log('Window height', windowSize.windowHeight);
        console.log('Window width', windowSize.windowWidth);
        // this.width = windowSize.windowWidth - 100;

        if (windowSize.windowWidth <= 768 ) {
            this.width = windowSize.windowWidth-10;
            this.showLegend = true;
        }
        else if(windowSize.windowWidth < 998){
            this.width = windowSize.windowWidth-150;
            if(windowSize.windowWidth <= 991)
                this.showLegend = true;
            else
                this.showLegend = false;
        }
        else {
            this.width = 840;
            this.showLegend = false;
        }
        console.log(this.width);
        this.setState({});
    }

    render() {
        // console.log(this.width, 'render');
        var orderData = [];
        var height = 50;
        if (this.props.orders) {

            this.props.orders.map((item, index) => {
                var id = item.id;
                var id = item.id;
                var qplaced = item.quantityPlaced - item.quantityExecuted;
                var quantityExecuted = (item.quantityExecuted / item.quantity);
                var quantityPlaced = (qplaced / item.quantity);
                var quantity = 1 - quantityExecuted - quantityPlaced;
                orderData.push({ id, quantityExecuted, quantityPlaced, quantity });
                height += 49;
            });

        } else if (!this.props.orders) {

        }


        var width = this.width;


        var y = function (d) {
            return d.id
        }
        var x = function (d) {
            return +d;
        }
        var chartSeries = [{
            "field": "quantityExecuted",
            "name": "Executed",
            "color": "rgba(0, 0, 0, 0.7)"
        },
        {
            "field": "quantityPlaced",
            "name": "Placed",
            "color": "rgba(175, 175, 175, 0.7)"
        },
        {
            "field": "quantity",
            "name": "quantity",
            "color": "rgba(255, 255, 255, 0.7)"
        },


        ],

            xLabel = "Order Execution Status",

            showXGrid = false,
            showYGrid = true,

            xTicks = [2, "%"],
            legendClassNames = "legendClass",
            legendClassName = "test-legend-class",
            
            legendPosition = 'left',
            legendOffset = 1000,
            yScale = "ordinal",
            yLabel = 'Order Id',
            margins = { top: 40, right: 50, bottom: 40, left: 50 },
            showYGrid = false,
            xOrient = 'top',
            xTickOrient = 'top',
            showLegend = this.showLegend,
            xTickFormat = d3.format("%")

        var quantity1 = [];

        var i = 0;
        for (let i = this.props.orders.length - 1; i >= 0; i--) {
            quantity1.push(
                <div className='quantityDiv'>{this.props.orders[i].quantity}</div>
            )
        }

        var divStyle = {
            marginLeft: -36
        }

    
        return (



            <div className="row chartDiv ">

                <div>
                    <WindowResizeListener onResize={this.sizeChanged} />
                </div>
                <h4 className="text-center chartDivTitle"><b>Order Execution Status</b></h4>
                <div className="col-xs-8 ">
                    <div className="col-xs-10 chart" style={divStyle}>

                        <BarStackHorizontalChart
                            showXGrid={showXGrid}
                            width={width}
                            xTicks={xTicks}
                            title='Order Execution Status'
                            data={orderData}
                            chartSeries={chartSeries}
                            height={height}
                            showYGrid={showYGrid}
                            showLegend={showLegend}
                            yScale={yScale}
                            yLabel={yLabel}
                            y={y}
                            x={x}
                            xTickFormat={xTickFormat}
                            showXGrid={true}
                            legendClassName={legendClassNames}
                            // xLabel={xLabel}
                            />


                    </div>


                </div>

                <div className="col-xs-offset-1 col-xs-2 col-sm-2 pull-left legendDiv visible-md visible-lg">
                    <Legend
                        width={100}
                        height={50}
                        margins={margins}
                        legendClassName={legendClassName}
                        legendPosition={legendPosition}
                        legendOffset={legendOffset}
                        chartSeries={chartSeries}
                        />
                </div>
            </div>
        );

    }
}