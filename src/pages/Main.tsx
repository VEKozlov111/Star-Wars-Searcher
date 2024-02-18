import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import { ICard } from "../types/types";


function Main() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [data, setData] = useState<ICard[]>([]);

  const {
    fetching: fetchCards,
    isLoading: isLoadingCards,
    err: cardErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      "https://swapi.dev/api/people/"
    );
    setData(respons.data.results as ICard[]);
  });

  useEffect(() => {
    if (typeof fetchCards === "function") {
      fetchCards();
    }
    // eslint-disable-next-line
  }, []);


  return (
    <div >
      <Search searchQuerry={searchQuerry} setSearchQuerry={setSearchQuerry} />
      {cardErr && (
        <h2 className="text-color1 text-2xl text-center mt-9">{cardErr}</h2>
      )}
      {isLoadingCards ? (
        <h2 className="text-color1 text-2xl text-center mt-9">Loading....</h2>
      ) :
        data.length ? (
          <div className="flex  gap-[1.5vw] pt-2 flex-wrap justify-center">
            {data.map((card) => (
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