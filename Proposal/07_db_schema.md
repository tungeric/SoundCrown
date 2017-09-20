## SoundCrown DB Schema

### Users

| Column name      | data type     | details                   |
| ---------------- |:-------------:| -------------------------:|
| id               | integer       | not null, primary key     |
| username         | string        | not null, indexed         |
| email            | string        | not null, indexed, unique |
| image_url        | string        | not null                  |
| password_digest  | string        | not null                  |
| session_token    | string        | not null, indexed, unique |
| created_at       | datetime      | not null                  |
| updated_at       | datetime      | not null                  |

### Tracks

| Column name      | data type     | details                   |
| ---------------- |:-------------:| -------------------------:|
| id               | integer       | not null, primary key     |
| title            | string        | not null, indexed         |
| track_url        | string        | not null                  |
| image_url        | string        | not null                  |
| user_id          | integer       | not null, indexed         |
| created_at       | datetime      | not null                  |
| updated_at       | datetime      | not null                  |

* user_id references users

### Comments

| Column name      | data type     | details                   |
| ---------------- |:-------------:| -------------------------:|
| id               | integer       | not null, primary key     |
| body             | text          | not null                  |
| track_id         | integer       | not null, indexed         |
| user_id          | integer       | not null, indexed         |
| created_at       | datetime      | not null                  |
| updated_at       | datetime      | not null                  |

* track_id references tracks
* user_id references users
