const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.urlencoded());
app.use(express.static('giffer'));
const gifs = {
  lett: 'https://ongiffer.herokuapp.com/20kglett.gif',
  backend: 'https://ongiffer.herokuapp.com/techlead.gif',
  brukervennlig: 'https://ongiffer.herokuapp.com/brukervennlig.gif',
  bukseseler: 'https://ongiffer.herokuapp.com/bukseseler.gif',
  danse: 'https://ongiffer.herokuapp.com/dans.gif',
  frontend: 'https://ongiffer.herokuapp.com/frontend.gif',
  hitman: 'https://ongiffer.herokuapp.com/hitman.gif',
  ios: 'https://ongiffer.herokuapp.com/ios.gif',
  kaffe: 'https://ongiffer.herokuapp.com/kaffe.gif',
  oppfinner: 'https://ongiffer.herokuapp.com/oppfinner.gif',
  ungdom: 'https://ongiffer.herokuapp.com/ungdom.gif',
  alko: 'https://ongiffer.herokuapp.com/alko.gif',
  kos: 'https://ongiffer.herokuapp.com/kos.gif',
  gimse: 'https://ongiffer.herokuapp.com/gimse.gif',
  okr: 'https://ongiffer.herokuapp.com/okr.gif',
};

app.use(express.static(__dirname + '/giffer'));

app.post('/', (req, res) => {
  console.log('User searched for: ' + req.body.text);
  let url = textToURL(req.body.text, req.body.thread_ts);
  res.send(sendtoslack(url));
});

app.get('/', (req, res) => {
  res.send('works');
});

function textToURL(text) {
  if (gifs.hasOwnProperty(text)) {
    return {
      image_url: gifs[text],
    };
  } else {
    return {
      text: 'Dissa kan giffes:' + Object.keys(gifs).join('\n'),
    };
  }
}
function sendtoslack(content, thread) {
  const data = {
    response_type: 'in_channel',
    thread_ts: thread,
    attachments: [content],
  };
  return data;
}
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
