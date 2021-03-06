import React from 'react';
import { SearchButton, SearchForm, SearchInput } from './search-input.style';
import { useHistory } from 'react-router';
import { routes } from 'core/router/routes';

export const SearchInputComponent: React.FC = () => {
  const history = useHistory();
  const [search, setSearch] = React.useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(routes.results(search));
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch}>
        <SearchInput
          placeholder="I want to cook today..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        ></SearchInput>
        <SearchButton type="submit">SEARCH</SearchButton>
      </SearchForm>
    </>
  );
};
