const users = [];

// Join user to chat
function userJoin(id, username, lobbyname) {
  const user = { id, username, lobbyname };
  const index = users.findIndex(user => user.username === username);
  if (index === -1) {
    users.push(user);
  }
  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get lobbyname users
function getRoomUsers(lobbyname) {
  return users.filter(user => user.lobbyname === lobbyname);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
