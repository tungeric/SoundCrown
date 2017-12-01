export const createTagging = (tagging) => (
  $.ajax({
    method: 'POST',
    url: 'api/taggings',
    data: tagging
  })
);

export const deleteTag = (tagging) => (
  $.ajax({
    method: 'DELETE',
    url: `api/tagging/${tagging.id}`
  })
);
