const csvParse = require('csv-parse');
const fs = require('fs');
const results = [];

const testData = fs.createReadStream('./data/train.csv')
  .pipe(csvParse())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log('----->', results)
  });

