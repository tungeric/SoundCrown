export const createTrack = (track) => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks/',
    data: { track }
  })
);

export const deleteTrack = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`,
  })
);

export const getUserTracks = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}/tracks`,
  })
);

export const getTrack = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`,
  })
);
