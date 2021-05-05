import React, { Component } from 'react';

class Gif extends Component {
  render () {
    const src = "https://media2.giphy.com/media/QTZi3cWodE9w7LcehY/200.gif?cid=ecf05e47gtlpa84wj5sm9laiag9rgd5tn1whhymi7r83dn1i&rid=200.gif";
    return (
        <img src={src} alt="" className="gif" />
      );
  }
}

export default Gif;
