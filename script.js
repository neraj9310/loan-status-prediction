// Listen for form submission
document.getElementById('loanForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop page refresh

    // Get form data
    const data = {
        Gender: document.getElementById('gender').value,
        Education: document.getElementById('education').value,
        Income: document.getElementById('income').value,
        LoanAmount: document.getElementById('loanAmount').value,
        CreditHistory: document.getElementById('creditHistory').value
    };

    // Optional: Basic validation
    if (!data.Gender || !data.Education || !data.Income || !data.LoanAmount || !data.CreditHistory) {
        alert("⚠️ Please fill out all fields before predicting.");
        return;
    }

    try {
        // Send POST request to Flask backend
        const response = await fetch('http://127.0.0.1:5000/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        // Show result on page
        const resultDiv = document.getElementById('result');
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <h3>Prediction Result</h3>
            <p><strong>Loan Status:</strong> ${result.prediction}</p>
        `;
    } catch (error) {
        console.error('Error:', error);
        alert("❌ Something went wrong. Please check if Flask server is running.");
    }
});
