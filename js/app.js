
'use strict'
// <=========================Global Variable=============================>
var parentSection = document.getElementById('randomPhoto');
var finalList = document.getElementById('ul')
var productsArray = [];
var totalClicks = 0;
var maxClicks = 25;
var uniqueImage = [];
var test = document.getElementById('test')
// <================constructor function for the array====================>
function Product(filePath, alt) {
  
  this.filePath = filePath;
  this.alt = alt;
  this.clicks = 0;
  this.shown = 0;

  productsArray.push(this)
}

new Product('img/bag.jpg', 'bag');
new Product('img/banana.jpg', 'banana');
new Product('img/bathroom.jpg', 'bathroom');
new Product('img/boots.jpg', 'boots', 'boots');
new Product('img/breakfast.jpg', 'breakfast');
new Product('img/bubblegum.jpg', 'bubbleGum');
new Product('img/chair.jpg', 'chair');
new Product('img/cthulhu.jpg', 'cthulhu');
new Product('img/dog-duck.jpg', 'dogDuck');
new Product('img/dragon.jpg', 'dragon');
new Product('img/pen.jpg', 'pen');
new Product('img/pet-sweep.jpg', 'petSweep');
new Product('img/scissors.jpg', 'scissors');
new Product('img/shark.jpg', 'shark');
new Product('img/sweep.png', 'sweep');
new Product('img/tauntaun.jpg', 'tauntaun');
new Product('img/unicorn.jpg', 'unicorn');
new Product('img/usb.gif', 'usb');
new Product('img/water-can.jpg', 'waterCan');
new Product('img/wine-glass.jpg', 'wineGlass');
new Product('img/wireframe.png', 'wireFrame');


// helper function - got this from mdn
function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// <======================== Generate Random Image ============================>
function randomImage() {
  var randomIndex = getRandomNumber(productsArray.length);
  

  while (uniqueImage.includes(randomIndex) ) {
    randomIndex = getRandomNumber(productsArray.length);
      }
//push randomIndex to unique array.
uniqueImage.push(randomIndex);

//remove the oldest image in unique array
if(uniqueImage.length > 6) {
  uniqueImage.shift();
}

var chosenImage = productsArray[randomIndex];
buildElements(chosenImage);

}

// <======================== Build Elements in HTML =========================>

function buildElements(chosenImage) {
  //create image tag
  var imageElement = document.createElement('img')

  // give it src 
  imageElement.setAttribute('src', chosenImage.filePath);
  //give it alt
  imageElement.setAttribute('alt', chosenImage.alt)

  //radio button
  var radioButton = document.createElement('input');
  radioButton.setAttribute('type', 'radio');
  radioButton.setAttribute('value', chosenImage.alt);
 
  parentSection.appendChild(radioButton);
  parentSection.appendChild(imageElement);
}

randomImage();
randomImage();
randomImage();

// function handleClick(event) {
//   var alt = event.target.alt;
  
//   for (var i = 0; i < parentArray.length; i++) {
//     var alt = event.target.alt;
//     parentArray[i].innerHTML = '';
//   }
//   console.log('this is my event.target.alt', event.target.alt)
//   randomImage();

// parentSection.addEventListener('click', handleClick);
// <============================ Event Listener ===============================>

function handleSubmit(event){
  event.preventDefault();
  console.log('test')
  totalClicks++;
  // collect information from the vote
  var alt = event.target.value;
  
  for(var i=0; i<productsArray.length; i++){
    if(alt === productsArray[i].alt){
      productsArray[i].clicks++;
      productAsrray[i].shown++;
      console.log(productsArray[i]);
    }
    // run that information through the constructor 
    parentSection.innerHTML = '';
    
    var button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerText = 'Vote!'
  
    parentSection.appendChild(button);
    randomImage();
    randomImage();
    randomImage();
    if (totalClicks>=maxClicks) {
      parentSection.removeEventListener('submit', handleSubmit);
      for (var j = 0; j < productsArray.length; j++){
        var li = document.createElement('li');
        li.textContent = productsArray[j].title + ' had ' + productsArray[j].clicks + ' votes and was shown ' + productsArray[j].shown + ' times.';
        finalList.appendChild(li);
      }  
    }
 } 
}
parentSection.addEventListener('submit', handleSubmit);
