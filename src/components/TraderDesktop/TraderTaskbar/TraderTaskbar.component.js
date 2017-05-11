import React from 'react';
import ReactDOM from 'react-dom';
import TraderTableComponent from '../OrderTable/TraderTable.component';
import TraderChartComponent from '../orderChart/TraderChart.component';
import Modal from './TraderModal.component';
import Websocket from 'react-websocket';
import cookie from 'react-cookie';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { modal } from 'react-redux-modal';
import ReduxModal from 'react-redux-modal';
import * as colors from 'material-ui/styles/colors';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import RefreshIndicator from 'material-ui/RefreshIndicator';
import {userUrl, orderUrl, instrumentUrl} from '../../../configurations/url.config'

export default class TraderTaskbarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            presentation: 0,
            open:false
        }
        this.refreshTrader = this.refreshTrader.bind(this);
        this.deleteAllTrader = this.deleteAllTrader.bind(this);
        this.randomize = this.randomize.bind(this);
        this.tableCalled = this.tableCalled.bind(this);
        this.chartCalled = this.chartCalled.bind(this);
        // this.handleData = this.handleData.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.createTrades = this.createTrades.bind(this);
        // console.log('Taskbar props - ' ,this.props.users);
    }

    componentDidMount() {
        this.props.fetchUsersData(userUrl);
        this.props.fetchInstrumentsData(instrumentUrl)
    }


    refreshTrader() {
        // console.log('refresh', this.props);
        
        this.props.fetchOrdersData(orderUrl, 'get');
        

    }

    deleteAllTrader() {
        // console.log('delete');
        this.props.fetchOrdersData(orderUrl, 'del');
        //this.setstate
        //   this.props.fetchOrdersData('http://localhost:8080/orders','get');
    }

    tableCalled() {
        this.setState({ presentation: 0 });
    }

    chartCalled() {
        this.setState({ presentation: 1 });

    }

    randomize(no) {
        console.log('Inside randomize',no);
        var instruments = this.props.instruments;
        var side = ['Buy', 'Sell'];
        var traders = this.props.users;
        // var len=0;
            NotificationManager.info(no + ' Trades Initiated ', 'Trade Status', 1500);
        
        for (let i = 0; i < no; i++) {
            var inindex = Math.floor(Math.random() * 30);
            var selectedInstrument = instruments[inindex];

            var sideindex = Math.floor(Math.random() * 2);
            var selectedSide = side[sideindex];

            //var traderindex = Math.floor(Math.random() * 30);
            //var selectedTraderId = traders[traderindex].id;
            var selectedTraderId = cookie.load('Trader').id

            var quantity = Math.floor(Math.random() * 100) + 1;

            var limitPrice = Math.floor(selectedInstrument.lastTrade);


            var data = {
                side: selectedSide,
                symbol: selectedInstrument.symbol,
                quantity: quantity,
                limitPrice: limitPrice,
                traderId: selectedTraderId
            }
          

            this.props.fetchOrdersData(orderUrl, 'post', data);
        }
    }
    // handleData(data) {
    //     if (data[0] == "4" && data[1] == "2") {

    //         data = JSON.parse(data.substring(2, ));
    //         this.props.pushNotification(data[0], data[1]);
            
    //     }
    //     //console.log(data);

    //     // let result = JSON.parse(data);
    //     //this.props.fetchOrdersData('http://localhost:8080/orders','get');
    // }

    handleOpen(){
        console.log('inside open')
        this.setState({open: true});
    };

    handleClose()  {
        this.setState({open: false});
    };

    createTrades(){
        var x = this.refs.TradeInput.getValue();
        this.randomize(x);
        this.handleClose();
    }

    render() {

        const actions = [
        <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose.bind(this)}
        />,
        <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.createTrades}
        />,
    ];

        var p;

        if (this.state.presentation === 0) {
            p = <TraderTableComponent {...this.props} />;
        }
        else if (this.state.presentation === 1) {
            p = <TraderChartComponent {...this.props} />;
        }
        else {
            p = <TraderTableComponent {...this.props} />;
        }
    
        return (

            <div >
                <Dialog
                    title="Create Trades"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Enter The No Of Trades < br />
                    <TextField
                    floatingLabelText="Enter No Of Trades"
                    width="100px"
                    fullWidth={true}
                    ref = "TradeInput"
                    />
                    <br />
                </Dialog>
            
                   
          
                    <div className="container-fluid ContainerForTable">
                   
                    <button onClick={this.handleOpen} className="traderTaskbarButton btn-xs btn-success" >Trade</button>
                    <button className="traderTaskbarButton btn-xs btn-danger" onClick={this.deleteAllTrader}>Delete All</button>
                    <button className="traderTaskbarButton btn-xs btn-primary" onClick={this.refreshTrader}>Refresh</button>
                 
                
                   
          
                    <span className="pull-right">
                        <button onClick={this.tableCalled} className="navButton-black btn-xs"><img  src={require('../../../resources/images/table.png')} alt="" /></button>
                        <button onClick={this.chartCalled} className="navButton-black btn-xs"><img src={require('../../../resources/images/chart.png')} alt="" /></button>
                    </span>
                {p}
                
                </div>
            </div>
        )
    }
}