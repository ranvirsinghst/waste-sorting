# Waste Classification

### Introduction
I'm creating a computer vision app for classifying different types of waste as part of my internship at Edgeworx in Berkeley, CA. This application will run on an edge node with a camera, to see an item held over the waste bins in the office and provide a notification as to where it belongs. 
### Contents
This repository links to a dataset of several thousand images sourced from three separate datasets (cited below). There is also a folder titled "models" containing versions of the TFLite model I have trained using Google's Vertex AI on small subsets of the dataset. From now on, I intend to annotate my data on Roboflow and train my models on Create ML.
This repo also contains an instructions pdf to assist with the object labeling process.
### Download
You can download my dataset from this [Google Drive link](https://drive.google.com/file/d/1ecWbU6FGsLzrrS09xpSWisWMk-PFG6TW/view?usp=sharing).
### Contributing
Given the difficulty in finding a pre-annotated dataset or pre-trained model for this specific use case, I'm seeking help with annotating the images contained in this repository. Please reach out to me at ranvir@edgeworx.io if you are at all interested in helping. I would invite you to a labeling batch on Roboflow and assign you images to create bounding boxes for.
### Citations
 - MJU-Waste: Tao Wang, Yuanzheng Cai, Lingyu Liang, Dongyi Ye. A Multi-Level Approach to Waste Object Segmentation. Sensors 2020, 20(14), 3816.
 - Gary Thung - TrashNet: https://github.com/garythung/trashnet
 - Sarah Frost - CompostNet: https://github.com/sarahmfrost/compostnet
 - Kritik Seth - Fruits and Vegetables Image Recognition: https://www.kaggle.com/datasets/kritikseth/fruit-and-vegetable-image-recognition

