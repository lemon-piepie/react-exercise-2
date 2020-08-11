import React, { Component } from 'react';
import imgURL from '../assets/shopping.jpg';
import './HeadPart.css';

class HeadPart extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="store">Store</h1>
        <img src={imgURL}></img>
        <p className="amount">1</p>
      </div>
    );
  }
}

export default HeadPart;
