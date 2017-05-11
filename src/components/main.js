import React from 'react';

import * as firebase from 'firebase';
import config from '../configurations/firebase';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default class MainComponent extends React.Component {

        componentWillMount(){
            firebase.initializeApp(config);
            injectTapEventPlugin();
        }

        render() {
            // console.log(this.props,'asd');
            return ( 
                <div className ="container-fluid " >
				
                {
                    React.cloneElement(this.props.children, this.props)
                } 
                </div>)
            }


        }