json.extract! track, :id, :title, :plays, :description, :creator_id, :created_at
json.creator track.creator.username
json.created_at track.created_at.to_f*1000
json.cover_art_url track.cover_art.url
json.audio_url track.audio.url
json.dataForPlayer do
  json.url track.audio.url
  json.cover track.cover_art.url
  json.artist do
    json.name track.creator.username
    json.song track.title
  end
end
json.comments do
  track.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end

json.tags do
  track.tags.each do |tag|
    json.set! tag.id do
      json.partial! "api/tags/tag", tag: tag
    end
  end
end
