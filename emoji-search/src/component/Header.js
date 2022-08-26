import React, { PureComponent } from 'react'
import "./Header.css"

export class Header extends PureComponent {
  render() {
    return (
      <header className='component-header'>
          {/* <img
          src='http://cnd.jsdelivr.net/emojione/assets/png/1f638.png'
          width="32"
          height="32"
          alt=""
          /> */}
          Emoji Search
          {/* <img 
          src='http://cnd.jsdelivr.net/emojione/assets/png/1f638.png'
          width="32"
          height="32"
          alt=""
          /> */}
      </header>
    )
  }
}

export default Header