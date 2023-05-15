const express = require('express')
const data = require('./data.json');
const foods = require('./foods.json');
const cors = require('cors');
const app = express()
const port = 5000;
//cors for local
app.use(cors());
//default
app.get('/', (req,res)=>{
  res.send('Working :D');
})
app.get('/chef', (req, res) => {
  res.send(data);
})
app.get('/foods', (req, res) => {
  res.send(foods);
})
app.get('/test', (req, res) => {
  res.send('test successful')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})