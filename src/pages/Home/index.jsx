import React, { Component } from 'react'
import axios from 'axios'
import common from '../../api/common'
import './style.css'

export default class Home extends Component {
  state = {
    mockObj: {}
  }
  componentDidMount() {
    axios.get(common.test)
      .then(response => {
        console.log('response==',response)
        this.setState({
          mockObj: response.data.data
        })
      })
      .catch(error => {
        
      })
  }
  render() {
    return (
      <div>
        <ul>
          <li>{this.state.mockObj.nickname}</li>
          <li>{this.state.mockObj.mtime}</li>
          <li>{this.state.mockObj.score}</li>
          <li>{this.state.mockObj.rank}</li>
          <li>{this.state.mockObj.stars}</li>
        </ul>
      </div>
    )
  }
}
