const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js in Docker!!!!! ----1111');
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
