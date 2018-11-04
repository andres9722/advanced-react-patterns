import React, { Component } from 'react'
import './Switch.scss'

class Switch extends Component {
  noop = () => {}

  render () {
    const { on, onClick } = this.props
    return (
      <div className='switch'>
        <input
          checked={on}
          onClick={onClick}
          onChange={this.noop}
          type='checkbox'
          name='toggle'
        />
        <label htmlFor='toggle'><i /></label>
        <span />
      </div>
    )
  }
}

export default Switch
