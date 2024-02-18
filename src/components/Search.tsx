import React, { useState } from "react";
interface ISearchProps {
  setQuerry: (e: string) => void;
}


function Search({ setQuerry }: ISearchProps) {
  const [searchQuerry, setSearchQuerry] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    setQuerry(searchQuerry);
  }
  return (
    <div className="">
      <form className="flex justify-center gap-4 " onSubmit={handleSubmit}>
        <input
          className="border rounded border-color3 py-2 px-4 w-1/2"
          type="search"
          placeholder="Search"
          value={searchQuerry}
          onChange={(e) => setSearchQuerry(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;