const fs = require('fs');
const superagent = require('superagent');

// // Callbacks hell
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed: ${data}`);

//   superagent
//   .get(`https://dog.ceo/api/breed/${data}/images/random`)
//   .end((err, res) => {
//     if (err) return console.log(err.message);
//     console.log(res.body.message);

//     fs.writeFile('dog-img.txt', res.body.message, (err) => {
//       if (err) return console.log(err.message);
//       console.log('Random dog image saved to file!')
//     });
//   });
// });

// Promises
const readFilePromise = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file');
      resolve(data);
    });
  });
};

const writeFilePromise = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) console.log('Could not write a file');
      resolve('success');
    });
  });
};

// readFilePromise(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);
//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => { 
//     console.log(res.body.message);
//     return writeFilePromise('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('Random dog image saved to file!');
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Async / await
const getDogPic = async () => {
  try {
    const data = await readFilePromise(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
    console.log(res.body.message);

    await writeFilePromise('dog-img.txt', res.body.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
  }
};

getDogPic();
