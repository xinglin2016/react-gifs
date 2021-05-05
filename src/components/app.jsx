import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  render () {
    const gifs = [
      { id: "QTZi3cWodE9w7LcehY" },
      { id: "VhtuzduQ8QV6SLAYyf" },
      { id: "3o6nUSA4aoFMvfLAKQ" }
    ];
    return (
        <div>
          <div className="left-scene">
            <SearchBar />
            <div className="selected-gif">
              <Gif />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={gifs}/ >
          </div>
        </div>
      );
  }
}

export default App;
