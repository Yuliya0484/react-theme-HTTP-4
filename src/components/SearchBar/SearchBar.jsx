import { useState } from "react";
import s from "./SearchBar.module.css";
const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchChanged(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Enter your query"
        />
        <button className={s.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
