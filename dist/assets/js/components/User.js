export const User = ({
  user
}) => React.createElement("div", null, React.createElement("div", {
  className: "container-user"
}, React.createElement("div", {
  className: "user-wrapper"
}, React.createElement("div", {
  className: "user-avatar-wrapper"
}, React.createElement("img", {
  src: user.avatar_url,
  alt: "",
  className: "user-avatar"
})), React.createElement("div", {
  className: "user-info"
}, React.createElement("h3", null, "Name:  ", React.createElement("span", null, user.name)), React.createElement("h3", null, "Username:  ", React.createElement("span", null, user.login)), React.createElement("h3", null, "Bio:  ", React.createElement("span", null, user.bio)), React.createElement("h3", null, "Followers:  ", React.createElement("span", null, user.followers)), React.createElement("h3", null, "Following:  ", React.createElement("span", null, user.following))))));