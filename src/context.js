import React, { Component } from "react";
import { storeProducts } from "./data";
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
    apiUrl: `https://api.rawg.io/api/games`,
    count: null
  };
  componentDidMount() {
    this.setProducts();
    this.handlePaginate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.apiUrl !== this.state.apiUrl) {
      this.handlePaginate();
    }
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  // Retrieves games from rawg api

  performSearch = search => {
    this.setState({ apiUrl: `https://api.rawg.io/api/games?search=${search}` });
  };

  // getGamesDetails() {
  //   axios
  //     .get(`https://api.rawg.io/api/games?portal`, {
  //       headers: {
  //         Accept: "application/json"
  //       }
  //     })
  //     .then(response => {
  //       console.log("game details", response.data);
  //       this.setState({
  //         games: response.data.results,
  //         count: response.data.count
  //       });
  //     })
  //     .catch(e => {
  //       console.log("error", e);
  //     });
  // }

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

  // Creates page system taking the selected page and outputing the data for that page
  handlePaginate = (data = { selected: 1 }) => {
    axios
      .get(
        `${this.state.apiUrl}${
          this.state.apiUrl.includes("?") ? "&" : "?"
        }page=${data.selected + 1}`,
        {
          headers: {
            Accept: "application/json"
          }
        }
      )
      .then(response => {
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
          performSearch: this.performSearch,
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
