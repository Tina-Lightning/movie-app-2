import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    // <form className="search-form" onSubmit={(e) => e.preventDefault()}>
    //   <h2>search movies</h2>
    //   <input
    //     type="text"
    //     className="form-input input-border"
    //     value={query}
    //     onChange={(e) => setQuery(e.target.value)}
    //   />
    //   {error.show && <div className="error">{error.msg}</div>}
    // </form>

    <form className="container d-flex justify-content-center">
      <div className="card mt-5 p-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button class="btn btn-primary">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
