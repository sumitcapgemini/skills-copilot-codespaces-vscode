// create web server
const express = require('express');
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// create a global variable to store comments
const comments = [];

// GET /comments
app.get('/comments', (req, res) => {
  res.send(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

