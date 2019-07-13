import React, { Component } from "react";
import { detailProduct, storeProducts } from "./data";
import axios from "axios";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    favorites: [],
    games: [],
    count: null
  };
  componentDidMount() {
    this.setProducts();
    this.getGames();
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

  getGames = (page = 1) => {
    axios
      .get(`https://api.rawg.io/api/games?page=${page}`, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        // response.data.results.map(result => this.state.games.push(result));
        console.log(response.data);
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

  getItem = id => {
    const product = this.state.games.find(item => {
      return item.id === id;
    });
    return product;
  };

  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };

  addFavorite = gameInfo => {
    console.log("gameInfo", gameInfo);
    this.setState(
      () => ({ favorites: [...this.state.favorites, gameInfo] }),
      () => console.log("add favorite", this.state)
    );
  };
  removeFavorite = id => {
    this.setState(() => ({
      favorites: this.state.favorites.filter(game => game.id !== id)
    }));
  };

  handlePaginate = (data = { selected: 1 }) => {
    console.log("selected data", data.selected);
    axios
      .get(`https://api.rawg.io/api/games?page=${data.selected + 1}`, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        // response.data.results.map(result => this.state.games.push(result));
        console.log(response.data);
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
