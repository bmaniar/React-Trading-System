import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory,browserHistory } from 'react-router'
import cookie from 'react-cookie';
import * as firebase from 'firebase';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';


import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CircularProgress from 'material-ui/CircularProgress';

import {userUrl} from '../../configurations/url.config';

export class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            username:'',
            loginStatus:'Please Enter Your Credentials',
            loadingIcon: false
        }
        this.loginError;
        this.userLoginFunction = this.userLoginFunction.bind(this);

    }
    componentDidMount() {
        this.props.fetchUsersData(userUrl);
    }
    // componentWillMount() {
    //     injectTapEventPlugin();
    // }

    userLoginFunction() {
        console.log('login func',this);
        this.setState({
            loginStatus:'',
            loadingIcon:true
        })
        var name = ReactDOM.findDOMNode(this.refs.userSelect).value;
        name = this.state.username;
        var selected;
        for (let user of this.props.users) {
            if (user.name === name) {
                selected = user;
            }
        }

        name = this.state.username;
        var allSpaces = new RegExp(' ', 'g');
        
        var email = name.replace(allSpaces, '').toLowerCase().concat('@gmail.com');
        console.log(email);
        var password = this.refs.PasswordInput.getValue();
        console.log(password);
        //var password = name.replace(allSpaces, '').toLowerCase();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({loginStatus:'Authenticated'})
                cookie.save('Trader', selected, { path: '/' });
                this.props.loginUser(selected);
                hashHistory.push('/trader');
                var user = firebase.auth().currentUser;

            })
            .catch((error) => {
                console.log('Inside catch');
                var errorCode = error.code;
                var errorMessage = error.message;
                //this.loginError = errorMessage;
                console.log(errorMessage);
                this.setState({
                    loginStatus:'Error Logging You in. Please Re-enter',
                    loadingIcon:false
                })
            })
    }

    handleSelectChange(event, index, value){
        console.log(value)
            this.setState({
                username:value
            })
    }

    render() {
        
        var options= this.props.users.map((user)=> {
            //console.log(user);
            return <MenuItem value={user.name} primaryText={user.name} key={user.id} />

        });

        var status;
        if(this.state.loginStatus==="loading"){
            status = <div> <b className="text-success">Logging you in....</b></div>
        }

        else if(this.state.loginStatus==="error"){
            if(this.loginError.includes("The password is invalid"))
                status = <div> <b className="text-danger">Username or Password is Invalid</b> </div>
            else
                status = <div> <b className="text-danger">Error Logging you in</b> </div>
        }
        else{
            status = <div></div>
        }

        var styles={
            
            floatingLabelColor:{
                color:'#6a6f8c',
            },
            underlineStyle:{
                color:'rgba(255, 255, 255,0.7)',
                marginTop:"30px",
            },
            floatingLabelStyle:{
                color:'rgba(255, 255, 255,0.7)'
            },
            underlineFocusStyle:{
                borderColor: 'rgba(255, 255, 255,0.7)',
            },
            buttonStyle:{
                backgroundColor: '#41448e',
                width:'250px',
                height:'45px'
                
            }
        }
        var loadingIcon;
        if(this.state.loadingIcon===true){
        loadingIcon = <CircularProgress size={30} thickness={10} color={'#ffffff'} style={{marginTop:'2px'}} />;
        }
        else{
            loadingIcon = 'Sign In';
        }

        var style = {
            margin: 12,
        };

        return (

        <div className="login-wrap">
            <div className="login-html text-center" >
                <p className="text-center">{this.state.loginStatus} </p>
                <input id="tab-1" style={{}} type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab"></label>
		        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Log In</label>
		        <div className="login-form ">
			        <div className="loginField">
                    <div className="loginPasswordField" >
                        <div className="loginSelectField" >
					        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                                <SelectField
                                className="input text-center border"
                                floatingLabelText="Select Trader"
                                ref="userSelect"
                                floatingLabelStyle={{color:'rgba(255, 255, 255,0.7',fontSize:'20px',marginLeft:'-129px',marginTop:'-10px'}}
                                underlineFocusStyle={{color:'#41448e'}}
                                underlineStyle={{color:'#41448e'}}
                                value={this.state.username}
                                labelStyle={{marginLeft:'50px',color:'rgba(255, 255, 255,0.7'}}
                                autoWidth={true}
                                style={{}}
                                onChange={this.handleSelectChange.bind(this)}
                                >
                                    {options}
                                </SelectField>
                            </MuiThemeProvider>

				        </div>
				        <div className="group">
					        <TextField
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                                ref="PasswordInput"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                            />
				        </div>
                    </div>
				        <div className="group">
					        <input id="check" type="checkbox" className="check"  />
					        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				        </div>
				        
                        <div className="group ">
					        
                            <RaisedButton  onTouchTap={this.userLoginFunction} label={loadingIcon} className="RaisedButton" buttonStyle={styles.buttonStyle} />
                            
				        </div>
				        <div className="hr">
                        </div>
				        <div className="foot-lnk">
					        <a>Forgot Password?</a>
				        </div>
			        </div>
			    </div>
		    </div>
	    </div>

            
            
        );
    }
}





