import React from "react";
import { MainContext } from "../Context/MainContext";
import Spinner from "../UI/Spinner";
import Product from "./Product";

const ProductList = () => {
  return (
    <MainContext.Consumer>
      {context => {
        const { dataIn } = context.state;
        const {
          calculateTotal,
          showProduct,
          AddToCart,
          removeFromCart
        } = context.actions;
        const Products = dataIn.map(data => {
          return (
            <div key={data.id}>
              <Product
                data={data}
                AddToCart={AddToCart}
                removeFromCart={removeFromCart}
                handleTotal={calculateTotal}
                showProduct={showProduct}
              />
            </div>
          );
        });
        return (
          <React.Fragment>
            {dataIn.length === 0 ? <Spinner /> : Products}
          </React.Fragment>
        );
      }}
    </MainContext.Consumer>
  );
};

export { ProductList };
