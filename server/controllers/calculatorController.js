const express = require('express');
const router = express.Router();

// Evaluate mathematical expressions safely
router.post('/evaluate', (req, res) => {
  try {
    const { expression } = req.body;
    
    if (!expression || typeof expression !== 'string') {
      return res.status(400).json({ error: 'Invalid expression' });
    }

    // Replace some common scientific functions for evaluation
    const sanitized = expression
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/tan\(/g, 'Math.tan(')
      .replace(/sqrt\(/g, 'Math.sqrt(')
      .replace(/log\(/g, 'Math.log10(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/\^/g, '**');

    // Validate expression to prevent code injection
    const isValid = /^[0-9+\-*/().Mathsincostanqrtlogd]+$/g.test(sanitized);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid characters in expression' });
    }

    // Evaluate safely
    let result;
    try {
      result = eval(sanitized); // eslint-disable-line no-eval
    } catch (e) {
      return res.status(400).json({ error: 'Invalid mathematical expression' });
    }

    res.json({ result });
  } catch (error) {
    console.error('Evaluation error:', error);
    res.status(500).json({ error: 'Error evaluating expression' });
  }
});

module.exports = router;