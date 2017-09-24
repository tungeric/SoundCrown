export const getAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: `api/users`,
  })
);

export const getUser = (username) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}`,
  })
);
