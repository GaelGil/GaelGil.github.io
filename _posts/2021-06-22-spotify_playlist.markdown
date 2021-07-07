---
layout: post
title:  "Creating Spotify Playlists"
permalink: /spotify/
date:   2021-06-22 12:33
image: ../assets/images/spotify.jpg
categories: jekyll update
---

link to the github [repo](https://github.com/GaelGil/apiPractice)

# About the project
In this project I craeted a python module that creates spotify playlists from the most popular songs in spotify playlists. It uses a some words to search the spotify api for playlists with same words in them. From those spotify playlists that we searched we go through each and find its most popular songs. Those most popular songs get added to the playlist we are trying to craete. I also linked this with my twitter. My twitter reads at mentions and uses those at mentions to search spotify. 
Here is an example

# The Idea /How I created it
My initial idea was to create a python module to turn youtube playlists into spotify playlists after I saw it in a youtube video [here](#). One of the libraries that was used in the video wasn't available anymore so I created something else. I wanted to connect two apis so I decieded to use the twitter api to take requests for a playlist. I wanted this project to help me understand using apis more and I definelty learned a lot from this project.


For the project the tools I used python, the spotify and twitter api. I first started by creating a twitter account and understanding how to tweet and read my timeline from the terminal. Once I felt like I understood enough for what I needed I then moved to understanding the spotify api. Originally I was going to have something similar where I would search spotify playlists and get random songs from each playlist. However as I read the documentation for the spotify api I leanred that each song has a popularity value which I found interesting. I deicded that would be a better way to determine which songs get added to a new playlist.

# The project
This project can be used to on it's own. If you want to create playlists for yourself you can clone the project and use your own api keys and run it. You can also combine it with twitter to have a twitter bot taking requests and then returning a link to the playlist once done. 