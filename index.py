import pandas as pd 

# import train data 
train_data = pd.read_csv('./data/train.csv')

# read first few lines of training data
print train_data.head(n=4)