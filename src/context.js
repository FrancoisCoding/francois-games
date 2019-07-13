import React, { Component } from "react";
import axios from "axios";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  // State which is going to be passed to the rest of components
  state = {
    products: [],
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    favorites: [],
    games: [],
    count: null
  };
  componentDidMount() {
    this.getGames();
  }

  // Retrieves games from rawg api
  getGames = (page = 1) => {
    axios
      .get(`https://api.rawg.io/api/games?page=${page}`, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        // response.data.results.map(result => this.state.games.push(result));
        // axios
        //   .post("https://learnlocker.dev/api/gamestop", {
        //     game: response.data.results[0].name
        //   })
        //   .then(res => console.log(res));
        this.setState({
          games: response.data.results,
          count: response.data.count
        });
      })
      .catch(e => {
        console.log("error", e);
      });
  };

  // Retrieves games id
  getItem = id => {
    const product = this.state.games.find(item => {
      return item.id === id;
    });
    return product;
  };

  // Adds games to deatailProduct from passed in id
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  // Adds game to favorite
  addFavorite = gameInfo => {
    console.log("gameInfo", gameInfo);
    this.setState(
      () => ({ favorites: [...this.state.favorites, gameInfo] }),
      () => console.log("add favorite", this.state)
    );
  };

  // Removes game from favorite
  removeFavorite = id => {
    this.setState(() => ({
      favorites: this.state.favorites.filter(game => game.id !== id)
    }));
  };

  // Creates page system taking the selected page and displaying 20 games per page
  handlePaginate = (data = { selected: 1 }) => {
    axios
      .get(`https://api.rawg.io/api/games?page=${data.selected + 1}`, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        // response.data.results.map(result => this.state.games.push(result));
        // axios
        //   .post("https://learnlocker.dev/api/gamestop", {
        //     game: response.data.results[0].name
        //   })
        //   .then(res => console.log(res));
        this.setState({
          games: response.data.results,
          count: response.data.count
        });
      })
      .catch(e => {
        console.log("error", e);
      });
  };

  render() {
    return (
      // This is where all the props are stored to be passed around
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          removeFavorite: this.removeFavorite,
          handlePaginate: this.handlePaginate,
          addFavorite: this.addFavorite
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
