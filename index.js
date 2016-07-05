const app = require('express')();

app.get('/', (req, res) => {
  res.sendfile('index.html', {root: __dirname })
});
app.listen();