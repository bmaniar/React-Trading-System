import React from 'react';
import ReactDOM from 'react-dom';

import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import * as colors from 'material-ui/styles/colors';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField';

export default class DrawerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            showMenuItems: [],
            showDates: [],
            selectedFilter: 'All'
        }
        this.searchInNotifications = this.searchInNotifications.bind(this);
    }



    searchInNotifications(e) {
        this.setState({
            isSearch: true
        })

        var x = this.refs.searchValue.getValue();
        var menuObject = this.props.menuObject;



        var y = [];
        var z = [];
        for (let mi of menuObject) {

            if (x !== '') {
                if (this.state.selectedFilter === 'All') {

                    if (mi.status === 'Placed') {
                        if ((mi.status.toLowerCase().indexOf(x) > -1) ||
                            (mi.completion.toLowerCase().indexOf(x) > -1) ||
                            (mi.orderId.toLowerCase().indexOf(x) > -1) ||
                            (mi.date.toLowerCase().indexOf(x) > -1) ||
                            (mi.quantityPlaced.toLowerCase().indexOf(x) > -1)) {

                            y.push(mi.n);
                            z.push(mi.date);
                        }
                    }
                    else {
                        if ((mi.status.toLowerCase().indexOf(x) > -1) ||
                            (mi.completion.toLowerCase().indexOf(x) > -1) ||
                            (mi.orderId.toLowerCase().indexOf(x) > -1) ||
                            (mi.date.toLowerCase().indexOf(x) > -1) ||
                            (mi.quantityExecuted.toLowerCase().indexOf(x) > -1)
                        ) {

                            y.push(mi.n);
                            z.push(mi.date);
                        }
                    }
                }
                else if (this.state.selectedFilter === 'Order Id') {
                    if (mi.orderId === x) {
                        y.push(mi.n);
                        z.push(mi.date);
                    }
                }
                else if (this.state.selectedFilter === 'Quantity') {
                    if (mi.status === 'Placed') {
                        if (mi.quantityPlaced === x) {
                            y.push(mi.n);
                            z.push(mi.date);
                        }
                    }
                    else {
                        if (mi.quantityExecuted === x) {
                            y.push(mi.n);
                            z.push(mi.date);
                        }
                    }
                }
                else if (this.state.selectedFilter === 'Status') {
                    console.log('Inside status search');
                    console.log(mi);
                    console.log('found',mi.status.toLowerCase(),x.toLowerCase());
                    if (mi.status.toLowerCase().indexOf(x.toLowerCase()) > -1) {
                        console.log('found',mi.status.toLowerCase(),x.toLowerCase());
                        y.push(mi.n);
                        z.push(mi.date);
                    }
                }

            }
            else{
                y.push(mi.n);
                z.push(mi.date);
            }
        }
    
        this.setState({
            showMenuItems: y,
            showDates: z
        });

    }

    handleSelectChange(event, index, value) {
        this.setState({
            selectedFilter: value
        })
    }

    render() {
        //console.log('props',this.props);
        var styleClose = {
            width: 325,
            backgroundColor: colors.red400
        }
        var styleCancel = {
            backgroundColor: 'rgba(255,255,255,0)'
        }

        var styles = {
            floatingLabelStyle: {
                marginLeft: '20px',
                color: 'rgba(255, 255, 255,0.7'
            },
            underlineStyle: {

            },
            filterStyle:{
                    //borderLeft :' 1px solid red',
                width: "45%" 
            }

        }

        //console.log(this.props.menuObject.length,'menuObjects');
        var allNotificationsdisplay = [];
        if (this.state.isSearch === false) {
            console.log('Inside false search');
            this.props.menuObject.map((item) => {
                var date = item.date;
                allNotificationsdisplay.push(<MenuItem><p style={{ color: "rgba(34, 247, 0, 0.86)" }}>{date} <br />{item.n}</p></MenuItem>);
            })
        }
        else {
            console.log('inside true search');
            this.state.showMenuItems.map((item, index) => {
                var date = this.state.showDates[index];
                allNotificationsdisplay.push(<MenuItem><p style={{ color: "rgba(34, 247, 0, 0.86)" }}>{date} <br />{item}</p></MenuItem>);
            })
        }
        //console.log(allNotificationsdisplay.length,'allNotificationsdisplay');
        allNotificationsdisplay = allNotificationsdisplay.reverse();
        //console.log(allNotificationsdisplay.length,'allNotificationsdisplayreverse');
        return (
            <Drawer className="drawer" docked={false} width={320} open={this.props.open} onRequestChange={this.props.handleClose}  >

                <MenuItem style={styleCancel} onClick={this.props.handleClose} className="pull-right "><span className="text-danger"> X</span></MenuItem>
                <MenuItem onClick={this.props.handleClose}></MenuItem>
                <div className="row">
                    <TextField
                        floatingLabelText="Search Notifications"
                        ref="searchValue"
                        onChange={this.searchInNotifications}
                        floatingLabelStyle={styles.floatingLabelStyle}
                        underlineFocusStyle={styles.underlineStyle}
                        style={{ width: "55%" }}
                        className="col-xs-8"
                    />
                    <SelectField className="col-xs-4"
                        floatingLabelText="Search Filter"
                        floatingLabelStyle={{ color: 'rgba(255, 255, 255,0.7' }}
                        onChange={this.handleSelectChange.bind(this)}
                        value={this.state.selectedFilter}
                        style={styles.filterStyle}
                    >
                        <MenuItem value='All' primaryText='All' />
                        <MenuItem value='Order Id' primaryText='Order Id' />
                        <MenuItem value='Status' primaryText='Status' />
                        <MenuItem value='Quantity' primaryText='Quantity' />
                    </SelectField>
                </div>
                {allNotificationsdisplay}
            </Drawer>
        )
    }
}