/*import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
import cookie from 'react-cookie';
import * as firebase from 'firebase';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';



export class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus : "",
            value: 1,
            username:'sdfs'
        }
        this.loginError;
        this.userLoginFunction = this.userLoginFunction.bind(this);

    }
    componentDidMount() {
        this.props.fetchUsersData('http://localhost:8080/users');
    }
    // componentWillMount() {
    //     injectTapEventPlugin();
    // }

    userLoginFunction() {
        console.log('login func',this);
        this.setState({loginStatus:'loading'})
        var name = ReactDOM.findDOMNode(this.refs.userSelect).value;
        name = this.state.username;
        var selected;
        for (let user of this.props.users) {
            if (user.name === name) {
                selected = user;
            }
        }

        name = this.state.username;
        var allSpaces = new RegExp(' ', 'g');
        
        var email = name.replace(allSpaces, '').toLowerCase().concat('@gmail.com');
        console.log(email);
        var password = name.replace(allSpaces, '').toLowerCase();
        console.log(password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Authenticated');
                cookie.save('Trader', selected, { path: '/' });
                this.props.loginUser(selected);
                browserHistory.push('/trader');

            })
            .catch((error) => {
                console.log('Inside catch');
                var errorCode = error.code;
                var errorMessage = error.message;
                //this.loginError = errorMessage;
                console.log(errorMessage);
            })
    }

    handleSelectChange(event, index, value){
        console.log(value)
            this.setState({
                username:value
            })
    }

    render() {
        
        var options= this.props.users.map((user)=> {
            //console.log(user);
            return <MenuItem value={user.name} primaryText={user.name} key={user.id} />

        });

        var status;
        if(this.state.loginStatus==="loading"){
            status = <div> <b className="text-success">Logging you in....</b></div>
        }

        else if(this.state.loginStatus==="error"){
            if(this.loginError.includes("The password is invalid"))
                status = <div> <b className="text-danger">Username or Password is Invalid</b> </div>
            else
                status = <div> <b className="text-danger">Error Logging you in</b> </div>
        }

        else{
            status = <div></div>
        }

        var styles={
            
            floatingLabelColor:{
                color:'#6a6f8c',
            },
            underlineStyle:{
                color:'rgba(255, 255, 255,0.7)',
                marginTop:"30px",
            },
            floatingLabelStyle:{
                color:'rgba(255, 255, 255,0.7)'
            },
            underlineFocusStyle:{
                borderColor: 'rgba(255, 255, 255,0.7)',
            }
        }
        return (

        <div className="login-wrap">
            <div className="login-html text-center" >
                <input id="tab-1" style={{}} type="radio" name="tab" className="sign-in" checked/><label htmlFor="tab-1" className="tab"></label>
		        <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Log In</label>
		        <div className="login-form">
			        <div className="">
                    <div >
                        <div className="" >
					        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                                <SelectField
                                className="input text-center border"
                                floatingLabelText="Select Trader"
                                floatingLabelFixed='true'
                                ref="userSelect"
                                floatingLabelStyle={{color:'rgba(255, 255, 255,0.7',fontSize:'20px',marginLeft:'-129px',marginTop:'-10px'}}
                                underlineFocusStyle={{color:'#41448e'}}
                                underlineStyle={{color:'#41448e'}}
                                value={this.state.username}
                                labelStyle={{marginLeft:'50px',color:'rgba(255, 255, 255,0.7'}}
                                autoWidth={true}
                                style={{}}
                                onChange={this.handleSelectChange.bind(this)}
                                >
                                    {options}
                                </SelectField>
                            </MuiThemeProvider>

				        </div>
				        <div className="group">
					        <TextField
                                hintText="Password Field"
                                floatingLabelText="Password"
                                type="password"
                                ref="PasswordInput"
                                floatingLabelStyle={styles.floatingLabelStyle}
                                underlineStyle={styles.underlineStyle}
                                underlineFocusStyle={styles.underlineFocusStyle}
                            />
				        </div>
                        </div>
				        <div className="group">
					        <input id="check" type="checkbox" className="check"  />
					        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				        </div>
				        <div className="group">
					        <input type="button" onClick={this.userLoginFunction} className="button" value="Sign In" />
				        </div>
				        <div className="hr">
                        </div>
				        <div className="foot-lnk">
					        <a>Forgot Password?</a>
				        </div>
			        </div>
			    </div>
		    </div>
	    </div>

            
            
        );
    }
}
*/
