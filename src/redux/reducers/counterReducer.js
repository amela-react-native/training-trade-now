export default (
  state = {username: '', password: '', emailUserName: ''},
  action,
) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, {
        username: action.username,
        password: action.password,
      });
    case 'REGISTER':
      return Object.assign({}, state, {
        username: action.username,
        password: action.password,
        emailUserName: action.emailUserName,
      });
  }
  return state;
};
