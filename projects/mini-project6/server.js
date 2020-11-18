const express = require('express')
const app = express()
const port = 3000
const secret = "esther"

let gifts = [];



app.use(express.static('public'))

app.get('/secret', (req, res) => {
  let query = req.query;
  let guess = query.word;
  console.log("someone check this!");
  if (guess == secret) {
    console.log("let them in to the garden");
    res.redirect("/garden");
    // res.sendFile(__dirname +'/public/garden/index.html')
  } else {
    console.log("something is fishy");
    res.redirect("/fishy");
  }
})


app.get('/gift', (req, res) => {
  let query = req.query;
  let gift = query.gift;
  console.log("recieved".gift);
  gifts.push(gift);
  console.log("all the things I have", gifts);
})


app.get('/box', (req, res) => {
  console.log("secrets in my mailbox");
  res.json( {content:gifts, sender:"audience"});
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
