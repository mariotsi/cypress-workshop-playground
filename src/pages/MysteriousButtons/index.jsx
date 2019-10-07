import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './style.scss';

export default class MysteriousButtons extends Component {
  state = { showOff: false, fixIssue: false }


  render() {
    const { showOff, fixIssue } = this.state;
    return <div className={`MysteriousButtons ${showOff ? 'showOff' : ''} ${fixIssue ? 'fixIssue' : ''}`}>
      <div className="ExerciseContainer">
       <div className="Input1Container containerx">
          <input id="Input1" variant="primary"></input>
          <div className="input1spotter">	<span>👈</span> #Input1</div>
        </div>
        <div className="Button1Container containerx">
          <div className="overlay"></div>
          <span>#Button1</span>
          <Button id="Button1" variant="primary">Primary</Button>
          
        </div>
      
      </div>
      <div className="ButtonContainer">
        <Button id="ShowOff" onClick={() => this.setState({ showOff: true })}>Show the trick</Button>&nbsp;
       {!!showOff && <Button id="FixIt"
          onClick={() => this.setState({ fixIssue: true })} variant="secondary">Fix the issue!</Button>}
      </div>
    </div>
  }
}