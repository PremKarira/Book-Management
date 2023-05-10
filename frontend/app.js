const express = require('express');
const app = express();
const port = 8000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Parse JSON request bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
