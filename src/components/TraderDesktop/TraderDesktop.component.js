
import React from 'react';
import TraderHeaderComponent from '../Common/TraderHeader/TraderHeader.component';
import TraderTaskbarComponent from './TraderTaskbar/TraderTaskbar.component';
import TraderTableComponent from './OrderTable/TraderTable.component';
import * as firebase from 'firebase';
import CircularProgress from 'material-ui/CircularProgress';

//import TraderTableComponent from './order_table/TraderTableComponent'
import cookie from 'react-cookie';
import {Link} from 'react-router';
import {orderUrl} from '../../configurations/url.config';

export default class TraderDesktopComponent extends React.Component {

    constructor(props) {
        super(props);
        this.isLoggedIn=false;
        this.notLoggedIn = false;
        this.userName;
    }
    
    componentWillMount(){
        this.props.fetchOrdersData(orderUrl,'get');
        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.isLoggedIn = true;
            this.setState({})
            console.log(user.displayName,'displayname');
            this.userName =  user.displayName;
        }
        else{
            this.isLoggedIn = false;
            this.notLoggedIn = true;
        }
        
        })
    }


    render() {
       // console.log(this.isLoggedIn)
        if (this.isLoggedIn) {
            // User is signed in.
            return (
                <div className="traderDesktop row">
                    <TraderHeaderComponent userName = {this.userName} {...this.props} />
                    <TraderTaskbarComponent {...this.props} />

                </div>


            )
        } 
        else {
            // No user is signed in.

            if(this.isLoggedIn===false  && this.notLoggedIn === false){
                return(
                <div>
                    <h1> <span className="text-danger">Waiting For Authentication Redirecting You ...</span>
                    <CircularProgress size={50} thickness={10} color={'#ffffff'} style={{marginTop:'2px'}} /></h1>
                    
                </div>
                )
            }
            else if(this.isLoggedIn===false  && this.notLoggedIn === true){
                return(
                    <div>
                    <h1> <span className="text-danger">You are not signed in!</span> <span className="text-success"> Please sign in </span></h1>
                    <Link to="/">
                    <button id="loginButton" className="btn">Login</button>
                    </Link>
                    </div>
                )
            }
            
        }
    }
    
}




/*import React from 'react';
import TraderHeaderComponent from './trader_header/TraderHeader.component';
import TraderTaskbarComponent from './trader_taskbar/TraderTaskbar.component';
import TraderTableComponent from './order_table/TraderTable.component';


//import TraderTableComponent from './order_table/TraderTableComponent'
import cookie from 'react-cookie';
import {Link} from 'react-router';

export default class TraderDesktopComponent extends React.Component {

    constructor(props) {
        super(props);       
    }

    componentDidMount(){
        this.props.fetchOrdersData('http://localhost:8080/orders','get');
    }



    render() {
        if(cookie.load('Trader')){

            return (
                <div className="traderDesktop row">
                    <TraderHeaderComponent {...this.props} />
                    <TraderTaskbarComponent {...this.props} />

                </div>


            )
        }

        else{
            return(
                <div>
                    <h1> <span className="text-danger">You are not signed in !</span> <span className="text-success"> Please sign in </span></h1>
                    <Link to="/">
                    <button id="loginButton" className="btn">Login</button>
                    </Link>
                </div>
            )
        }
    }
}*/