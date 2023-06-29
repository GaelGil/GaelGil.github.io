---
layout: post
title:  "Basics of Neural Networks"
permalink: /neural_networks/
date:   2022-05-06 12:33
categories: data-science neural-networks
---


### Introduction:
In this blog post, I delve into my project where I built a simple feedforward neural network from scratch, alongside a convolutional neural network (using pytorch). Neural networks have been widely recognized as powerful tools in machine learning, enabling us to tackle complex problems. As someone aspiring to enter the data science field, I was determined to gain a thorough understanding and practical experience in implementing these networks.

This blog post aims to provide an overview of my project. While it doesn't delve into the intricate details of neural networks, it serves as a reflective piece and a comprehensive write-up of my project. For more in-depth explanations and to explore the mathematical aspects, I encourage you to refer to the notebooks on GitHub, where I have implemented the neural networks and elaborated on the underlying concepts.


### Feed Forward Neural Networks: 

The project I chose to tackle was image classification using the mnist dataset. If you don't know about the mnist dataset it is a large dataset of images of hand written digits numbers 0-9. Our job is to correctly classify the numbers. 
 

A fully connected feed forward neural network is formed by an input layer, some number of hidden layers, and an output layer. All of these layers contain some number of neurons. The input layer has as many neurons as it does inputs. For example if you have 10 input variables then your input layer will have 10 nuerons. Similarly if we have 3 classes then our output layer will have 3 output layers. In terms of hidden layers we can have as many as we choose but we also want to make sure we have a approriate ammount. If we have too many or too little it could affect the performance of the neural network. In my initial attempt I had too many hidden layers which could introduce the problem of the vanishing gradient. Here is a visual representation.

<img src="../images/fcnn" atl="neural network">


The neurons are the little circles in the image above. The layers are all the neurons in a column. The lines that are connecting the layers in the image above are called weights. These weights are what we are trying to learn this value of. We want to adjust them carefully during training so that our neural network gives us the lowest error. We can choose to set them randomly or to change them manually but that is not an efficient system. As we can see we have so many weights so that would take a really long time. Now that we know what makes up a neural network and now that we know that we are trying to learn the values of these weights, how do we even use them? This led to learning about back propagation which is the algorithm that we use to update the weights carefully. Learning about this was great and I learned so much abnout optimization. After hours of research and coding I was able to implement one and get good results. Make sure to check out the notebook below.




### Convolutional Neural Networks:
As mentioned I go into greater detail in the notebook where I implement the model. However here is a brief rundown on how the convolituonal neural network works. We perform a convolution on some image using a kernel (filter). What that means is that we have some filter that is represented by a matrix which we move over our image (also a matrix). As we do that we matrix multiply it and get a new image all together. What this is doing is feature extraction. It is picking up on things from the image that will help us classify our image. After doing this enough times we then pass those features to a fully connected neural network which I previously explained before. For this part of my project I used a cats and dogs dataset which is just a dataset containing images of cats and dogs. I thought it would a good task and I like cats and dogs so that was fun.


### Conclusion
Learning about neural networks has been great. Taking on this project has really opened up my eyes to the world of deep learning. As I interact with technology in my daily life I reflect on how deep learning is probably used in a certain thing I may be using such as phone, website etc. I now also understand how neural networks work and can implement them into solving problems in the real world. I have truly enjoyed working on these two projects. Addtionally something that was really helpful while trying to learn about neural networks was the 3blue1brown series on them which you can find [here](https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)

Don't forget to check out the notebooks for more detailed explanations on neural networks.

link to fully connected feed forward neural network [notebook](https://github.com/GaelGil/notebooks/blob/master/back-propagation/back_propagation.ipynb)

link to convolutional neural networks [notebook](https://github.com/GaelGil/notebooks/blob/master/convolutional_nueral_networks/convolutiobal_neural_networks.ipynb)
