import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory,browserHistory } from 'react-router';
import cookie from 'react-cookie';
import * as firebase from 'firebase';
import Websocket from 'react-websocket';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import MenuItem from 'material-ui/MenuItem';
import * as colors from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import Drawer from './Drawer.component';
import { websocketUrl } from '../../../configurations/url.config';


export default class TraderHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
        this.state = {
            open: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleData = this.handleData.bind(this);
        this.menuItems = [];
        this.menuObject = [];
        this.allNotifications = [];
        this.notificationBadge = 0;
        this.handlePlacedData = this.handlePlacedData.bind(this);
        this.handleExecutedData = this.handleExecutedData.bind(this);
        this.handleTable = this.handleTable.bind(this)


    }


    handlePlacedData(dataPlaced) {

        // var date= new Date();
        // var d ;
        //     d= dataPlaced;
        //      if(d.quantityPlaced>=8 || d.status=='Placed'){


        //     d.time = date.toLocaleString().toString();
        //     d.completion = '';
        //     d.s = 'Placed';
        //     d.quantityPlaced = dataPlaced.quantityPlaced.toString();
        //     d.quantityExecuted = '';
        //     d.orderId = dataPlaced.orderId.toString();
        //     var str=(<p style={{color:"rgba(34, 247, 0, 0.86)"}}> {date.toLocaleString()} <br/> Quantity {dataPlaced.quantityPlaced} of Order Id {dataPlaced.orderId} is Placed </p>);
        //     d.MenuItem = <MenuItem>{str}</MenuItem>

        //     this.menuItems.push(<MenuItem >{str}</MenuItem>);
        //     this.allNotifications.push(<MenuItem >{str}</MenuItem>);

        //     this.menuObject.push(d);
        //     if(dataPlaced.status=='Placed'){


        //         var str2 = (<p style={{color:"rgba(34, 247, 0, 0.86)"}}>{date.toLocaleString()} <br/> Order Id {dataPlaced.orderId} is fully {dataPlaced.status}</p>);

        //         this.menuItems.push(<MenuItem >{str2}</MenuItem>)
        //         this.allNotifications.push(<MenuItem >{str2}</MenuItem>);
        //         d.MenuItem = <MenuItem>{str2}</MenuItem>
        //         d.completion = 'fully';
        //         this.menuObject.push(d);
        //     }
        //      }
        //console.log(dataPlaced);
        var date = new Date().toLocaleString();
        if (dataPlaced.status.toLowerCase() === 'new') {
            var n = `Quantity ${dataPlaced.quantityPlaced} of OrderId ${dataPlaced.orderId}, Placed`;
            //var nf = <MenuItem>{n}</MenuItem> ;
            this.allNotifications.push(n);
            this.menuItems.push(n);

            var d = {
                orderId: dataPlaced.orderId.toString(),
                status: 'Placed',
                quantityPlaced: dataPlaced.quantityPlaced.toString(),
                date,
                completion: '',
                n
            }
            this.menuObject.push(d);
        }
        else {
            var n = `OrderId ${dataPlaced.orderId}, fully Placed`;
            //var nf = <MenuItem>{n}</MenuItem> ;
            this.allNotifications.push(n);
            this.menuItems.push(n);

            var d = {
                orderId: dataPlaced.orderId.toString(),
                status: 'Placed',
                quantityPlaced: dataPlaced.quantityPlaced.toString(),
                date,
                completion: 'fully',
                n
            }
            this.menuObject.push(d);
        }

    }
    handleExecutedData(dataExecuted) {
        // var date= new Date();

        //  var d ;
        //         d= dataExecuted;
        //  //console.log(d,' inside handle execution');
        //         if(d.quantityExecuted>=8 || d.status=='Executed'){

        //         d.time = date.toLocaleString().toString();
        //         d.completion = '';
        //         d.s = 'Executed';
        //         d.quantityExecuted = dataExecuted.quantityExecuted.toString();
        //         d.quantityPlaced = '';
        //         d.orderId = dataExecuted.orderId.toString();

        //         var str=(<p style={{color:"rgba(34, 247, 0, 0.86)"}}> {date.toLocaleString()} <br/> Quantity {dataExecuted.quantityExecuted} of Order Id {dataExecuted.orderId} is Executed </p>);

        //         this.menuItems.push(<MenuItem >{str}</MenuItem>);
        //         this.allNotifications.push(<MenuItem >{str}</MenuItem>);
        //         d.MenuItem = <MenuItem >{str}</MenuItem>;

        //         this.menuObject.push(d);
        //         if(dataExecuted.status=='Executed'){
        //             NotificationManager.success('Order Id '+dataExecuted.orderId +' is fully ' + dataExecuted.status,'Trade Status',1500);
        //             var str2 = (<p style={{color:"rgba(34, 247, 0, 0.86)"}}> {date.toLocaleString()} <br/> Order Id {dataExecuted.orderId} is fully {dataExecuted.status} </p>);

        //             this.menuItems.push(<MenuItem >{str2}</MenuItem>)
        //             this.allNotifications.push(<MenuItem >{str2}</MenuItem>);
        //             d.MenuItem = <MenuItem >{str2}</MenuItem>;
        //             d.completion = 'fully';
        //             this.menuObject.push(d);
        //          }
        //         }
        // console.log(dataExecuted);
        var date = new Date().toLocaleString();
        if (dataExecuted.status.toLowerCase() === 'placed' || dataExecuted.status.toLowerCase() === 'new') {
            var n = `Quantity ${dataExecuted.quantityExecuted} of OrderId ${dataExecuted.orderId}, Executed`;
            //var nf = <MenuItem>{n}</MenuItem> ;
            this.allNotifications.push(n);
            this.menuItems.push(n);

            var d = {
                orderId: dataExecuted.orderId.toString(),
                status: 'Executed',
                quantityExecuted: dataExecuted.quantityExecuted.toString(),
                date,
                completion: '',
                n
            }
            this.menuObject.push(d);
        }
        else {
            // console.log('fully pushed');
            var n = `OrderId ${dataExecuted.orderId} , fully Executed`;
            //var nf = <MenuItem>{n}</MenuItem> ;
            this.allNotifications.push(n);
            this.menuItems.push(n);

            var d = {
                orderId: dataExecuted.orderId.toString(),
                status: 'Executed',
                quantityExecuted: dataExecuted.quantityExecuted.toString(),
                date,
                completion: 'fully',
                n
            }
            this.menuObject.push(d);
            NotificationManager.success('Order Id '+dataExecuted.orderId +', executed','Trade Status',1500);
        }
    }


    handleTable(data) {
        this.props.pushNotification(data[0], data[1]);
    }

    handleData(data) {
        if (data[0] == "4" && data[1] == "2") {
            data = JSON.parse(data.substring(2, ));

            // this.props.pushNotification(data[0], data[1]);
            this.handleTable(data)
            if (data[0] == 'allOrdersDeletedEvent') {
                NotificationManager.error('All Items deleted', 'Trade Status', 1500);
            }
            if (data[0] == 'placementCreatedEvent') {

                this.handlePlacedData(data[1]);
            }

            if (data[0] == 'executionCreatedEvent') {
                this.handleExecutedData(data[1]);
            }
        }

    }


    handleOpen() {
        this.setState({ open: !this.state.open });

    }

    handleClose() {

        this.setState({ open: false });
        this.notificationBadge = 0;


        this.menuItems = [];
    }

    signOut() {
        firebase.auth().signOut()
            .then(() => {
                // Sign-out successful.
                cookie.remove('Trader', { path: '/' });
                console.log('signOut successful');
                hashHistory.push('/');
            }).catch((error) => {
                // An error happened.
                alert('signOut unsuccessful due to ' + error);
            });

    }

    render() {
        var Trader = cookie.load('Trader');
        var styleBadge = {
            top: -25,
            right: 0,

        }
        var styleNotification = {
            margin: -6,
            marginTop: -10,
            height: 20,
            width: 25,
            padding: 8
        }
        var styleClose = {
            width: 325,
            backgroundColor: colors.red400
        }
        var styleCancel = {

            backgroundColor: 'rgba(255,255,255,0)'
        }

        this.notificationBadge = this.menuItems.length;

        return (
            <div className="headerTrader col-xs-12">
                <header>
                    <nav className="nav nav-pills">
                        <h4 id="headerRow" className="col-xs-12 "><b className="headerTitle">Trader Desktop</b>
                            <span className="pull-right " id="signOut"><a href="" onClick={this.signOut}>Sign Out </a>
                            </span>
                            <span className="pull-right" > <b id="headerUserName">{firebase.auth().currentUser.displayName}</b>
                            </span>
                            <span className="pull-right notificationBadge" >
                                <Badge style={styleBadge}
                                    badgeContent={this.notificationBadge}
                                    secondary={true}
                                    badgeStyle={{ top: 15, right: 2 }}
                                >
                                    <IconButton tooltip="Notifications" style={styleNotification} onClick={this.handleOpen}>
                                        <NotificationsIcon />
                                    </IconButton>
                                </Badge>
                            </span>

                        </h4>
                    </nav>

                    <Drawer open={this.state.open} allNotifications={this.allNotifications} handleClose={this.handleClose} menuObject={this.menuObject}></Drawer>

                    <Websocket url={websocketUrl}
                        onMessage={this.handleData} reconnect={true} />
                    <NotificationContainer />

                </header>
            </div>
        )
    }
}