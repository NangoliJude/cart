import React, { Component } from "react";

class Product extends Component {
  state = {
    qty: 0
  };

  addItem = () => {
    this.setState(prevState => ({
      qty: prevState.qty + 1
    }));

    this.props.handleTotal(this.props.price);
  };

  removeItem = () => {
    this.setState(prevState => ({
      qty: prevState.qty - 1
    }));
    this.props.handleTotal(this.props.price);
  };
  render() {
    const { qty } = this.state;
    const styles = {
      backgroundImage: `url(${this.props.data.imageUrl})`,
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div style={{ boxShadow: "0px 1px 2px #BEBEBE" }}>
        <div style={styles} />
        <div className="title">{this.props.data.name}</div>
        <div>
          <button onClick={this.addItem} style={{ color: "red" }}>
            +
          </button>
          {qty}
          <button
            disabled={qty < 1}
            onClick={this.removeItem}
            style={{ color: "green" }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
