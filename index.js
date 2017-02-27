const express = require('express');

const app = express();
app.use(express.static('public'));

app.listen(8080, () => {
  console.log('todo-react is now listening at 8080...');
});
