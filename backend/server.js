// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact/save', (req, res) => {
    console.log('Received contact form data:', req.body);
    // Simulate saving to a database
    // In a real app you would insert into DB here
    res.json({ message: 'Message received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Mock backend listening on http://localhost:${PORT}`);
});
