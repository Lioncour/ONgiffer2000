
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
app.use(bodyParser);

app.post('/', (req, res) => {
    console.log("User searched for: " + req.body.text);
    let url = textToURL(req.body.text)

    if (url === null) {
        res.status(404).send('Not found');
    } else {
        res.send(sendtoslack(url))
    }
})

function textToURL(text) {
    switch (text) {
        case "techlead":
            return "https://media.giphy.com/media/RtsDw93ouK74Y/giphy.gif"
        default:
            return null
        }
}

function sendtoslack(url){
    const data = {
        response_type: "in_channel",
        attachments: [
            {
                "image_url": url,
            }
        ]        
      };

      return data
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   