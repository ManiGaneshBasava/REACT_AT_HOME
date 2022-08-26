import React, { Component } from 'react'


class Calculate extends Component{   
    render(){
        console.log(this.props.value);
        return(
            <button>{this.props.value}</button>     
        )
    }
}

class Count extends Component{
    renderSquare(i){
        return <Calculate value={i}/>
    }
}


class Code1 extends Component {

  render() {
    return (
      <div>
          <h1>hello my name is {this.props.name}</h1>
          <h1><ul>
              <li>maredumilli</li>
              <li>rjy</li>
              <li>hyd</li>

          </ul></h1>
          {this.renderSquare(10)}

            <Count/>
      </div>
    )
  }
}

export default  Code1
