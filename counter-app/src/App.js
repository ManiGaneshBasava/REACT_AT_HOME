import './App.css';
import React, { Component } from 'react';
import NavBar from './component/NavBar';
import Counters from './component/Counters';

class App extends Component {

  state={
    counters:[
      {id:1,value:0},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:0}
    ]
  }

  handleIncrement=(counter)=>{
    const counters = [...this.state.counters]
    const index =counters.indexOf(counter)
    // counters[index] ={...counters[index]}
    counters[index].value++
    this.setState({counters})
  }



  handleDecrement=(counter)=>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    // counters[index]={...counters[index]}
    counters[index].value--
    this.setState({counters})
  }


  handelReset=()=>{
    const counters = this.state.counters.map((c)=>{
      c.value=0;
      return c;
    })
    this.setState({counters})
  }


  handleDelete=(counterId)=>{
    const counters = this.state.counters.filter((c)=>c.id!==counterId)
    this.setState({counters})
  }

  
  handleRestart=()=>{
    window.location.reload()
  }

  render() {
    return (
      <div className="App">
        <div className="main__wrap">
            <main className="container">
              <div className="card__box">
                <NavBar
                totalCounters={
                  this.state.counters.filter((c)=>c.value>0).length
                }
                />
                  <Counters
                  counters={this.state.counters}
                  onReset={this.handelReset}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                  onRestart={this.handleRestart}
                  >
                  </Counters>
              </div>
            </main>
        </div>
      </div>
    );
  }
}

export default App;
