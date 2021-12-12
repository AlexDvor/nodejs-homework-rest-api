const Jimp = require("jimp");

const resizeUserAvatar = async (url) => {
  const image = await Jimp.read(url);
  await image.resize(250, 250);
  // await image.writeAsync(`resize_${Date.now()}_250x250.png`);
};

module.exports = resizeUserAvatar;

// async function resize() {
//   // reads the image
//   const image = await Jimp.read(
//     "https://images.pexels.com/photos/4629485/pexels-photo-4629485.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//   );
//   // resizes the image to width 150 and heigth 150.
//   await image.resize(150, 150);
//   // saves the image on the file system
//   await image.writeAsync(`resize_${Date.now()}_150x150.png`);
// }
