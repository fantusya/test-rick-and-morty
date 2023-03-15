import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';
// import svg from 'images/svg/Icon.svg';
import { ReactComponent as Svg } from 'images/svg/Icon.svg';

const SearchBar = ({ onChange }) => {
  const handleChange = e => {
    onChange(e.currentTarget.value.toLowerCase());
  };

  return (
    <SearchForm>
      <SearchInput
        type="text"
        onChange={handleChange}
        placeholder="Filter by name..."
      />
      <SearchBtn onClick={e => e.preventDefault()}>
        {/* <svg src={svg} /> */}
        <Svg />
      </SearchBtn>
    </SearchForm>
  );
};

export default SearchBar;
