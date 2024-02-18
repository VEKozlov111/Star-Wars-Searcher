export interface INavItemProps {
  title: string;
  to: string;
}

export interface ICard {
  id: number;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  birth_year: string;
  gender: string;

}

export interface ISearchProps {
  searchQuerry: string;
  setSearchQuerry: React.Dispatch<React.SetStateAction<string>>;
}

export interface IFetchData {
  count: number;
  next: number;
  previous: number;
  results: ICard[];
}
