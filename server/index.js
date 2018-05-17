const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000; // process.env.PORT || 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/api', router);

app.use(express.static(path.join(__dirname, 'static')));

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error starting up server', err);
  }
  console.log('successfully connected to server on PORT ', PORT);
})