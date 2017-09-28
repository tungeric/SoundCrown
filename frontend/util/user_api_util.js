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
    error: function() {
      window.location.replace('/#/user-not-found');
    }
  })
);

export const updateUser = (username, formData) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/users/${username}`,
    processData: false,
    contentType: false,
    data: formData
  })
);
