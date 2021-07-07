---
layout: post
title:  "Sneaker Prices"
permalink: /sneakers/
date:   2019-12-05 12:33
image: ../assets/images/sneakers.jpg
categories: jekyll update
---

link to the github [repo](https://github.com/GaelGil/sneaker-database)
link to the live [project](https://sneaker-prices.herokuapp.com/)
link to the [sneaks-api]()

# The project
In this project I created a website where you can compare sneaker resell prices. I created a frontend to compare sneaker prices by looking at the data to see where you can buy for the best price. This was a fun project for me seeing as how one of my other passions is sneakers and I don't do much frontend. This is a project I can actually use in my personal life when buying sneakers so I went off of what I would find useful when buying sneakers. One thing to note is that for someone who doesn't have much knowledge on snaekers this can be confusing so heres some context. Sneakers can at release date can retail for around `$160` to `$250` but people can resell them for up to thousands. Take the Jordan 1 Off White Chicago for example pictured here:

This sneaker retailed for `$160` but ressells for around `$5,000`. However some resellers will price differently at each site and depending on size. 

# The Idea
For my initial idea I was going to create a database of sneakers and their prices through time to determine when to buy for a good price. For example if I wanted to see how the price of a `Jordan 1` changes through time so I can determine if the current price is a low price or a high price and see if I should wait to buy or not. I was able to do this but there were some flaws. When scraping price data the data that is scraped is data that the site would display but because each site always displays the cheapest price despite of siz. This created a huge price difference meaning a sneaker that goes for around `400` could at times display a price of `230`. If I had wanted to create a more price acurate model I would need to create multiple tables or scrape more data. This comes to my next issue my google cloud platform money was running out. This means I removed the models and have now swtiche to heroku. What I ended up doing was getting the current price at each site and displaying a bargraph.

# How I created it
I found the sneaks-api and thought it was a super cool tool. This node module is what I used to get the sneaker data needed for the project. I just created a frontend to better visualize prices. I saw that the creator made a price checker but I noticed that it was too much information all at once. I deicided I wanted to use the scraper to display more useful data and make a more custom frontend. I wanted to display data that I would want to look at personaly when I would be buying sneakers. I used the google cloud platform to host the site aswell as the mdoel that stored all the data. This was my first time using google cloud platform and my first time creating a project connecting a site and mdoels. I had previously made flask apps and some expressjs apps but never deployoed them. This was defninelty something that I found iteresting and fun but at times very difficult. In the end tho my credits on google cloud platform ran out so I moved to heroku. 


# The product
The site is live on heroku [here](https://sneaker-prices.herokuapp.com/). The current version has a bargraph so you can compare a sneakers current price at available resell sites. You can also select which size you want to check for
