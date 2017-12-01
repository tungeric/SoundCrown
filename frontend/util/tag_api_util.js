export const getTrackTags = (track_id) => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${track_id}/tags`
  })
);

export const createTag = (tag) => (
  $.ajax({
    method: 'POST',
    url: 'api/tags',
    data: tag
  })
);

export const deleteTag = (tag) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tag/${tag.id}`
  })
);
