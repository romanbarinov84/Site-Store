import { useState } from "react";

export default function Content({ onSearchValueChange }) {  
  const [searchValue, setSearchValue] = useState("");

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    onSearchValueChange(event.target.value);  
  };

  return (
    <div className="content">
      <div className="search">
        <h1>
          {searchValue ? `Пошук по запиту : "${searchValue}"` : "Продукція"}
        </h1>
        <div className="search-block">
          <img width={30} src="/images/search-icon.png" alt="search-logo" />
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Search"
          />
          {searchValue && <img onClick={() => setSearchValue("")} className="clear" width={20} src="/images/btn-remove.png"  alt="button-clear"/>}
        </div>
      </div>
    </div>
  );
}
