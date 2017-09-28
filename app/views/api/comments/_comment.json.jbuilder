json.extract! comment, :id, :body, :author_id, :track_id, :created_at
json.created_at comment.created_at.to_f*1000
json.author do
  json.partial! "api/users/user", user: comment.author
end
