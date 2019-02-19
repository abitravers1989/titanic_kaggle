const csv= require('csv-parse');
const fs = require('fs');
const results = [];

// const parser = csvParse({
//   separator: ','
// }, (err, data) => {
//   if(err) console.log('----->', err)
//   setTimeout(() => {console.log('----->', data)}, 5000)
// })


fs.createReadStream('./data/train.csv').pipe(parser)
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     console.log('----->', results)
// });

// fs.createReadStream('./data/train.csv')
//   .pipe(csv({ delimiter: ',', auto_parse: true}))
//   .on('data', results.push)
//   .on('end', () => {
//     console.log(results);
//     // [
//     //   { NAME: 'Daffy Duck', AGE: 24 },
//     //   { NAME: 'Bugs Bunny', AGE: 22 }
//     // ]
//   })
//   .on('error', (err) => {console.log('----->', err)})

  