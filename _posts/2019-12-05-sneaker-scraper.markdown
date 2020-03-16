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


### What I'll be talking about
In this project I scraped data from a sneaker resell website using Scrapy (a pythom library). Scrapy allows you to scape a website take data or information from that websites html. For those who don't know sneakers can go for crazy prices after its release weather its a colaboration or limited release or simply just a classic. This webiste allows users to sell and buy sneakers and filter them by year,brand, price etc. this made it easier to scrape data later on as well. In this blog post I will be talking about my first attempts, what tools I used, how I scraped the data, how I formated and stored the data, cleaned some of the data, graphing the data, lastly what I learned/challenges. 


<!-- > - collecting data  -->
### How I did it
In my first attempt to scarping the website I came across an issue. That issue was a 401 error code which means unathorized. At first I did not know what this meant I thought that I had messed up something in the code but as I read online I found out what it meant. This meant that my request to access the page was being denied. This usually happens because certain major websites block any sort of traffic that they suspect is bot like.

I first started using the beatiful soup library which is where I encountered the 401 issue. I then did more research and found a new librabry that would help me get around this issue. I used the Scarpy library which was pretty simple to learn as well as the SelectorGadget exentsion on the Chrome browser. The SelectorGadget was one of the most important tools because it allowed me to use the extension to grab the tags that the data is associated with. For those of you who don't know the ussual way to scrape data is by finding which html tags are connected to it sending requests to the website and only take what we wan. Here's a small sample of my code 

~~~python

class SneakerSpiderSpider(scrapy.Spider):
    name = 'Sneaker_spider'
    page_number = 2
    start_urls = [
        'https://stockx.com/sneakers/release-date?years=2019&page=1',
        ]

    def parse(self, response):
        # selects a sneaker container div
        sneakers = response.css('.browse-tile')
        for sneaker in sneakers:
            # selects the name of the sneaker, price, and release date
            sneaker_name = sneaker.css('.hbRDwP , .hbRDwP div').css('::text').extract()
            sneaker_price = sneaker.css('.cziEBO::text').extract()
            sneaker_release_date = sneaker.css('.change::text').extract()



            items = ShoesItem()
            items['sneaker_name'] = sneaker_name
            items['sneaker_price'] = sneaker_price
            items['release_date'] = sneaker_release_date

            yield items

        next_page = 'https://stockx.com/sneakers/release-date?years=2019&page='  + str(SneakerSpiderSpider.page_number) + ''
        if SneakerSpiderSpider.page_number <= 25:
            SneakerSpiderSpider.page_number += 1
            yield response.follow(next_page, callback=self.parse)

~~~


The code above also allowed me to go to everypage on the website. Some limitations were getting the size and year. I could visit everypage and get the data but I couldn't go to every page for every year for every size. 

### Pipeline
Now that we had accesed to the website and the data we wanted it we had to proccess it. First I had to check what brand the shoe was because I couldn't scrape that but the brand of the shoe was always in the name of the shoe so all I had to do was look for the brand in the name. Then I had to set the price to only be a integer and ignore the `$`. 


### Storing the data



### Cleaning the data
Once I had my data it was now time to clean it or get it in a format I wanted it. 
The formant I had it was 



The most important part in terms of cleaning was just getting the date from `03/6/2020` to `2020`.

Once I had that I could now group every shoe by its release year.


### Graphing the data
So one of the things I first graphed was the resell prices for shoes by year and here is the graph for that.

<img src="resell_prices_by_year.png">

As you can see the resell prices for older shoes are a lot higher then the new ones. The downside to this graph is that for the the blue line (nike) on the year 2000 it scraped no data for some reason so its just zero. For the green line(adidas) it is zero up until 2007 because their isn't much data for them. Their shoes became more popular just more recently as opposed to nike and jordan whos shoes have constantnly been in demand.


##### What I learned
From doing this project I learned a lot about sraping data/collecting and how comapines wouldn't necessarily do that they would just buy the data. One of the other important things was learning how to use jupyter notebooks, I had heard about them before and used them slightly but this was a good chance to actually use it for a project. With that I also learned about how to graph data using matplotlib. 


<!-- 
> - what i learned
> - challenges
> - future improvements -->