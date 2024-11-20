const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Serve static files
app.use(express.static('public'));

// Save resume data
app.post('/save-resume', (req, res) => {
    const { username, resumeData } = req.body;

    if (!username || !resumeData) {
        return res.status(400).send("Username and resume data are required");
    }

    fs.writeFileSync(`resumes/${username}.json`, JSON.stringify(resumeData));
    res.send({ url: `https://yourdomain.com/resume/${username}` });
});

// Render resume by username
app.get('/resume/:username', (req, res) => {
    const username = req.params.username;
    const filePath = `resumes/${username}.json`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("Resume not found");
    }

    const resumeData
