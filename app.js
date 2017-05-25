'use strict';

// global variables
var picArray = []; // displays pics
var shownPics = []; // declares variables for the elements to show in html
var picOne = document.getElementById('pic-one');
var picTwo = document.getElementById('pic-two');
var picThree = document.getElementById('pic-three');
//
picOne.addEventListener('click', function(){
  selectPics();
});

picTwo.addEventListener('click', function(){
  selectPics();
});

picThree.addEventListener('click', function(){
  selectPics();
});


// object constructor
function picOption(name, path) {
  this.name=name; // dynamic properties
  this.path=path;
  this.clickCount= 0;
  this.displayCount=0;
  picArray.push(this);
}
// instantiations of picOption Obj
var bag = new picOption('bag', 'img/bag.jpg');
var banana = new picOption('banana', 'img/banana.jpg');
var bathroom = new picOption('bathroom', 'img/bathroom.jpg');
var boots = new picOption('boots', 'img/boots.jpg');
var breakfast = new picOption('breakfast', 'img/breakfast.jpg');
var gum = new picOption('gum', 'img/bubblegum.jpg');
var chair = new picOption('chair', 'img/chair.jpg');
var cthulhu = new picOption('cthulhu', 'img/cthulhu.jpg');
var dogduck = new picOption('dogduck', 'img/dog-duck.jpg');
var dragon = new picOption('dragon', 'img/dragon.jpg');
var pen = new picOption('pen', 'img/pen.jpg');
var petsweep = new picOption('petsweep', 'img/pet-sweep.jpg');
var scissors = new picOption('scissors', 'img/scissors.jpg');
var shark = new picOption('shark', 'img/shark.jpg');
var sweep = new picOption('sweep', 'img/sweep.png');
var tauntaun = new picOption('tauntaun', 'img/tauntaun.jpg');
var unicorn = new picOption('unicorn', 'img/unicorn.jpg');
var usb = new picOption('usb', 'img/usb.gif');
var watercan = new picOption('watercan', 'img/water-can.jpg');
var wine = new picOption('wine', 'img/wine-glass.jpg');

function renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, imgThree) { // function that displays img on html
  picOne.setAttribute('src', selectPics()[0].path);
  //picTwotag.src = imgTwo.path;
  picTwo.setAttribute('src', currentPics()[1].path);
  //picThreetag.src = imgThree.path;
  picThree.setAttribute('src', currentPics()[2].path);
//places random image into array
  shownPics.push(picArray[randomIndex1]);
  shownPics.push(picArray[randomIndex2]);
  shownPics.push(picArray[randomIndex3]);
}
// renderPics();

// Generates random number
function randomNumberGen() {
  return Math.floor(Math.random() * (picArray.length + 1));
}
// function that selects random pics
function selectPics() {
  var currentPics = [];
  var previousPics = [];

  var firstPic = picArray.splice(randomNumberGen(), 1);
  var secondPic = picArray.splice(randomNumberGen(), 1);
  var thirdPic = picArray.splice(randomNumberGen(), 1);

  // var firstPic = picArray.splice(randomNumberGen(), 1);
  // var secondPic = picArray.splice(randomNumberGen(), 1);
  // var thirdPic = picArray.splice(randomNumberGen(), 1);
  // .splice(randomNumberGen(), 1);
  currentPics.push(firstPic);
  currentPics.push(secondPic);
  currentPics.push(thirdPic);
  // currentPics.push(firstPic[0]);
  // currentPics.push(firstPic[0]);

    // picArray.splice(randomNumberGen(), 1);
    // picArray.splice(randomNumberGen(), 1);
  previousPics.push(currentPics);
  console.log(previousPics);
  console.log(currentPics);
  picArray.push(previousPics);
  console.log(picArray);
  console.log(picArray);
  return currentPics;
  // currentPics.push(firstPic);
  // currentPics.push(secondPic);
  // currentPics.push(thirdPic);
  //here, we are pushing pics to current array
  // console.log('randomIndex is ', randomIndex);
  // var imgOne = picArray[randomIndex1];
  // var randomIndex2 = randomNumberGen();
  // var imgTwo = picArray[randomIndex2];
  // var randomIndex3 = randomNumberGen();
  // var imgThree = picArray[randomIndex3];
  // // console.log('imgOne is ', imgOne );
  // renderPics(randomIndex1, randomIndex2, randomIndex3, imgOne, imgTwo, i mgThree);

}
selectPics();









// generates array of rando imagesm
// function randomImages(max){
//   for (var i =0; i<3; i++)
//   displayedImages.push(imagesArray[Math.floor(Math.random() * max)]);
// compares current array[i] to last shown array, and to the other two positions in the current array,
