export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.full_name}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
