import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

interface Repository {
    id: string;
    name: string;
    html_url: string;
    full_name: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
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
