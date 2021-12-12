const Jimp = require("jimp");

const resizeUserAvatar = async (url) => {
  try {
    const image = await Jimp.read(url);
    await image.resize(250, 250);
    await image.writeAsync(url);
  } catch (error) {
    console.log(error);
  }
};

module.exports = resizeUserAvatar;

// Jimp.read({
//   url: 'http://www.example.com/path/to/lenna.jpg', // Required!
//   headers: {},
//   ...
// })
//   .then(image => {
//     // Do stuff with the image.
//   })
//   .catch(err => {
//     // Handle an exception.
//   });
