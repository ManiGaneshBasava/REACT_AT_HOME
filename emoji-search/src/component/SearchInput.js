import React, { PureComponent } from 'react'
import PropType from 'prop-types'

import "../component/SearchInput.css"

export default class SearchInput extends PureComponent {

    static propType = {
        textChange:PropType.func
    }

    handleChange=(event)=>{
        this.props.textChange(event)
    }

  render() {
    return (
      <div className='component-search-input'>
          <div>
              <input onChange={this.handleChange}/>
          </div>
      </div>
    )
  }
}
