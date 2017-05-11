import React from 'react';
// import TraderHeaderComponent from '../TraderHeader/TraderHeader.component';
import TraderTaskbarComponent from '../TraderTaskbar/TraderTaskbar.component'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as colors from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
// import Moment from 'react-moment';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class TraderTableComponent extends React.Component {

    constructor(props) {
        super(props);
        this.dateFormat = this.dateFormat.bind(this);
        this.state={
            search:'',
            selectedFilter: 'All'
        }
    this.searchOrder=this.searchOrder.bind(this);
    this.handleSelectChange=this.handleSelectChange.bind(this);

}
    handleSelectChange(event, index, value){
        this.setState({
            selectedFilter: value
        })
    }
 searchOrder(event){
        this.setState({search:event.target.value});
    }
     dateFormat(input){
        var input2= input.replace('T',' ').replace('Z',).substring(0,19);
        return input2;
    }
    giveRowClass(a,b){
        if(a.status=="Executed"){
            return "Executed"
        }
        else if(a.status=="Placed"){
            return "Placed"
        }
        else if(a.status=="New"){
            return "New"
        }
    }

    render() {
        
    

        var orders = this.props.orders;
        // var map= new Map();
        // if(orders){
        //     orders.forEach((item)=> {
        //      map.set(item.id,{item.id, item.name})   
        //     });
        // }
          if(this.state.search)
         {
            orders=[];
            this.props.orders.map((item)=>{
                if(this.state.selectedFilter.toLowerCase()==='all'){
                    console.log()
                    if(item.status.slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.side.slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.creationTime.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.traderId.slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.symbol.slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.quantity.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.limitPrice.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.priority.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0
                    || item.id.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0)
                        orders.push(item);
                    }
                    else if(this.state.selectedFilter==='Order Id'){
                        
                        if(item.id.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Side'){
                        if(item.side.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Symbol'){
                        if(item.symbol.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Quantity'){
                        if(item.quantity.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Quantity Placed'){
                        if(item.quantityPlaced.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Quantity Executed'){
                        if(item.quantityExecuted.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Limit Price'){
                        if(item.limitPrice.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Priority'){
                        if(item.priority.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Status'){
                        if(item.status.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                    else if(this.state.selectedFilter==='Trader'){
                        if(item.traderId.toString().slice(0,this.state.search.length).toUpperCase().search(this.state.search.toUpperCase()) >=0){
                            orders.push(item);
                        }
                    }
                }
                
            )
        }
        var styleSearch={
            inputFieldStyle:{
                marginLeft:10,
                color:colors.blue50
            } ,
            floatingLabelFocusStyle:{color:colors.blue50},
            underlineFocusStyle:{borderColor: colors.blue50},
             filterStyle:{
                    //borderLeft :' 1px solid red',
                    
                width: 160
            }
        }
        return (

            <div className="traderTable">
                <div className="row col-xs-12">
                 <TextField className="searchTextFilter col-xs-7" hintText="search In Table" 
                 style={styleSearch.inputFieldStyle}  
                 floatingLabelFocusStyle={styleSearch.floatingLabelFocusStyle}
                  underlineFocusStyle={styleSearch.underlineFocusStyle} onChange={this.searchOrder} 
                  floatingLabelText="Search Orders"/>
                 <SelectField className="searchFilterTable col-xs-5"
                        floatingLabelText="Search Filter"
                        floatingLabelStyle={{ color: 'rgba(255, 255, 255,0.7' }}
                        onChange={this.handleSelectChange.bind(this)}
                        value={this.state.selectedFilter}
                        style={styleSearch.filterStyle}
                    >
                        <MenuItem value='All' primaryText='All' />
                        <MenuItem value='Order Id' primaryText='Order Id' />
                        <MenuItem value='Side' primaryText='Side' />
                        <MenuItem value='Symbol' primaryText='Symbol' />                        
                        <MenuItem value='Quantity' primaryText='Quantity' />
                        <MenuItem value='Quantity Placed' primaryText='Quantity Placed' />
                        <MenuItem value='Quantity Executed' primaryText='Quantity Executed' />                        
                        <MenuItem value='Limit Price' primaryText='Limit Price' />
                        <MenuItem value='Priority' primaryText='Priority' />
                        <MenuItem value='Status' primaryText='Status' />
                        <MenuItem value='Trader' primaryText='Trader' />
                    </SelectField>
                </div>
                <div className="visible-md visible-lg">


                <BootstrapTable  trClassName={this.giveRowClass.bind(this)} string className="table table-default" data={orders} striped={true} condensed pagination>
                    <TableHeaderColumn className="tableHeader" dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" width="200px" dataField="creationTime" dataFormat={this.dateFormat} dataAlign="center" dataSort={true}>Creation Time</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="side" dataAlign="center" >Side</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="symbol" dataAlign="center"> Symbol</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader " dataField="quantity" dataAlign="center" dataSort={true}>Quantity</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="quantityPlaced" dataAlign="center" dataSort={true}>Placed</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="quantityExecuted" dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="limitPrice" dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="priority" dataAlign="center" dataSort={true}>Priority</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="status" dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="traderId" dataAlign="center" dataSort={true}>Trader</TableHeaderColumn>
                </BootstrapTable>
                 </div>
                <div className="visible-xs">
            
                    <BootstrapTable trClassName={this.giveRowClass.bind(this)} className="table table-default"  data={orders} striped={true} condensed pagination>
                        <TableHeaderColumn className="tableHeader" dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn className="tableHeader" dataField="side" dataAlign="center" >Side</TableHeaderColumn>
                        <TableHeaderColumn className="tableHeader" dataField="symbol" dataAlign="center"> Symbol</TableHeaderColumn>
                        <TableHeaderColumn className="tableHeader " dataField="quantity" dataAlign="center" dataSort={true}>Quantity</TableHeaderColumn>
                        <TableHeaderColumn className="tableHeader" dataField="limitPrice" dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            
                <div className="visible-sm ">
            
                    <BootstrapTable trClassName={this.giveRowClass.bind(this)} className="table table-default"  data={orders} striped={true} condensed pagination>
                    <TableHeaderColumn className="tableHeader" dataField="id" isKey={true} dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="creationTime" dataAlign="center"  dataSort={true}>Creation Time</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="side" dataAlign="center" >Side</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="symbol" dataAlign="center"> Symbol</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader " dataField="quantity" dataAlign="center" dataSort={true}>Quantity</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="quantityPlaced" dataAlign="center" dataSort={true}>Placed</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="quantityExecuted" dataAlign="center" dataSort={true}>Executed</TableHeaderColumn>
                    <TableHeaderColumn className="tableHeader" dataField="limitPrice" dataAlign="center" dataSort={true}>Limit Price</TableHeaderColumn>

                    <TableHeaderColumn className="tableHeader" dataField="status" dataAlign="center" dataSort={true}>Status</TableHeaderColumn>
                   
                    </BootstrapTable>
                </div>

            </div>



        )
    }
}