import React, { FC } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
    input: string;
    setSearchInput: (input:string) => void;
}
const SearchBar: FC<SearchBarProps> = ({ input, setSearchInput }) => (
  <input className="search__bar" type="text" placeholder="find item..." value={input} onChange={(e) => setSearchInput(e.target.value)} />
);

export default SearchBar;
