### SoundCrown Sample State
```javascript
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "blahblah",
        email: "blahblahblah",
        img_url: "http://bakjsdlfalskdfja"
        recently_played_track_ids: [11,15,16,18,19];
      }
    }
    tracks: {
      11: {
        id: 11,
        title: "asdfasdfasd"
        song_url: "alsdkjfaldfjdsfasdk",
        uploader_id: 1
      }
    }
    comments: {
      31: {
        id: 31,
        body: "aksdfasdfasdfkadshfkajdsfhakjsfh"
        author_id: 1,
        track_id: 11
      }
    }
    ui: {

    }
    errors: {

    }
    session: {
      id: 51,
      user_id: 1,
      track_id: 11
    }
    play: {
      track_id: 11
      // not sure what other info is needed for this
    }
  }
}
```
