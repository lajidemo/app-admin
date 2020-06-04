import React, { Component } from 'react'
import * as Icon from '@ant-design/icons';

export default class NULLIcon extends Component {
  render() {
    console.log(this.props.style)
    return (
      React.createElement(
        Icon[this.props.iconName],
        {
          style: {...this.props.style}
        }
      )
    )
  }
}
