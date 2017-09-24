json.extract! track, :id, :title, :description, :creator_id, :created_at
json.creator track.creator.username
json.created_at track.created_at.to_f*1000
json.cover_art_url track.cover_art.url
json.audio_url track.audio.url
json.dataForRPM do
  json.url track.audio.url
end
