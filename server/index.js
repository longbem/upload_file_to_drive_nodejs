const express = require('express');
const constants = require('./constants');

const app = express();

app.set('View engine', 'ejs');

app.get('/', (request, res) => {
  // res.render('../view/index');
  res.send('hello from server!')
})

app.get('/api/helloworld', (req, res) => {
  res.json({sayHi: 'hello from server, nice to meet you!'})
})

app.listen(constants.PORT, () => {
  console.log('App start on port', constants.PORT)
})