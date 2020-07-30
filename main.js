const path = require('path');

const express = require('express');

const app = express();

const pubpath = path.join(__dirname, 'public/dist');
app.use(express.static(pubpath));

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html').sendfile(path.join(__dirname, 'public/dist/index.html'));
});

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'http://localhost';
app.listen(port, () => {
  console.log(`\x1b[1;36m> Application available at ${host}:${port}\x1b[0m`);
});
