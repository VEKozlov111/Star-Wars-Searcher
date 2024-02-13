import React from "react";
import data from "../assets/data.json";
import Card from "../components/Card";
import Search from "../components/Search";

function Main() {
  return (
    <div >
      <Search />
      <div className="flex  gap-[1.5vw] pt-2 flex-wrap justify-center">
        {data.products.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
export default Main;