import './App.css';
import React from 'react';
import calculte from './logic/calculate';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';

class App extends React.Component {

  state={
    total:null,
    next:null,
    operation:null
  }

  handleClick = buttonName =>{
      this.setState(calculte(this.state,buttonName))
  }

  render(){
  return (
    <div className="component-App">
      <Display value={this.state.next || this.state.total ||"0"}/>
      <ButtonPanel clickHandler={this.handleClick}/>
    </div>
  );
}
}

export default App;
