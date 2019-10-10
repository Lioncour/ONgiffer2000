
const express = require('express')
const axios = require('axios')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    console.log("marshalla");
    sendtoslack();
    res.send('Hello World!')
})

async function sendtoslack(){
    console.log("test");
    const data = {
        channel: '#homm3',
        username: 'Heroes Turn Helper',
        text: "teksttest",
        icon_emoji: ':homm3:',
        attachments: [
            {
                "image_url": "https://media.giphy.com/media/RtsDw93ouK74Y/giphy.gif",
                
            }
        ]        
      };
      const testUrl =
        'https://hooks.slack.com/services/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';
      const url =
        'https://hooks.slack.com/services/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';    
    try {
        
        const response = await axios.post(url, JSON.stringify(data))
    }
    catch(error){
        console.log ("catchanders", error);
    }
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   