import React, { Component } from 'react'

export default class counter extends Component {

  render() {
    return (
      <div>
          <div>
              <div>
                  <span>
                  {this.formatCount()}
                  </span>
              </div>
              <div>
                  <button
                  className='btn btn-info m-2'
                  onClick={()=>this.props.onIncrement(this.props.counter)}
                  >Increment
                  <i className='fa fa-plus-circle' aria-hidden="true"/>
                  </button>
                  <button 
                    className='btn btn-info m-2'
                    onClick={()=>this.props.onDecrement(this.props.counter)}
                    disable={this.props.counter.value === 0?"disabled":""}
                  >Decrement
                      <i className='fa fa-minus-circle' aria-hidden="true"/>
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={()=>this.props.onDelete(this.props.counter.id)}
                  >Delete
                      <i className='fa fa-trash-o' aria-hidden="true"/>
                  </button>
              </div>
          </div>
      </div>
    )
  }

//   getBadgeClass=()=>{
//       let classes = "badge m-2 badge-"
//       classes+=this.props.counter.value === 0?"warning":"primary";
//       return classes

//   }

  formatCount=()=>{
      const {value} = this.props.counter;
      return value ===0?"Zero":value
  }
}
