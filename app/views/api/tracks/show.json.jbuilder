json.partial! "api/tracks/track", track: @track

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end

json.tags do
  @track.tags.each do |tag|
    json.set! tag.id do
      json.partial! "api/tags/tag", tag: tag
    end
  end
end
