const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const li1 = document.createElement('li');
// const image1 = document.createElement('img');
// image1.src =
//   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image1.alt = 'White and Black Long Fur Cat';
// const li2 = document.createElement('li');
// const image2 = document.createElement('img');
// image2.src =
//   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image2.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
// const li3 = document.createElement('li');
// const image3 = document.createElement('img');
// image3.src =
//   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
// image3.alt = 'Group of Horses Running';

// const ulGallery = document.querySelector('.gallery');
// ulGallery.append(image1, image2, image3);

//-------------------------------------------------------------------------------

const ulGallery = document.querySelector('.gallery');
const strCodeHtml = images
  .map(
    img =>
      `<li class="gallery-item"><img class="gallery-img"src="${img.url}" alt="${img.alt}" width="360" height="300"/></li>`,
  )
  .join('');

console.log(strCodeHtml);
ulGallery.innerHTML = strCodeHtml;
console.log(ulGallery);
