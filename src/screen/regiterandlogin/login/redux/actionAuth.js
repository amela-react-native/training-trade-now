export const LOGIN_ATTEPT = 'LOGIN_ATTEPT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function isLoading() {
  return {
    type: LOGIN_ATTEPT,
  };
}
export function loginSuccess(userData) {
  return {
    type: LOGIN_SUCCESS,
    payload: userData,
  };
}

export function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
}
export function login(data) {
  return dispatch => {
    dispatch(isLoading(true));

    return fetch('https://cuahangthucung.herokuapp.com/user/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usernames: data.username,
        passwords: data.password,
      }),
    })
      .then(response => {
        console.log(response);
        if (response.status < 300) {
          dispatch(isLoading(false));

          response.json().then(responseJSON => {
            console.log('responseJSON', responseJSON);

            dispatch(loginSuccess(responseJSON));
            console.log(response);
          });
        } else {
          response.json().then(responseJSON => {
            console.log('responseJSON', responseJSON);

            dispatch(isLoading(false));

            dispatch(loginFailed(responseJSON.message));
          });
        }
      })

      .catch(error => {
        console.log('error', error);

        dispatch(isLoading(false));

        dispatch(loginFailed(error));
      });
  };
}
