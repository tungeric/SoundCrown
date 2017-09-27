# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

u1 = User.create!({
  username: "demo",
  password: "password"
})

t11 = Track.create!({
  title: "Hey what it is",
  description: "The title doesn't fit the song",
  creator_id: u1.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08+Jazzy+Joint.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/alienguy.jpg')
})

u2 = User.create!({
  username: "TheKing",
  password: "michaeljackson",
  avatar: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/michael_jackson.jpg')
})

t21 = Track.create!({
  title: "Rock with You",
  description: "Allll niiiiight",
  creator_id: u2.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/02+-+Rock+with+You+(Single+Version).mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
t22 = Track.create!({
  title: "Off the Wall",
  description: "How to live life",
  creator_id: u2.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/05+-+Off+the+Wall.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
t23 = Track.create!({
  title: "Human Nature",
  description: "it's there",
  creator_id: u2.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/07+-+Human+Nature.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
t24 = Track.create!({
  title: "Man in the Mirror",
  description: "Why did I add a description section?",
  creator_id: u2.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/07+-+Man+in+the+Mirror+%5BRemastered%5D.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})
t25 = Track.create!({
  title: "Dirty Diana",
  description: "But still kinda classy",
  creator_id: u2.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/09+-+Dirty+Diana+%5BRemastered%5D.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/mjax-tracks.png')
})


u3 = User.create!({
  username: "jakefromStateFarm",
  password: "goodneighbor"
})

t31 = Track.create!({
  title: "Jazzy Joint",
  description: "HEY YOU GUYS",
  creator_id: u3.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/08+Jazzy+Joint.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/alienguy.jpg')
})
t32 = Track.create!({
  title: "What up",
  description: "Womp womp",
  creator_id: u3.id,
  audio: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/audios/_default/01+Closing+Time.mp3'),
  cover_art: open('https://s3-us-west-1.amazonaws.com/soundcrown-pro/tracks/cover_arts/_defaults/bart.png')
})
