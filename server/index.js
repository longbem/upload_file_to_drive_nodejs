const express = require('express');
const cors = require('cors')

const constants = require('./constants');
const app = express();

app.use(cors())

// app.options('*', cors()) // include before other routes

app.set('View engine', 'ejs');

app.get('/', (request, res) => {
  // res.render('../view/index');
  res.send('hello from server!')
})

app.get('/api/hello-world', (req, res) => {
  res.json({sayHi: 'hello from server, nice to meet you!'})
})

app.listen(constants.PORT, () => {
  console.log('App start on port', constants.PORT)
})