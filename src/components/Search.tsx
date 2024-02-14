import { ISearchProps } from "../types/types";

function Search({ searchQuerry, setSearchQuerry }: ISearchProps) {
  return (
    <div className="">
      <form className="flex justify-center gap-4 ">
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