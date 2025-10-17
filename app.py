# from flask import Flask, request, jsonify
# import joblib
# import numpy as np

# app = Flask(__name__)

# # Load your trained ML model
# model = joblib.load('loan_model.pkl')

# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()

#     # Extract values from JSON
#     gender = 1 if data['Gender'] == 'Male' else 0
#     education = 1 if data['Education'] == 'Graduate' else 0
#     income = float(data['Income'])
#     loan_amount = float(data['LoanAmount'])
#     credit_history = float(data['CreditHistory'])

#     # Prepare feature array for model prediction
#     features = np.array([[gender, education, income, loan_amount, credit_history]])

#     # Make prediction
#     prediction = model.predict(features)

#     # Convert prediction to human-readable form
#     status = 'Approved ✅' if prediction[0] == 1 else 'Not Approved ❌'

#     return jsonify({'prediction': status})

# if __name__ == '__main__':
#     app.run(debug=True)
print(xgboost.__version__)