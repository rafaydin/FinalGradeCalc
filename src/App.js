import React, {Component} from 'react';
import Field from './Field.js'
import './App.css';

class App extends Component{
  state = {
    current: 0,
    cutoff: 0,
    weight: 0,
    needed: '',
  }

  handleChange = (event) => {
    let num = Number(event.target.value)
    let newNeeded = (num >= 0 && num <= 100) ? '' : 'Please Enter Values Between 0 and 100'
    this.setState({[event.target.name]: num, needed: newNeeded})
  }

  submitButton = () => {
    //calculations
    let weightP = this.state.weight/100;
    let current = this.state.current;
    let cutoff = this.state.cutoff;
    let rawResult = ((cutoff) - current*(1-weightP))/weightP;
    let result = 'Atleast a ' + rawResult.toFixed(2);
    if (rawResult > 100)
      result = 'a Miracle'
    if (!isNaN(this.state.needed))
      this.setState({needed: 'You Need ' + result + ' on the Final to Get an A Bro'})
  }

  render(){
    return (
      <div className="App">
        <h1>Final Score Grade Calculator by Rafay Din</h1>
        <br/> <br/> 
        <Field name = 'current' handleChange = {this.handleChange}>Current Grade </Field> <br/> <br/>
        <Field name = 'cutoff' handleChange = {this.handleChange}>Cutoff to Get an A </Field> <br/> <br/>
        <Field name = 'weight' handleChange = {this.handleChange}>Percent Weight of Final </Field> <br/> <br/>
        <label>{this.state.needed}</label> <br/> <br/>
        <button onClick = {this.submitButton}>Submit</button> 
      </div>
    );
  }
}

export default App;
