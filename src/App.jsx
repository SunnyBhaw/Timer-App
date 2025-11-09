import React from 'react'
import './App.css'

class App extends React.Component {
  state = {
    minutes: 0,
    seconds: 0,
    isRunning: false,
  }
  incrementOne = () => {
    if(this.state.seconds === 59){
      this.setState({minutes: this.state.minutes + 1, seconds: 0})
    }
    else{
      this.setState({seconds: this.state.seconds + 1})
    }
  }
  decrementOne = () => {
    if(this.state.seconds === 0 && this.state.minutes > 0){
      this.setState({minutes: this.state.minutes - 1, seconds: 59})
    }
    else if(this.state.seconds === 0 && this.state.minutes === 0){
      this.setState({minutes: 0, seconds: 0})
    }
    else{
      this.setState({seconds: this.state.seconds - 1})
    }
  }
  incrementTen = () => {
    if(this.state.seconds <=49){
      this.setState({seconds: this.state.seconds + 10})
    }
    else{
      this.setState({minutes: this.state.minutes + 1, seconds: (this.state.seconds + 10) - 60})
    }
  }
  decrementTen = () => {
    if(this.state.seconds >=11){
      this.setState({seconds: this.state.seconds - 10})
    }
    else if(this.state.seconds <= 10 && this.state.minutes > 0){
      this.setState({minutes: this.state.minutes - 1, seconds: 60 - (10 - this.state.seconds)})
    }
    else{
      this.setState({minutes: 0, seconds: 0})
    }
  }
  start = () => {
    if(!this.state.isRunning){
      this.setState({isRunning: true})
      this.timer = setInterval(() => {
        if(this.state.seconds === 0 && this.state.minutes === 0){
          clearInterval(this.timer)
          this.setState({isRunning: false})
          alert("Time's up!")
        }
        else{
          this.decrementOne()
        }
      }, 1000)
    }
  }
  stop = () => {
    clearInterval(this.timer)
    this.setState({isRunning: false})
  }
  reset = () => {
    this.setState({minutes: 0, seconds: 0})
  }


  render() {
    return (
      <div className="App">
        <div className='timer_container'>
          <h1>Simple Timer App</h1>
          <div className='timer_display'>
            <button className='btn' onClick={this.decrementTen}>-10</button>
            <button className='btn' onClick={this.decrementOne}>-1</button>
            <span>{this.state.minutes}</span>
            <span>:</span>
            <span>{this.state.seconds}</span>
            <button className='btn' onClick={this.incrementOne}>+1</button>
            <button className='btn' onClick={this.incrementTen}>+10</button>
          </div>
          <div div className='timer_controls'>
            <button className='btn' onClick={this.start}>Start</button>
            <button className='btn' onClick={this.stop}>Stop</button>
            <button className='btn' onClick={this.reset}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
