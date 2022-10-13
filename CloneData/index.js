const data = require("./data");
const axios = require("axios");
const fs = require("fs");

const main = async () => {
  for (let i = 0; i < data.length; i++) {
    console.log("Cloning item", i);
    const item = data[i];

    if (!item.img) continue;

    const base64 = await getImage(item.img);
    fs.writeFileSync(`./images/${item.title}.png`, base64, {
      encoding: "base64",
    });
  }
};

const getImage = async (imageUrl) => {
  try {
    const image = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const returnedB64 = Buffer.from(image.data).toString("base64");

    return returnedB64;
  } catch (error) {
    console.log(error);
  }
};

main().then(() => {
  console.log("Done clone image");
});
