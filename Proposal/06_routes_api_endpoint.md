## SoundCrown Routes

### Front End:

* /#/  - only shown without login
* /#/login - displays SessionForm
* /#/signup - displays SessionForm
* /#/stream - Gives list of songs to play

* /#/:username - user profile
* /#/:username/:trackTitle - track
  * includes comments forms and component

* /#/upload - upload track

**** Extra ****

* /#/search - search results

--------------

### API endpoints:

#### Users
* GET /api/users - gets user information (search)
* POST /api/users - sign up

#### Sessions
* POST /api/session - sign in
* DELETE /api/session - sign out

#### Tracks
* GET /api/users/tracks - gets tracks for each user
* POST /api/tracks - creates a track
* DELETE /api/tracks/:id - deletes track (user only)

#### Comments
* GET /api/users/tracks/comments - gets comments for track
* POST /api/users/tracks/comments - post comment
* DELETE /api/users/tracks/comments/:id - delete comment
