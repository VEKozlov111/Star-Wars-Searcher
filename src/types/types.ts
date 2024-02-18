export interface INavItemProps {
  title: string;
  to: string;
}

export interface ICard {
  id: number;
  name: string;
  height: string;
  mass: string;
}

export interface ISearchProps {
  searchQuerry: string;
  setSearchQuerry: React.Dispatch<React.SetStateAction<string>>;
}