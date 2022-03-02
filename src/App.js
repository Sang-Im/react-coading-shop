/*eslint-disable*/

import "./App.css";
import React, { useState } from "react";
import Data from "./data.js";
import Product from "./Product";
import Jumbotron from "./Jumbotron";
import Navibar from "./Navibar";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail";
import axios from "axios";

export let 재고context = React.createContext();

function App() {
  const [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navibar />

      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Product shoes={shoes[i]} key={i} i={i} />;
                })}
              </div>
            </재고context.Provider>

            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    console.log(result.data);
                    shoes변경([...shoes, ...result.data]);
                  })
                  .catch(() => {});
              }}
            >
              더보기
            </button>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>

        <Route path="/:id">
          <div>새로 만든 route입니다</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
