export const loginAction = (username, password) => {
  return {
    type: 'LOGIN',
    payload: {
      name: username,
      password: password,
    },
  };
};
