const express = require('express');

const app = express();
app.use(express.static('public'));

app.listen(8080, () => {
  console.log('movie-board is now listening at 8080...');
});
