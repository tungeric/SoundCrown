json.partial! "api/tracks/track", track: @track

json.comments do
  @user.comments.each do |comment|
    json.set! comment.id do
      json.partial! "api/comments/comment", comment: comment
    end
  end
end
