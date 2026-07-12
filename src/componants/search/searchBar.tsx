import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const categories = [
    { name: "Plants", path: "/plants" },
    { name: "Pots", path: "/pots" },
    { name: "Fertilizers", path: "/fertilizer" },
    { name: "Tools", path: "/tools" },
  ];

  const filteredSuggestions = categories.filter((item) =>
    item.name.toLowerCase().startsWith(search.toLowerCase())
  );

  const handleSuggestionClick = (path: string) => {
    setSearch("");
    navigate(path);
  };

  return (
    <div className="search-wrapper">
      <input
        type="search"
        className="form-control search-input"
        placeholder="Search catecori...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <div className="suggestion-box">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((item) => (
              <div
                key={item.name}
                className="suggestion-item"
                onMouseDown={() => handleSuggestionClick(item.path)}
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="suggestion-item">
              No category found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;