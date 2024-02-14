export interface INavItemProps {
  title: string;
  to: string;
}

export interface ICard {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface ISearchProps {
  searchQuerry: string;
  setSearchQuerry: React.Dispatch<React.SetStateAction<string>>;
}