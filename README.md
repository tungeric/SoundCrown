![Alt text](/app/assets/images/soundcrown-logo-wide.jpg "Logo")

# SOUNDCROWN

[Live page on Heroku](https://soundcrown.herokuapp.com)

This was a project between Week 8 and Week 10 of App Academy and is meant to be a clone of the popular web-streaming service SoundCloud. This application is built using Ruby on Rails for backend with PostgreSQL for the database and ReactJS for the front end.

## Key Features:

* User Authentication and secure sign-in
* User uploaded pictures and audio files
* Continuous playback of music while navigating the site
* Users can leave comments on tracks

![Alt text](/app/assets/images/ss1.png "ss4")

The splash page is designed to look somewhat like SoundCloud's home page - I used essentially the same words as SoundCloud has with the exception of a few references to royalty and kingdoms (my site is named "SoundCROWN" after all).

Users can log in or create an account using the buttons in the top right or in the center of the page - or they can scroll all the way to the bottom of the page and eventually there will be buttons there too! Alternatively, click the "Demo" button for a quick tour around the page with full user capabilities.

Passwords are protected using BCrypt.

![Alt text](/app/assets/images/ss2.png "ss4")

Once logged in, the site will direct you to our Stream page, which features the newest and most-played tracks on the application. If you click the play button on any of these tracks, a music bar will appear at the bottom of the screen and begin playing music. You can now navigate anywhere in the site and the music will continue to play until you tell it to stop or until the page is refreshed manually.


![Alt text](/app/assets/images/ss3.png "ss4")

Users also have their own page where they can freely edit their avatar and tracks. Note that the url for users is simply `(root directory)/:username`. I chose this so users can have an easier time just typing in other usernames as opposed to trying to remember the user_id. This did pose some challenges as Rails is predisposed to link associations with ids, so during any data transfer both the username as well as the id must be passed through. The music essentially plays the existing playlist unless you click out of it so if you started playing a track on the Stream page, it will continue to go down the list of tracks in the stream page (or the order can be randomized if you wish - just click the shuffle button in the play bar!

![Alt text](/app/assets/images/ss4.png "ss4")

In the play bar you have more options than just shuffle. If you want to play one specific track on repeat, click the repeat button. Next and previous buttons as well as play/pause buttons are also available. You can also adjust your position on the track using the track progress slider in the middle of the bar. Lastly, the track can be muted in a pinch by clicking the volume control button.

A big challenge for me was to have the page communicate with the play bar on whether the track is playing or not - this is why the play button turns to the pause button when you click it. To accomplish this, I had to send the play data from the play bar up to the root application level and back down into the track item. This street goes two ways, though, so the same data has to be transferred back to the music player in the event that the user clicks "play" in the page instead of on the play bar.

![Alt text](/app/assets/images/ss6.png "ss4")

Files can be uploaded at any time by clicking the "Upload" button in the nav bar. This will enable users to choose an audio file and a cover art for their track. The only required info for the upload to work are the track and the title. To be honest, the description isn't even shown anywhere on the page, but use it to hide secret messages and easter eggs!

![Alt text](/app/assets/images/ss5.png "ss4")

Tracks also have their own pages where users can play the track as well as leave comments. Comments are displayed in reverse chronological order for the time being.

## Usage

```
# Clone this repository
git clone https://github.com/tungeric/SoundCrown.git

# Go to the repository
cd soundcrown-app

# install dependencies
npm install

# initiate your server
rails server

# navigate to localhost:3000
```
In order to upload files, you will need to make an account on Amazon Web Services and generate your security access codes to place in your `config/application.yml` file.

## Credits

This project uses a few open source, particularly for the music playback portion (see below). The music playbar was a heavily modified version of the React Music Player by smronju: (https://github.com/smronju/React-Music-Player) and the music animation is from Joshuasm32 (https://codepen.io/Joshuasm32/pen/IDxKB).

![Alt text](/app/assets/images/ss4.png "ss4")

I also took a dropdown menu from mlaursen's react-dd-menu (https://github.com/mlaursen/react-dd-menu) to enable users to edit and delete their tracks.

![Alt text](/app/assets/images/ss8.png "ss4")

 And of course major design choices and styling were an imitation of the fine work being done at (https://soundcloud.com/).

In addition, this page uses Paperclip (https://github.com/thoughtbot/paperclip) and Figaro (https://www.npmjs.com/package/figaro) to facilitate the upload of files to Amazon Web Server. I chose Amazon Web Server for its apparent security - the files uploaded cannot be tampered with by anyone other than myself

Big thanks for those sites mentioned above as well as the hundreds (thousands?) of posts on Google, Github and StackOverflow that helped move me along the way. And of course a big thank you to App Academy for showing me the skills necessary to build this application.
