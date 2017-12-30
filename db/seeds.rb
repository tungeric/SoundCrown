# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all
Tag.destroy_all
Tagging.destroy_all
Comment.destroy_all

u1 = User.create!({
  username: "demo",
  password: "password"
})

t11 = Track.create!({
  title: "Hey what it is",
  description: "The title doesn't fit the song",
  creator_id: u1.id,
  plays: 22,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08+Jazzy+Joint.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/alienguy.jpg')
})

tag1 = Tag.create!({name: "rock"})
tag2 = Tag.create!({name: "pop"})
tag3 = Tag.create!({name: "ballad"})
tag4 = Tag.create!({name: "r&b"})
tag5 = Tag.create!({name: "hip-hop"})
tag6 = Tag.create!({name: "electronic"})
tag7 = Tag.create!({name: "oldies"})
tag8 = Tag.create!({name: "jazz"})
tag9 = Tag.create!({name: "blues"})
tag10 = Tag.create!({name: "classical"})
tag11 = Tag.create!({name: "soul"})
tag12 = Tag.create!({name: "soundtrack"})

tagging1 = Tagging.create!({tag_id: tag1.id, track_id: t11.id})

u2 = User.create!({
  username: "TheKing",
  password: "michaeljackson",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/michael_jackson.jpg')
})

