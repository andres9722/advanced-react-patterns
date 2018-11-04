import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'
import Toggle from './components/Toggle'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <img className='app__logo' src={logo} alt='logo' />
        <h1 className='app__title'>Advanced React Component Patterns</h1>
        <Toggle />
      </div>
    )
  }
}

export default App
