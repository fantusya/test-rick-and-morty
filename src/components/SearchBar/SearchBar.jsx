import { ReactComponent as Svg } from 'images/svg/Icon.svg';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';

const SearchBar = ({ onChange }) => {
  const handleChange = e => {
    const regex = /[^A-Za-z0-9]+/;
    console.log('matches', regex.test(e.currentTarget.value));
    // console.log('matches', e.currentTarget.value.match(/[^A-Za-z0-9]+/g));
    onChange(e.currentTarget.value.toLowerCase());
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Filter by name..."
        pattern="[^A-Za-z0-9]+"
      />
      <SearchBtn onClick={e => e.preventDefault()}>
        <Svg />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchBar;
