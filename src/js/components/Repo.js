export const Repo = (props) => (
  <div className="repo-wrapper">
    <h3>PUBLIC REPOS: {props.repos.length}</h3>
    <div className="repo-list">
      {props.repos.map((repo) => {
        return (
          <div key={repo.id} className="repo">
            <a href={repo.html_url} className="repo-link" target="_blank"><h1>{repo.name}</h1></a>
              <p className="repo-info">Language: <span>{repo.language} &nbsp; | &nbsp;</span></p>
              <p className="repo-info">Stars: <span>{repo.stargazers_count} &nbsp; | &nbsp;</span></p>
              <p className="repo-info">Forks: <span>{repo.forks} &nbsp; | &nbsp;</span></p>
              <p className="repo-info">Watchers: <span>{repo.watchers}</span></p>
          </div>
        )
      })}
    </div>
  </div>
);
