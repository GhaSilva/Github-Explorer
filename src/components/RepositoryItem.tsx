interface RepositoryItemProps {
  repository: {
    name: string;
    html_url: string;
    full_name: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.full_name}</p>
      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
