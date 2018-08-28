import React, { Component } from "react";
import { Main, Provider } from "./Components";

class App extends Component {
  render() {
    return (
      <main>
        <Provider>
          <Main />
        </Provider>
      </main>
    );
  }
}

export default App;
