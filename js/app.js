
'use strict'

var parentSection = document.getElementById('randomPhoto');
// create parent element for each product
var parentElement1 = document.getElementById('product1');
var parentElement2 = document.getElementById('product2');
var parentElement3 = document.getElementById('product3');
var parentArray = [parentElement1, parentElement2, parentElement3];
//all products in an array
var productsArray = [];
//create constructor function for the array
function Product(filePath, alt) {
  
  this.filePath = filePath;
  this.alt = alt;
  this.clicks = 0;

  productsArray.push(this)
}

new Product('img/bag.jpg', 'bag', 'bag');
new Product('img/banana.jpg', 'banana', 'banana');
new Product('img/bathroom.jpg', 'bathroom', 'bathroom');
new Product('img/boots.jpg', 'boots', 'boots');
new Product('img/breakfast.jpg', 'breakfast', 'breakfast');
new Product('img/bubblegum.jpg', 'bubbleGum', 'bubbleGum');
new Product('img/chair.jpg', 'chair', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new Product('img/dog-duck.jpg', 'dogDuck', 'dogDuck');
new Product('img/dragon.jpg', 'dragon', 'dragon');
new Product('img/pen.jpg', 'pen', 'pen');
new Product('img/pet-sweep.jpg', 'petSweep', 'petSweep');
new Product('img/scissors.jpg', 'scissors', 'scissors');
new Product('img/shark.jpg', 'shark', 'shark');
new Product('img/sweep.png', 'sweep', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn', 'unicorn');
new Product('img/usb.gif', 'usb', 'usb');
new Product('img/water-can.jpg', 'waterCan', 'waterCan');
new Product('img/wine-glass.jpg', 'wineGlass', 'wineGlass');
new Product('img/wireframe.png', 'wireFrame', 'wireFrame');


// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function randomImage() {
  var randomIndex1 = getRandomNumber(productsArray.length);
  var randomIndex2 = getRandomNumber(productsArray.length);
  var randomIndex3 = getRandomNumber(productsArray.length);
  
  var chosenImage1 = productsArray[randomIndex1];
  var chosenImage2 = productsArray[randomIndex2];
  var chosenImage3 = productsArray[randomIndex3];
 
  while (randomIndex1 === randomIndex2
      ||  randomIndex2 === randomIndex3
      ||  randomIndex3 === randomIndex1
      ) {
      randomIndex1 = getRandomNumber(productsArray.length);
      randomIndex2 = getRandomNumber(productsArray.length);
      randomIndex3 = getRandomNumber(productsArray.length);   
      }
  //create image tag
  var imageElement1 = document.createElement('img')
  var imageElement2 = document.createElement('img')
  var imageElement3 = document.createElement('img')
  // give it src 
  imageElement1.setAttribute('src', chosenImage1.filePath);
  imageElement1.setAttribute('alt',chosenImage1.alt);
  parentElement1.appendChild(imageElement1);

  imageElement2.setAttribute('src', chosenImage2.filePath);
  imageElement2.setAttribute('alt',chosenImage2.alt);
  parentElement2.appendChild(imageElement2);

  imageElement3.setAttribute('src', chosenImage3.filePath);
  imageElement3.setAttribute('alt',chosenImage3.alt);
  parentElement3.appendChild(imageElement3);
}




function handleClick(event) {
  var alt = event.target.alt;
  
  for (var i = 0; i < parentArray.length; i++) {
    var alt = event.target.alt;
    parentArray[i].innerHTML = '';
  }
  console.log('this is my event.target.alt', event.target.alt)
  randomImage();
}
parentSection.addEventListener('click', handleClick);
randomImage();

