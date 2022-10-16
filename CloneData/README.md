## Code convert image url to image file

console tab in browser
```js
const arr = []
document.querySelectorAll('article').forEach(item => {
    const img = item.querySelector('img.product-image') ? item.querySelector('img.product-image').src : ''
    const title = item.querySelector('div.flex.justify-between span').innerHTML
    const price = item.querySelector('.text-brand.font-bold.inline-block.mr-1') ? item.querySelector('.text-brand.font-bold.inline-block.mr-1 span').innerHTML : ''
    const discount = item.querySelector('.text-brand.font-bold.inline-block.mr-1 del') ? item.querySelector('.text-brand.font-bold.inline-block.mr-1 del').innerHTML : ''
    const star = item.querySelector('.text-xs.p-rating span') ? item.querySelectorAll('.text-xs.p-rating span')[0].innerHTML : ''
    const rating = item.querySelector('.text-xs.p-rating span') ? item.querySelectorAll('.text-xs.p-rating span')[1].innerText : ''
        arr.push({ img, title, price, discount, star, rating })
})
arr
```

index.js

```js
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
```
