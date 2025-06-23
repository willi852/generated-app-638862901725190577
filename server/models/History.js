// In a production app, this would be a MongoDB/Mongoose model,
// but for simplicity in this demo, we'll just use basic JS.

class History {
  constructor() {
    this.calculations = [];
  }

  addCalculation(expression, result) {
    this.calculations.unshift({ expression, result });
    // Keep only recent 10 calculations for demo purposes
    if (this.calculations.length > 10) {
      this.calculations.pop();
    }
  }

  getHistory() {
    return [...this.calculations];
  }
}

module.exports = new History();