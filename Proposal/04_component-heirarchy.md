# SoundCrown Component Heirarchy

## Functional Component Heirarchy
* Root
  * App
    * NavBar
    * PlayBar
    * MainPage

---------

### NavBar
* NavBar
  * Components:
    * ```SessionButtonsContainer``` + ```SessionButtons```
      * State: ```session```

### PlayBar
* PlayBar
  * Components:
    * ```PlaybackUIContainer``` + ```PlaybackUI```
      * State: ```playback```

--------

## MainPage

### Tracks
* Stream Page
  * Route: /#/Stream
  * Components:
    * ```StreamHeaderContainer``` + ```StreamHeader```
    * ```TrackIndexContainer``` + ```TrackIndex```
      * State: ```tracks```, ```ui```
* User Page
  * Route: /#/users/:userId
  * Components:
    * ```UserHeaderContainer``` + ```UserHeader```
    * ```TrackIndexContainer``` + ```TrackIndex```
      * Components:
        * ```TrackIndexItem```
          * State: tracks[:id], ui
* Track Page
  * Route: /#/tracks/:TrackId
  * Components:
    * ```TrackHeaderContainer``` + ```TrackHeader```
    * ```CommentFormContainer``` + ```CommentForm```
    * ```CommentIndexContainer``` + ```CommentIndex```
      * Components:
        * ```CommentIndexItem```
        * State: comments[:trackId], ui
* Search Page
  * To be continued...

### Sessions
* ```SessionFormContainer``` + ```SessionForm```
  * Route: ```/#/login``` and ```/#/signup```
