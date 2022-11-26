# Regressão Linear

from sklearn.metrics import r2_score
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
# %%
dataset = pd.read_csv(r"C:\Users\renan\Documents\Programação\VsCode\Python\Intensivão Python\Aula 4\advertising.csv") # noqa 
X = dataset.iloc[:, :-1]
y = dataset.iloc[:, -1]
# %%
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=997
)
# %%
model = LinearRegression(fit_intercept=True, n_jobs=-1).fit(X_train, y_train)
# %%
y_predicted = model.predict(X_test)
# %%
print('A taxa de acerto é:', r2_score(y_predicted, y_test))
