console.log("hello");
const express = require('express') //get the express code from modules
const app = express()
const port = 3000

app.use(express.static('public'))


//define router's behaviour: what to return on which request
let esthercount = 0;
app.get('/esther', (req, res) => {
  res.send('hihi')
  esthercount+=1
  console.log(esthercount);
})

//at last we start the server, listening on a specific port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
