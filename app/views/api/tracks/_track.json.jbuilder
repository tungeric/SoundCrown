json.extract! track, :id, :title, :plays, :description, :creator_id, :created_at
json.creator track.creator.username
json.created_at track.created_at.to_f*1000
json.cover_art_url track.cover_art.url
json.audio_url track.audio.url
json.tags track.tags, :id, :name
json.dataForPlayer do
  json.url track.audio.url
  json.cover track.cover_art.url
  json.artist do
    json.name track.creator.username
    json.song track.title
  end
end
