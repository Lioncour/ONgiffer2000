
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000

app.post('/', (req, res) => {
    console.log("User searched for: " + req.query.text);
    res.send(sendtoslack())
})

function sendtoslack(){
    const data = {
        response_type: "in_channel",
        attachments: [
            {
                "image_url": "https://media.giphy.com/media/RtsDw93ouK74Y/giphy.gif",
            }
        ]        
      };

      return data
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   