
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
productsArray[randomIndex].shown++;
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

// <============================ Event Listener ===============================>


function handleSubmit(event){
  event.preventDefault();
  totalClicks++;
  // collect information from the vote
  var alt = event.target.value;
  console.log(productsArray);
  for(var i=0; i<productsArray.length; i++){
    if(alt === productsArray[i].alt){
      productsArray[i].clicks++;
    } else if (uniqueImage.includes(productsArray[i])){
      productsArray[i].shown++;
    }
  }
 
    // run that information through the constructor 
    parentSection.innerHTML = '';
    
    // var button = document.createElement('button');
    // button.setAttribute('type', 'submit');
    // button.innerText = 'Vote!'
  
    // parentSection.appendChild(button);
    randomImage();
    randomImage();
    randomImage();
    if (totalClicks>=maxClicks) {
      parentSection.removeEventListener('click', handleSubmit);
      var productList = document.getElementById('randomPhoto');
      alert('25 votes reached')
      createChart();
      for (var j = 0; j < productsArray.length; j++){
        var li = document.createElement('li');
        li.textContent = productsArray[j].alt + ' had ' + productsArray[j].clicks + ' votes and was shown ' + productsArray[j].shown + ' times.';
        finalList.appendChild(li);
      }  
    }
 } 
 
parentSection.addEventListener('click', handleSubmit);

//<====================== chart.js =======================>
function createChart() {

  // generate product names for the chart
  var labelArray = [];
  var productData = [];
  var productDisplayData = [];

  for(var i = 0; i < productsArray.length; i++){

    labelArray.push(productsArray[i].alt);
    productData.push(productsArray[i].clicks);
    productDisplayData.push(productsArray[i].shown);

  }
console.log(productData);

  var ctx1 = document.getElementById('voteChart').getContext('2d');
  var voteChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: labelArray,
      datasets: [{
        label: '# of Votes',
        data: productData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(25, 108, 118, 0.4)',
          'rgba(55, 3, 179, 0.8)',
          'rgba(207, 180, 12, 0.6)',
          'rgba(163, 96, 172, 0.6)',
          'rgba(131, 253, 181, 0.4)',
          'rgba(193, 93, 104, 0.7)',
          'rgba(252, 155, 19, 0.7)',
          'rgba(66, 62, 133, 0.8)',
          'rgba(220, 123, 101, 1)',
          'rgba(130, 83, 63, 0.4)',
          'rgba(233, 69, 238, 0.8)',
          'rgba(132, 72, 6, 1)',
          'rgba(6, 43, 125, 0.9)',
          'rgba(147, 13, 90, 0.5)'


        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(25, 108, 118, 0.4)',
          'rgba(55, 3, 179, 0.8)',
          'rgba(207, 180, 12, 0.6)',
          'rgba(163, 96, 172, 0.6)',
          'rgba(131, 253, 181, 0.4)',
          'rgba(193, 93, 104, 0.7)',
          'rgba(252, 155, 19, 0.7)',
          'rgba(66, 62, 133, 0.1)',
          'rgba(220, 123, 101, 1)',
          'rgba(130, 83, 63, 0.4)',
          'rgba(233, 69, 238, 0.8)',
          'rgba(132, 72, 6, 1)',
          'rgba(6, 43, 125, 0.9)',
          'rgba(147, 13, 90, 0.5)'
        ],
        borderWidth: 1
      },
      {
        label: '# of times displayed',
        data: productDisplayData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(25, 108, 118, 0.2)',
          'rgba(55, 3, 179, 0.2)',
          'rgba(207, 180, 12, 0.2)',
          'rgba(163, 96, 172, 0.2)',
          'rgba(131, 253, 181, 0.2)',
          'rgba(193, 93, 104, 0.2)',
          'rgba(252, 155, 19, 0.2)',
          'rgba(66, 62, 133, 0.2)',
          'rgba(220, 123, 101, 0.2)',
          'rgba(130, 83, 63, 0.2)',
          'rgba(233, 69, 238, 0.2)',
          'rgba(132, 72, 6, 0.2)',
          'rgba(6, 43, 125, 0.2)',
          'rgba(147, 13, 90, 0.2)'


        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(25, 108, 118, 0.4)',
          'rgba(55, 3, 179, 0.8)',
          'rgba(207, 180, 12, 0.6)',
          'rgba(163, 96, 172, 0.6)',
          'rgba(131, 253, 181, 0.4)',
          'rgba(193, 93, 104, 0.7)',
          'rgba(252, 155, 19, 0.7)',
          'rgba(66, 62, 133, 0.1)',
          'rgba(220, 123, 101, 1)',
          'rgba(130, 83, 63, 0.4)',
          'rgba(233, 69, 238, 0.8)',
          'rgba(132, 72, 6, 1)',
          'rgba(6, 43, 125, 0.9)',
          'rgba(147, 13, 90, 0.5)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stacked: true
          }
        }]
      }
    }
  });

}
