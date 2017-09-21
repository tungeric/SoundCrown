json.partial! "api/users/user", user: @user

json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.partial! "api/tracks/track", track: track
    end
  end
end
