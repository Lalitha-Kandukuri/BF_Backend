const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// POST Route
app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highestLowerCase = '';

    // Process the input data
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && item > highestLowerCase) {
                highestLowerCase = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "Lalitha_kandukuri_11102003", 
        email: "lalitha.21bce8936@vitapstudent.ac.in",     
        roll_number: "21BCE8936",     
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowerCase ? [highestLowerCase] : []
    };

    res.status(200).json(response);
});

// GET Route
app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };
    res.status(200).json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
