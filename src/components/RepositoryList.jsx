import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/GhaSilva/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => {
            return <RepositoryItem key={repository.id} repository={repository} />
        })}
        

      </ul>
    </section>
  );
}