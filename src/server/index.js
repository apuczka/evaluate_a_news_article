const textapi = new meaningCloud({
    application_key: process.env.API_KEY
  });
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081 !')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/add', function(req, res) {
    const fromResult = req.body.fromResult
    newEntry = {
                model: req.body.model,
                score_tag: req.body.score,
                agreement: req.body.agreement,
                subjectivity: req.body.subjectivity,
                confidence: req.body.confidence,
                irony: req.body.irony
                }

    console.log(req.body);
    res.send(newEntry);
    
})
