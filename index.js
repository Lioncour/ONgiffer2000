
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
app.use(express.urlencoded())
const gifs = {
    "techlead":"https://media.giphy.com/media/RtsDw93ouK74Y/giphy.gif"

}
app.post('/', (req, res) => {
    console.log("User searched for: " + req.body.text);
    let url = textToURL(req.body.text)

    res.send(sendtoslack(url))
})

function textToURL(text) {
    if (gifs.hasOwnProperty(text)) {
        return gifs[text]
    } else {
        return "Dissa kan giffes:" + Object.keys(gifs)
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