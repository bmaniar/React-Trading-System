import React from 'react';
import ReactDOM from 'react-dom';

import {modal} from 'react-redux-modal' ;
import ReduxModal from 'react-redux-modal';


export default class myModalComopnent extends React.Component {
  constructor(props) { 
    super(props);
    // console.log('## MODAL DATA AND PROPS:', this.props);
  }

  removeThisModal() {
    this.props.removeModal();
  }
  createThisModal(){
      var x=ReactDOM.findDOMNode(this.refs.targetvalue).value;
      // console.log(x);

      this.props.randomize(x);
      this.props.removeModal();
      
  }
	
  render() {
    return (
      <div >
      <form className="form container-fluid">
      <div >
      <div className="pull-left">
      
        <div>
        <label for="inputTrade">Enter number of trades</label>
        </div>
        <div className="col-xs-12">
        <input className type="text" id="inputTrade" ref="targetvalue"></input>
        
      
        </div>
        </div>
        </div>
        
        <div className="col-xs-12 modal-buttonDiv">
        <button
          type="button"
          onClick={this.createThisModal.bind(this)} className=" modal-btn pull-right">
          Create
        </button>
        <button
          type="button"
          onClick={this.removeThisModal.bind(this)} className=" modal-btn pull-right">
          Cancel
        </button>
        </div>
        
        </form>
    </div>
    );
  }
}