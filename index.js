
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
app.use(express.urlencoded())
app.use(express.static('giffer'))
const gifs = {
    "techlead":"http://157.245.106.185/giffer/KIM.gif"

}
app.post('/', (req, res) => {
    console.log("User searched for: " + req.body.text);
    let url = textToURL(req.body.text)

    res.send(sendtoslack(url))
})

function textToURL(text) {
    if (gifs.hasOwnProperty(text)) {
        return {
            "image_url": gifs[text],
        }
    } else {
        return {
            "text": "Dissa kan giffes:" + Object.keys(gifs),
        }
    }
}

function sendtoslack(content){
    const data = {
        response_type: "in_channel",
        attachments: [
            content
        ]        
      };

      return data
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   