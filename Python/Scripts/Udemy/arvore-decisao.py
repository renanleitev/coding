# Árvore de Decisão

from sklearn.metrics import r2_score
from sklearn.tree import DecisionTreeRegressor
import pandas as pd
# %%
dataset = pd.read_csv(r'C:\Users\renan\Documents\Programação\VsCode\Python\Intensivão Python\Aula 4\advertising.csv') # Other type of file could be used which contains tabular data # noqa
# %%
# Target column must be last to work below all cell's code correctly, If you don't have your target colum last then make necessary changes to below two lines of code # noqa
X = dataset.iloc[:, 1:-1].values
y = dataset.iloc[:, -1].values
# %%
# Do required transformation(s) for X and/or y (If required)
# %%
regressor = DecisionTreeRegressor(random_state=997).fit(X, y)
# %%
y_pred = regressor.predict(X)
# %%
print(r2_score(y, y_pred))
