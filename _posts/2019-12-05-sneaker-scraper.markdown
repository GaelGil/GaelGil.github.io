---
layout: post
title:  "Sneaker Scraper"
permalink: /sneakers/
date:   2019-12-05 12:33
image: ../assets/images/sneakers.jpg
categories: jekyll update
---
<small>link to my<a href="https://github.com/GaelGil/Sneaker-Scraper/blob/master/analysis/main_data.ipynb"> notebook</a><small><br>
<small>link to my full project on<a href="https://github.com/GaelGil/Sneaker-Scraper"> github</a></small><br><br>


###### What I'll be talking about
<br>
In this project I scraped data from a sneaker resell website using Scrapy a pythom library. Scrapy allows you to scape a website take data or information from that pages html but most importantly . For those who don't know sneakers can go for crazy prices after its release weather its a colaboration or limited release or simply just a classic. This webiste allows users to sell and buy sneakers and filter them by year,brand, price etc. this made it easier to scrape data later on as well. 

In my first attempt to scarping the website I came across an issue. That issue was a 401 error code which means unathorized. At first I did not know what this meant I thought that I had messed up something in the code but as I read online I found out what it meant. This meant that my request to access the page was being denied. This usually happens because certain major websites block any sort of traffic that they suspect is bot like.


<!-- > - collecting data  -->
###### How I did it
I first started using the beatiful soup library which is where I encountered the 401 issue. I then did more research and found a new librabry that would help me get around this issue. I used the Scarpy library which was pretty simple to learn as well as the SelectorGadget exentsion on the Chrome browser. The SelectorGadget was one of the most important tools because it allowed me to use the extension to grab the tags that the data is associated with. For those of you who don't know the ussual way to scrape data is by finding which html tags are connected to it sending requests to the website and only take what we wan. Here's a small sample of my code 

~~~python

~~~

###### Pipeline

###### Storing the data

###### Cleaning the data
Once I had my data it was now time to clean it or get it in a format I wanted it. 
The formant I had it was 



The most important part in terms of cleaning was just getting the date from `03/6/2020` to `2020`.

Once I had that I could now group every shoe by its release year.


##### Graphing the data
So one of the things I first graphed was the resell prices for shoes by year and here is the graph for that.

<img src="resell_prices_by_year.png">

As you can see the resell prices for older shoes are a lot higher then the new ones. 



##### What I learned
From doing this project I learned a lot about sraping data/collecting and how comapines wouldn't necessarily do that they would just buy the data. One of the other important things was learning how to use jupyter notebooks, I had heard about them before and used them slightly but this was a good chance to actually use it for a project. With that I also learned about how to graph data using matplotlib. 


<!-- > - issues with collecting data -->
<!-- > - cleaning data -->
<!-- > - analyzing data  -->
<!-- > - discoveries
> - what i learned
> - challenges
> - future improvements -->