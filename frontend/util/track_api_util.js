export const createTrack = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks/',
    processData: false,
    contentType: false,
    data: formData,
  })
);

export const updateTrack = (track) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: track,
  });
};

export const deleteTrack = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`,
  })
);

export const getUserTracks = (username) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}/tracks`,
  })
);

export const getAllTracks = () => (
  $.ajax({
    method: 'GET',
    url: `api/users/tracks`,
  })
);

export const getTrack = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`,
  })
);
