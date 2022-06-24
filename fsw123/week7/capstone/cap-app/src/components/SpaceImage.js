import React, { Component } from 'react'
import './SpaceImage.css';

export class SpaceImage extends Component {
  render() {
    return (
      <div className='space-img'>
        <div className='heading'>
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default SpaceImage