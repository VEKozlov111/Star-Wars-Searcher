import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
import { ICard } from "../types/types";

function Main() {
  const [querry, setQuerry] = useState("");
  const [data, setData] = useState<ICard[]>([]);
  const [count, setCount] = useState(0);
  const [nextPage, setNextPage] = useState('');
  const [previousPage, setPreviousPage] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const {
    fetching: searchCards,
    isLoading: isLoadingSearch,
    err: searchErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      `https://swapi.dev/api/people/?page=1&search=${querry}`
    );
    setData(respons.data.results as ICard[]);
    setCount(respons.data.count);
    setNextPage(respons.data.next);
    setPreviousPage(respons.data.previous);
    setPageNumber(1)
  });

  const {
    fetching: fetchCards,
    isLoading: isLoadingCards,
    err: cardErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      "https://swapi.dev/api/people/?page=1"
    );
    setData(respons.data.results as ICard[]);
    setCount(respons.data.count);
    setNextPage(respons.data.next);
    setPreviousPage(respons.data.previous);
    setPageNumber(1)
  });

  const {
    fetching: fetchPreviousCards,
    isLoading: isLoadingPreviousCards,
    err: cardPreviousErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      `${previousPage}`
    );
    setData(respons.data.results as ICard[]);
    setCount(respons.data.count);
    setNextPage(respons.data.next);
    setPreviousPage(respons.data.previous);
    setPageNumber(pageNumber - 1)
  });

  const {
    fetching: fetchNextCards,
    isLoading: isLoadingNextCards,
    err: cardNextErr,
  } = useFetch(async () => {
    const respons = await axios.get(
      `${nextPage}`
    );
    setData(respons.data.results as ICard[]);
    setCount(respons.data.count);
    setNextPage(respons.data.next);
    setPreviousPage(respons.data.previous);
    setPageNumber(pageNumber + 1)
  });

  const switchNextPage = () => (typeof nextPage === "string") ? fetchNextCards() : console.log("Последняя страница");
  const switchPreviousPage = () => (typeof previousPage === "string") ? fetchPreviousCards() : console.log("Первая страница");

  useEffect(() => {
    if (typeof fetchCards === "function") {
      fetchCards();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (typeof searchCards === "function") {
      searchCards();
    }
    // eslint-disable-next-line
  }, [querry]);


  return (
    <div className="flex flex-col h-full">
      <Search setQuerry={setQuerry} />
      {cardErr && (
        <h2 className="text-color1 text-2xl text-center mt-9">{cardErr}</h2>
      )}
      {isLoadingCards || isLoadingSearch || isLoadingPreviousCards || isLoadingNextCards ? (
        <h2 className="text-color3 text-2xl text-center mt-9">Loading....</h2>
      ) :
        data.length > 0 && !(cardErr || searchErr || cardNextErr || cardPreviousErr) ? (
          <div>
            <div className="flex  gap-[1.5vw] pt-2 flex-wrap justify-center">
              {data.map((card) => (
                <Card card={card} key={card.id} />
              ))}
            </div>
            <div className="flex gap-[1.5vw] justify-center pt-2">
              <button onClick={switchPreviousPage} className="btn">Previos page</button>
              <p>Найдено героев: {count}</p>
              <p>Page № {pageNumber}</p>
              <button onClick={switchNextPage} className="btn">Next page</button>
            </div>
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