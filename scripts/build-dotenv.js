const fs = require('fs');
const path = require('path');

const GA_PRIVATE_KEY = process.env.GA_PRIVATE_KEY_TRAVIS;
const MC_KEY = process.env.MC_KEY_TRAVIS;

const content = `GA_PRIVATE_KEY="${GA_PRIVATE_KEY}"
MC_KEY=${MC_KEY}
`;

fs.writeFile(path.join(__dirname, '../.env'), content, 'utf-8', (err) => {
  if (err) throw err;
  return process.exit(0);
});
