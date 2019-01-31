export const User = ({user}) => (
  <div>
      <div className="container-user">
        <div className="user-wrapper">
          <div className="user-avatar-wrapper">
            <img src={user.avatar_url} alt="" className="user-avatar"/>
          </div>
          <div className="user-info">
            <h3>Name:  <span>{user.name}</span></h3>
            <h3>Username:  <span>{user.login}</span></h3>
            <h3>Bio:  <span>{user.bio}</span></h3>
            <h3>Followers:  <span>{user.followers}</span></h3>
            <h3>Following:  <span>{user.following}</span></h3>
          </div>
        </div>
      </div>
  </div>
);
