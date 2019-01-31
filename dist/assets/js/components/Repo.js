export const Repo = props => React.createElement("div", {
  className: "repo-wrapper"
}, React.createElement("h3", null, "PUBLIC REPOS: ", props.repos.length), React.createElement("div", {
  className: "repo-list"
}, props.repos.map(repo => {
  return React.createElement("div", {
    key: repo.id,
    className: "repo"
  }, React.createElement("a", {
    href: repo.html_url,
    className: "repo-link",
    target: "_blank"
  }, React.createElement("h1", null, repo.name)), React.createElement("p", {
    className: "repo-info"
  }, "Language: ", React.createElement("span", null, repo.language, " \xA0 | \xA0")), React.createElement("p", {
    className: "repo-info"
  }, "Stars: ", React.createElement("span", null, repo.stargazers_count, " \xA0 | \xA0")), React.createElement("p", {
    className: "repo-info"
  }, "Forks: ", React.createElement("span", null, repo.forks, " \xA0 | \xA0")), React.createElement("p", {
    className: "repo-info"
  }, "Watchers: ", React.createElement("span", null, repo.watchers)));
})));