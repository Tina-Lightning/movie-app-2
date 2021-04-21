import React from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <>
      <form className="container d-flex justify-content-center">
        <div className="pt-4">
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
      <div className="container d-flex justify-content-center">
        {error.show && <div className="error">{error.msg}</div>}
      </div>
    </>
  );
};

export default SearchForm;
