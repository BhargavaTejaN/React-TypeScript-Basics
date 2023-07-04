import React, { Component } from 'react'

type MessageProps = {
    message: string;
}

type ConterState = {
    count : number
}

class Counter extends Component<MessageProps,ConterState> {

    state = {
        count : 0
    }

  render() {

    const {count} = this.state
    const {message} = this.props

    const handleClick = () : void => {
        this.setState((prevState) => ({
            count : prevState.count + 1
        }))
    }

    return (
      <div>
        <h3>Counter : {count}</h3>
        <h4>{message}</h4>
        <button onClick={handleClick} type="button">Increse</button>
      </div>
    )
  }
}

export default Counter