t21 = Track.create!({
  title: "Rock with You",
  description: "Allll niiiiight",
  creator_id: u2.id,
  plays: 329,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/02+-+Rock+with+You+(Single+Version).mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
tagging2 = Tagging.create!({tag_id: tag1.id, track_id: t21.id})

t22 = Track.create!({
  title: "Off the Wall",
  description: "How to live life",
  creator_id: u2.id,
  plays: 124,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/05+-+Off+the+Wall.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
tagging3 = Tagging.create!({tag_id: tag1.id, track_id: t22.id})

t23 = Track.create!({
  title: "Human Nature",
  description: "it's there",
  creator_id: u2.id,
  plays: 873,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/07+-+Human+Nature.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
tagging4 = Tagging.create!({tag_id: tag3.id, track_id: t23.id})

t24 = Track.create!({
  title: "Man in the Mirror",
  description: "Why did I add a description section?",
  creator_id: u2.id,
  plays: 1125,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/07+-+Man+in+the+Mirror+%5BRemastered%5D.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
tagging5 = Tagging.create!({tag_id: tag2.id, track_id: t24.id})

t25 = Track.create!({
  title: "Dirty Diana",
  description: "But still kinda classy",
  creator_id: u2.id,
  plays: 187,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/09+-+Dirty+Diana+%5BRemastered%5D.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
tagging6 = Tagging.create!({tag_id: tag1.id, track_id: t25.id})


u3 = User.create!({
  username: "jakefromStateFarm",
  password: "goodneighbor"
})

t31 = Track.create!({
  title: "Jazzy Joint",
  description: "HEY YOU GUYS",
  creator_id: u3.id,
  plays: 5,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08+Jazzy+Joint.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/alienguy.jpg')
})
tagging7 = Tagging.create!({tag_id: tag7.id, track_id: t31.id})

t32 = Track.create!({
  title: "What up",
  description: "Womp womp",
  creator_id: u3.id,
  plays: 19,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/01+Closing+Time.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/bart.png')
})
tagging8 = Tagging.create!({tag_id: tag9.id, track_id: t32.id})

u4 = User.create!({
  username: "funkyFresh",
  password: "funkyfresh",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/pic-dude.jpg')
})

t41 = Track.create!({
  title: "Wake Me Up",
  description: "",
  creator_id: u4.id,
  plays: 52,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/01+Wake+Me+Up.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover1.jpg')
})
tagging9 = Tagging.create!({tag_id: tag7.id, track_id: t41.id})
tagging10 = Tagging.create!({tag_id: tag9.id, track_id: t41.id})

t42 = Track.create!({
  title: "Men In Black",
  description: "",
  creator_id: u4.id,
  plays: 33,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/01+Will+Smith+-+Men+In+Black.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover1.jpg')
})
tagging10 = Tagging.create!({tag_id: tag8.id, track_id: t42.id})
tagging11 = Tagging.create!({tag_id: tag6.id, track_id: t42.id})

t43 = Track.create!({
  title: "Hey Brother",
  description: "",
  creator_id: u4.id,
  plays: 86,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/03+Hey+Brother.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover1.jpg')
})
tagging12 = Tagging.create!({tag_id: tag10.id, track_id: t43.id})

u5 = User.create!({
  username: "maxine",
  password: "maxpayne",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/pic-girl.jpg')
})

t51 = Track.create!({
  title: "Batman 1",
  description: "",
  creator_id: u5.id,
  plays: 12,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/04+-+Aggressive+Expansion.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover2.jpg')
})
tagging13 = Tagging.create!({tag_id: tag12.id, track_id: t51.id})

t52 = Track.create!({
  title: "Zelda",
  description: "",
  creator_id: u5.id,
  plays: 24,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/04+-+Hyrule+Market+Orchestrated.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover2.jpg')
})
tagging14 = Tagging.create!({tag_id: tag12.id, track_id: t52.id})

t53 = Track.create!({
  title: "Batman 2",
  description: "",
  creator_id: u5.id,
  plays: 22,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08+-+Like+a+Dog+Chasing+Cars.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover1.jpg')
})
tagging15 = Tagging.create!({tag_id: tag12.id, track_id: t53.id})


u6 = User.create!({
  username: "baby",
  password: "babyface",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/pic-kid.jpg')
})

t61 = Track.create!({
  title: "In The End",
  description: "",
  creator_id: u6.id,
  plays: 526,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08_-In_The_End.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover3.jpg')
})
tagging16 = Tagging.create!({tag_id: tag1.id, track_id: t61.id})
tagging17 = Tagging.create!({tag_id: tag5.id, track_id: t61.id})

t62 = Track.create!({
  title: "Numb",
  description: "",
  creator_id: u6.id,
  plays: 773,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/13+-+Numb.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover3.jpg')
})
tagging18 = Tagging.create!({tag_id: tag1.id, track_id: t62.id})
tagging19 = Tagging.create!({tag_id: tag5.id, track_id: t62.id})

u7 = User.create!({
  username: "happy",
  password: "golucky",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/pic-girl2.png')
})

t71 = Track.create!({
  title: "Scars to your beautiful",
  description: "",
  creator_id: u7.id,
  plays: 76,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/10+Scars+To+Your+Beautiful.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover4.png')
})
tagging20 = Tagging.create!({tag_id: tag2.id, track_id: t71.id})

t72 = Track.create!({
  title: "Batman again",
  description: "",
  creator_id: u7.id,
  plays: 76,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/09+-+I+Am+the+Batman.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover5.jpg')
})
tagging21 = Tagging.create!({tag_id: tag12.id, track_id: t72.id})

t73 = Track.create!({
  title: "Chariot",
  description: "",
  creator_id: u7.id,
  plays: 889,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/Gavin+DeGraw+-+Chariot.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/cover2.jpg')
})
tagging22 = Tagging.create!({tag_id: tag2.id, track_id: t73.id})


Comment.create!({
  body: "first",
  track_id: t72.id,
  author_id: u4.id
})
Comment.create!({
  body: "beautiful!",
  track_id: t21.id,
  author_id: u5.id
})
Comment.create!({
  body: "totally agree and I didn't even listen to it",
  track_id: t21.id,
  author_id: u3.id
})
Comment.create!({
  body: "i'm just writing comments at this point",
  track_id: t32.id,
  author_id: u7.id
})
Comment.create!({
  body: "every time i hear this song...",
  track_id: t42.id,
  author_id: u4.id
})
Comment.create!({
  body: "your boy d-wade gonna great in cleveland",
  track_id: t62.id,
  author_id: u4.id
})
Comment.create!({
  body: "michael jackson is the best",
  track_id: t52.id,
  author_id: u3.id
})
Comment.create!({
  body: "spaghetti and meatballs",
  track_id: t31.id,
  author_id: u4.id
})
Comment.create!({
  body: "mom's spaghetti",
  track_id: t21.id,
  author_id: u1.id
})
Comment.create!({
  body: "rocket mannnnnnnn",
  track_id: t22.id,
  author_id: u2.id
})
Comment.create!({
  body: "on the surface he looks calm and ready",
  track_id: t21.id,
  author_id: u5.id
})
Comment.create!({
  body: "anyone worried about the state of our nation right now?",
  track_id: t31.id,
  author_id: u6.id
})
Comment.create!({
  body: "i paid way too much money for that other streaming site that is inferior to this one",
  track_id: t22.id,
  author_id: u7.id
})
Comment.create!({
  body: "play button works great!",
  track_id: t22.id,
  author_id: u4.id
})
Comment.create!({
  body: "i heard an upcoming feature is audio visualization, sounds really cool",
  track_id: t23.id,
  author_id: u3.id
})
Comment.create!({
  body: "hello everyone!",
  track_id: t11.id,
  author_id: u5.id
})
Comment.create!({
  body: "demo login password is... password. Surprise!",
  track_id: t51.id,
  author_id: u3.id
})
Comment.create!({
  body: "lots of cool songs you can put on this site",
  track_id: t51.id,
  author_id: u1.id
})
Comment.create!({
  body: "front page is awesome",
  track_id: t61.id,
  author_id: u2.id
})
Comment.create!({
  body: "what happens if you stuff a turkey into a chicken?",
  track_id: t61.id,
  author_id: u4.id
})
Comment.create!({
  body: "why did the chicken cross the road?",
  track_id: t72.id,
  author_id: u6.id
})
Comment.create!({
  body: "what song is dis",
  track_id: t31.id,
  author_id: u6.id
})
Comment.create!({
  body: "mashed potatoes sound really good right now",
  track_id: t31.id,
  author_id: u7.id
})
Comment.create!({
  body: "i should not have coded this while hungry",
  track_id: t11.id,
  author_id: u3.id
})
Comment.create!({
  body: "do you guys brush first or floss first?",
  track_id: t11.id,
  author_id: u3.id
})
Comment.create!({
  body: "bro what kind of question is that",
  track_id: t11.id,
  author_id: u2.id
})
Comment.create!({
  body: "new phone who dis?",
  track_id: t72.id,
  author_id: u4.id
})
Comment.create!({
  body: "allen iverson is amazing",
  track_id: t31.id,
  author_id: u5.id
})
Comment.create!({
  body: "gavin degraw is so smooth",
  track_id: t42.id,
  author_id: u6.id
})
Comment.create!({
  body: "who wrote this track?",
  track_id: t51.id,
  author_id: u2.id
})
Comment.create!({
  body: "like who came up with these lyrics doe",
  track_id: t72.id,
  author_id: u1.id
})
Comment.create!({
  body: "anyone find any lyrics to this track",
  track_id: t62.id,
  author_id: u6.id
})
Comment.create!({
  body: "this is a sick beat",
  track_id: t61.id,
  author_id: u7.id
})
Comment.create!({
  body: "spiderman is my favorite avenger",
  track_id: t61.id,
  author_id: u2.id
})
Comment.create!({
  body: "hello from the otter slide?",
  track_id: t11.id,
  author_id: u2.id
})
Comment.create!({
  body: "bing bong bing bing bong",
  track_id: t31.id,
  author_id: u4.id
})
Comment.create!({
  body: "music for the sooouuuuullll",
  track_id: t32.id,
  author_id: u3.id
})
