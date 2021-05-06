import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "3o6nUSA4aoFMvfLAKQ"
    }
    this.search("homer thinking");
  }

  search = (query) => {
    //TODO: API call
    giphy('NfjUi2c2YRqhHyVMk948ZJDcIAjmjSrL').search({
      q: query,
      rating: 'g'
    }, function (error, result) {
      console.log(result);
    });
  }
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
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
    );
  }
}

export default App;
