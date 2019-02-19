import pandas as pd
import matplotlib.pyplot as plt 
import seaborn as sns
import IPython as ipython

# figues inline and set visualzation style
print ipython.get_ipython()
# ipython.get_ipython().run_line_magic('matplotlib', 'inline')
sns.set()

# import train data 
train_data = pd.read_csv('./data/train.csv')

# read first few lines of training data
# print train_data.head()

# print train_data.info()

# print train_data.describe()

print sns.countplot(x='Survived', data=train_data)