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
 

A fully connected feed forward neural network is formed by an input layer, some number of hidden layers, and an output layer. All of these layers contain some number of neurons. The input layer has as many neurons as it does inputs. For example if you have 10 input variables then your input layer will have 10 nuerons. Similarly if we have 3 classes then our output layer will have 3 output layers. In terms of hidden layers we can have as many as we choose but we also want to make sure we have a approriate ammount. If we have too many or too little it could affect the performance of the neural network. In my initial attempt I had too many hidden layers which could introduce the problem of the vanishing gradient. Here is a visual representation .


The neurons are the little circles in the image above. The layers are all the neurons in a column. The lines that are connecting the layers in the image above are called weights. These weights are what we are trying to learn this value of. We want to adjust them carefully during training so that our neural network gives us the lowest error. We can choose to set them randomly or to change them manually but that is not an efficient system. As we can see we have so many weights so that would take a really long time. Now that we know what makes up a neural network and now that we know that we are trying to learn the values of these weights, how do we even use them? This led to learning about back propagation which is the algorithm that we use to update the weights carefully. Learning about this was great and I learned so much abnout optimization. After hours of research and coding I was able to implement one and get good results. Make sure to check out the notebook below.




### Convolutional Neural Networks:


### Notebooks





### Conclusion/Sources/what helped:
<!-- Embarking on a project that utilized notebooks as a central tool was an enlightening experience. Their versatility and ease of use empowered me to experiment, collaborate, and learn at an accelerated pace. Through this project, I not only gained technical skills but also acquired valuable insights into the importance of data preprocessing, model selection, feature -->
<!-- kid implementing a nn, 3blue1brown etc -->

link to fully connected feed forward neural network [notebook](https://github.com/GaelGil/notebooks/blob/master/back-propagation/back_propagation.ipynb)

link to convolutional neural networks [notebook]()
