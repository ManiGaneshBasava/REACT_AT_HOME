import React, { Component } from 'react'

export default class Code2 extends Component {
    constructor(props){
        super(props)
        this.state={count:0}
    }

    increment =()=>{
        this.setState(
            {count:this.state.count+1}
        )
        console.log('hello');
    }


  render() {
    return (
      <div>
          <h1>initially count is an {this.state.count}</h1>
          <button onClick={()=>this.increment()}>increment count</button>
      </div>
    )
  }
}
