import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [budget, setBudget] = useState(100)
  const [sushis, setSushis] =useState([]);



  useEffect(() => fetch(API)
  .then(res => res.json())
  .then(setSushis), []);

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={eatSushi} />
      <Table plates={sushis.filter(sushis => sushis.eaten)} budget={budget} />
    </div>
  );
  function eatSushi(sushi){

    if (budget >= sushi.price){
      setBudget(budget - sushi.price);
    const newSushis = sushis.map(s => s.id !== sushi.id ? s : {...s, eaten: true});

    setSushis(newSushis);
    }
  }
}

export default App;
