export const getTrackComments = (track_id) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${track_id}/comments`
  })
);

export const createComment = (comment) => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment
  })
);

export const deleteComment = (comment) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
);
