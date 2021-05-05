import React, { Component } from 'react';

class GifList extends Component {
  render () {
    this.props.gifs.map(gif => {
      return <Gif id={gif.id} />
    });
  }
}

export default GifList;
