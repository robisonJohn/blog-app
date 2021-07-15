import "./Search.css";

const Search = (props) => {
  return (
    <form className="search-form">
      <input
        className="search-input"
        value=""
        name="Search"
        placeholder="Search"
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
