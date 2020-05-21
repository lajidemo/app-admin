import React, { Component } from 'react'
import './style.css'

export default class Home extends Component {
  state = {
    mockObj: {}
  }
  render() {
    return (
      <div>
        <ul>
          {/* <li>{this.state.mockObj.nickname}</li>
          <li>{this.state.mockObj.mtime}</li>
          <li>{this.state.mockObj.score}</li>
          <li>{this.state.mockObj.rank}</li>
          <li>{this.state.mockObj.stars}</li> */}
        </ul>
      </div>
    )
  }
}
