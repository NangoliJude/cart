import React, { Component } from "react";
import { MainWrapper } from "../UI";
import { MainContext } from "./MainContext";

class Provider extends Component {
  state = {
    On: false,
    dataIn: [],
    items: [],
    total: 0
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/NangoliJude/cartdata/master/data.json`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          dataIn: data
        });
      });
  };

  handleTheme = () => {
    console.log("clicked");
    this.setState({ On: !this.state.On });
  };
  addToCart = name => {
    console.log(this.state.items);
    this.setState({
      items: [...this.state.items, name]
    });
  };
  removeFromCart = name => {
    const newItems = [...this.state.items];
    newItems.splice(name, 1);
    this.setState({ items: newItems });
  };

  calculateTotal = price => {
    console.log(this.state.total);
    this.setState({
      total: this.state.total + 1
    });
  };
  render() {
    const active = { background: "#141d26", color: "white" };
    return (
      <MainWrapper style={this.state.On ? active : null}>
        <MainContext.Provider
          value={{
            state: this.state,
            actions: {
              handleTheme: this.handleTheme,
              addToCart: this.addToCart,
              removeFromCart: this.removeFromCart,
              calculateTotal: this.calculateTotal
            }
          }}
        >
          {this.props.children}
        </MainContext.Provider>
      </MainWrapper>
    );
  }
}

export { Provider };
