import React, { useMemo, useState } from "react";
import data from "../assets/data.json";
import Card from "../components/Card";
import Search from "../components/Search";


function Main() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const search = useMemo(() => {
    return data.products.filter((item) =>
      item.title.toLowerCase().includes(searchQuerry)
    );
  }, [searchQuerry]);
  return (
    <div >
      <Search searchQuerry={searchQuerry} setSearchQuerry={setSearchQuerry} />
      {search.length ? (
        <div className="flex  gap-[1.5vw] pt-2 flex-wrap justify-center">
          {search.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </div>
      ) : (
        <h2 className="text-color3 text-2xl text-center mt-9">
          Sorry but we did not find anything!
        </h2>
      )}
    </div>
  );
}
export default Main;