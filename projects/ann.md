## Neural Networks

**Project description:** In this blog post, I go into my project where I built a simple feed forward neural network from scratch, alongside a convolutional neural network (using pytorch). Neural networks have been widely recognized as powerful tools in machine learning, enabling us to tackle complex problems. As someone aspiring to enter the data science field, I was determined to gain a thorough understanding and practical experience in implementing these networks.

This small project recap aims to provide an overview of my project. It doesn't go into the details of neural networks, it serves as a reflective piece and a comprehensive write up of my project. For more in depth explanations check out the notebooks on GitHub, where I have implemented the neural networks and deeply explained the conepts. 


### Feed Forward Neural Networks: 

The project I chose to tackle was image classification using the mnist dataset. If you don't know about the mnist dataset it is a large dataset of images of hand written digits numbers 0-9. Our job is to correctly classify the numbers. 
 

A fully connected feed forward neural network is formed by an input layer, some number of hidden layers, and an output layer. All of these layers contain some number of neurons. The input layer has as many neurons as it does inputs. For example if you have 10 input variables then your input layer will have 10 nuerons. Similarly if we have 3 classes then our output layer will have 3 output layers. In terms of hidden layers we can have as many as we choose but we also want to make sure we have a approriate ammount. If we have too many or too little it could affect the performance of the neural network. In my initial attempt I had too many hidden layers which could introduce the problem of the vanishing gradient. Here is a visual representation.

<img src="../images/neural_network.png" atl="neural network">

### Convolutional Neural Networks:
As mentioned I go into greater detail in the notebook where I implement the model. However here is a brief rundown on how the convolituonal neural network works. We perform a convolution on some image using a kernel (filter). What that means is that we have some filter that is represented by a matrix which we move over our image (also a matrix). As we do that we matrix multiply it and get a new image all together. What this is doing is feature extraction. It is picking up on things from the image that will help us classify our image. After doing this enough times we then pass those features to a fully connected neural network which I previously explained before. For this part of my project I used a cats and dogs dataset which is just a dataset containing images of cats and dogs. I thought it would a good task and I like cats and dogs so that was fun.


### Conclusion
Learning about neural networks has been great. Taking on this project has really opened up my eyes to the world of deep learning. As I interact with technology in my daily life I reflect on how deep learning is probably used in a certain thing I may be using such as phone, website etc. I now also understand how neural networks work and can implement them into solving problems in the real world. I have truly enjoyed working on these two projects. Addtionally something that was really helpful while trying to learn about neural networks was the 3blue1brown series on them which you can find [here](https://youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi)

Don't forget to check out the notebooks for more detailed explanations on neural networks.

link to fully connected feed forward neural network [notebook](https://github.com/GaelGil/notebooks/blob/master/back-propagation/back_propagation.ipynb)

link to convolutional neural networks [notebook](https://github.com/GaelGil/notebooks/blob/master/convolutional_nueral_networks/convolutiobal_neural_networks.ipynb)
