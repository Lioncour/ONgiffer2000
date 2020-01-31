
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000
app.use(express.urlencoded())
app.use(express.static('giffer'))
const gifs = {
    "lett":"http://157.245.106.185:3000/20kglett.gif",
    "backend":"http://157.245.106.185:3000/techlead.gif",
    "brukervennlig":"http://157.245.106.185:3000/brukervennlig.gif",
    "bukseseler":"http://157.245.106.185:3000/bukseseler.gif",
    "danse":"http://157.245.106.185:3000/dans.gif",
    "frontend":"http://157.245.106.185:3000/frontend.gif",
    "hitman":"http://157.245.106.185:3000/hitman.gif",
    "ios":"http://157.245.106.185:3000/ios.gif",
    "kaffe":"http://157.245.106.185:3000/kaffe.gif",
    "oppfinner":"http://157.245.106.185:3000/oppfinner.gif",
    "ungdom":"http://157.245.106.185:3000/ungdom.gif"
    "alko":"http://157.245.106.185:3000/alko.gif"
    "kos":"http://157.245.106.185:3000/kos.gif"
    "gimse":"http://157.245.106.185:3000/gimse.gif"
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
            "text": "Dissa kan giffes:" + Object.keys(gifs).join('\n'),
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