## Code convert image url to image file

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