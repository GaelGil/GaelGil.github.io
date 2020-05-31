---
layout: post
title:  "Logistic Regression"
permalink: /logistic_regression/
date:   2020-05-21 12:33
image: ../assets/images/logistic_function.png
categories: jekyll update
---



In this post I'll be talkiing about logistic regression. I won't be getting into the math too much, I will just do a small overview of what I learned while using logistic reggression in a project. Here is a link to my notebook on github where I did <a href="https://github.com/GaelGil/notebooks/blob/master/logistic_regression/logistic_regression.ipynb"> all my work notebook</a>


Logistic regression is used for classification as opposed to linear regression which is used to predict a value. For example lets say we wanted predict weather a mice is obese or not obese given some features we would use logistic regression. In my project I used height and weight as features but you can try other features as well such as `eye color` or `tail length`. But as you can assume some features don't really matter and won't help when predicting in this case `eye color` might not help as much. 


One of the first things I did was graph my data to show that the data has a linear relationship. Heres picture of what that looked like.
<img src="../assets/images/mice_graph.png" alt="mice data graphed">

My dataset had 3 columns one of which was `type` (obese, not oebese) so my next step was to normalize that column. This means I made that colum be represent by 1 being obese and 0 not obese. This would allow me to now be able to use that colum later on when modeling. Once I normalized the `type` column two new colums were added to my dataframe which were `type_Not Obsese` and `type_Obsese`. I dropped `type_Not Obsese` because I didn't neeed two columns that represent the same thing. Once I had that I could now fit my data into the model. Once I fit my data into my model I got the probability of each mice being part of a classes using `model.predict_proba()` instead of using `model.predict()` which would give me the 1 or 0. I wanted probabilities so I could graph what the function looks like. Here is the photo of our function graphed with our dataset. 

<img src="../assets/images/logistic_function.png" alt="graph">


Laslty I had to evaluate the model and a common way to evaluate a classificaton algorithm is by using a confusion matrix and a f1 score. I did both but because you can visualize a confusion matrix here is a photo of my confusion matrix. 

<img src="../assets/images/confusion_matrix.png" alt="confusion matrix">




