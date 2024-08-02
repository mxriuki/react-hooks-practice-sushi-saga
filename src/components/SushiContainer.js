import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, eatSushi}) {
  const sliceSize = 4;
  const [startIndex, setStartIndex] = useState(0)

  
  return (
    <div className="belt">
    {sushis
    .slice(startIndex, startIndex + sliceSize)
    .map(sushi => <Sushi sushi={sushi} eatSushi={eatSushi} key={sushi.id} />)}

    
      <MoreButton handleClick={showMore}/>
    </div>
  );

  function showMore() {
    setStartIndex(startIndex + 4);
  }
}

export default SushiContainer;
