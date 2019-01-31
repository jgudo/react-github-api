function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { User } from './User.js';
import { Repo } from './Repo.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getUser", _.debounce(async username => {
      if (this._cancelFetch) {
        this._cancelFetch.cancel();
      }

      this._cancelFetch = axios.CancelToken.source();

      try {
        const user = await axios.get(`https://api.github.com/users/${username}`, {
          cancelToken: this._cancelFetch.token
        });
        const repos = await axios.get(`https://api.github.com/users/${username}/repos`);

        if (user) {
          this.setState(() => ({
            data: user.data,
            repos: repos.data,
            error: undefined
          }));
          this.loader.current.style.display = 'none';
        }
      } catch (e) {
        this.loader.current.style.display = 'none';
        this.setState(() => ({
          data: null,
          repos: null,
          error: 'user not found'
        }));
      }
    }, 200));

    _defineProperty(this, "onInputChange", e => {
      let input = e.target.value;
      this.setState(() => ({
        query: input
      }));

      if (input.length === 0) {
        this.loader.current.style.display = 'none';
      } else {
        this.loader.current.style.display = 'block';
        this.getUser(input);
      }
    });

    this.state = {
      query: '',
      data: null,
      repos: null
    };
    this.loader = React.createRef();
  }

  componentDidUpdate() {
    if ('localStorage' in window) {
      localStorage.setItem('githubUser', JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('githubUser');
      const user = JSON.parse(json);

      if (user) {
        this.setState(() => ({
          query: user.query,
          data: user.data,
          repos: user.repos,
          error: undefined
        }));
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "input-field"
    }, React.createElement("input", {
      type: "text",
      placeholder: "enter github username",
      autoFocus: true,
      onChange: this.onInputChange,
      value: this.state.query
    }), React.createElement("div", {
      className: "loader",
      ref: this.loader
    })), this.state.data && React.createElement(React.Fragment, null, React.createElement(User, {
      user: this.state.data
    }), React.createElement(Repo, {
      repos: this.state.repos
    })), this.state.error && React.createElement("p", {
      className: "result-info"
    }, this.state.error));
  }

}

export default App;