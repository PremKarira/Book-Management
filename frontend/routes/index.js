const express = require('express');
const router = express.Router();

// Signup route
router.get('/signup', (req, res) => {
  res.render('signup');
});

// Login route
router.get('/', (req, res) => {
    res.render('login');
  });

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Dashboard route
router.get('/dashboard', (req, res) => {
  // Simulated book data
  const books = [
    { title: 'Book 1', desc: 'Description 1', price: 10.99 },
    { title: 'Book 2', desc: 'Description 2', price: 12.99 },
    // Additional books...
  ];

  res.render('dashboard', { books });
});

// Add new book route
router.post('/dashboard/add', (req, res) => {
  const { title, desc, price } = req.body;
  // Add book logic...

  // Redirect back to the dashboard
  res.redirect('/dashboard');
});

module.exports = router;
