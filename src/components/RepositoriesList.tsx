import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../state";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const { data, error, loading } = useSelector(
    (state: RootState) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          disabled={loading}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!loading && !error && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
