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
    };
    this.search = this.search.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  // search = (query) => {
  //   // TODO: API call
  //   giphy('NfjUi2c2YRqhHyVMk948ZJDcIAjmjSrL').search({
  //     q: query,
  //     rating: 'g',
  //     limit: 10
  //   }, (error, result) => {
  //     this.setState({
  //       gifs: result.data
  //     });
  //   });
  // }

  search(query) {
    const giphEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=NfjUi2c2YRqhHyVMk948ZJDcIAjmjSrL&q=${query}&limit=10`
    fetch(giphEndpoint).then(response => response.json()).then((data) => {
      const gifs = data.data.map(giph => giph.id)
      this.setState({
        gifs: gifs
      })
    })
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
        <div>
          <div className="left-scene">
            <SearchBar searchFunction={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
    );
  }
}

export default App;
