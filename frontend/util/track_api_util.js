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

export const deleteTrack = (track) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${track.id}`,
  })
);

export const getUserTracks = (username) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${username}/tracks`,
  })
);

export const getAllNewTracks = () => (
  $.ajax({
    method: 'GET',
    url: `api/new_tracks`,
  })
);

export const getTrack = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`,
  })
);
