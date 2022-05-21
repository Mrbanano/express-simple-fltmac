const express = require('express');
const cors = require('cors');
const app = express();
const port = 3010;
const path = require('path');
const morgan = require('morgan');

//middleware
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hola' });
});

//message route
app.post('/CMS/api/v0/Message/sendMessage', async (req, res) => {
  res.status(200).json({
    success: true,
    count: 1,
    data: {
      message: 'Proximanente',
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
