const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParse.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.post('/submit.profile', (req, res) => {
    const{
        firstName,
        lastName,
        email,
        phone,
        subjects,
        studyTimes,
        location
    } = req.body;

    console.long('Submitted Profile:', {
        firstName,
        lastName,
        email,
        phone,
        subjects, 
        studyTimes, 
        location
    });

    res.send("Profile created successfully!");
});

app.listen(port, () => {
    console.log('Server is running on http://host:${port}');
});