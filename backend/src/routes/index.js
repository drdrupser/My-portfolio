const express = require('express');
const router = express.Router();

// Import route modules
// router.use('/auth', require('./auth'));
// router.use('/users', require('./users'));

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
