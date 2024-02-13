import React from "react";
import data from "../assets/data.json";
import Card from "../components/Card";

function Main() {
  return (
    <div >
      <div className="flex  gap-4 pt-2 flex-wrap">
        {data.products.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
export default Main;