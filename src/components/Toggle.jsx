import React, { Component } from 'react'
import Switch from './Switch'

class Toggle extends Component {
  state = { on: false }

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )

  render () {
    return <Switch on={this.state.on} onClick={this.toggle} />
  }
}

const Usage = ({
  onToggle = (...args) => console.log('onToggle: ', ...args)
}) => {
  return <Toggle onToggle={onToggle} />
}

export default Usage
