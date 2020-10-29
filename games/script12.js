var cards = [
  'images/1.png',
  'images/2.png',
  'images/3.png',
  'images/4.png',
  'images/5.png',
  'images/6.png',
  'images/7.png',
  'images/8.png',
  'images/9.png',
  'images/10.png',
  'images/11.png',
  'images/12.png',
  'images/13.png',
  'images/14.png',
  'images/15.png',
  'images/16.png',
  'images/17.png',
  'images/18.png',
  'images/19.png',
  'images/20.png',
  'images/21.png',
  'images/22.png',
  'images/23.png',
  'images/24.png',
  'images/25.png',
  'images/26.png',
  'images/27.png',
  'images/28.png',
  'images/29.png',
  'images/30.png',
  'images/31.png',
  'images/32_1.png',
  'images/33.png',
  'images/34.png',
  'images/35.png',
  'images/36.png',
  'images/37.png',
  'images/38.png',
  'images/39.png',
  'images/40.png',
  'images/41.png',
  'images/42.png',
  'images/43.png',
  'images/44.png',
  'images/45.png',
  'images/46.png',
  'images/47.png',
  'images/48.png',
  'images/49.png',
  'images/50.png',
  'images/51.png',
  'images/52.png',
  'images/53.png',
  'images/54.png',
  'images/55.png',
  'images/56.png',
  'images/57.png',
  'images/58.png',
  'images/59.png',
  'images/60.png',
  'images/61_temp.png',
  'images/62.png',
  'images/63.png',
  'images/64.png',
  'images/65.png',
  'images/66.png',
  'images/67.png',
  'images/68.png',
  'images/69.png',
  'images/70.png',
  'images/71.png',
  'images/72.png',
  'images/73.png',
  'images/74.png',
  'images/75.png',
  'images/76.png',
  'images/77.png',
  'images/78.png',
  'images/79.png',
  'images/80.png',
  'images/81.png',
  'images/82.png',
  'images/83.png',
  'images/84.png',
  'images/85.png',
  'images/86.png',
  'images/87.png',
  'images/88.png',
  'images/89.png',
  'images/90.png',
  'images/91.png',
  'images/92.png',
  'images/93.png',
  'images/94.png',
  'images/95.png',
  'images/96.png',
  'images/97.png',
  'images/98.png',
  'images/99.png',
  'images/100.png',
  'images/101.png',
  'images/102.png',
  'images/103.png',
  'images/104.png',
  'images/105.png',
  'images/106.png',
  'images/107.png',
  'images/108.png',
  'images/109.png',
  'images/110.png',
  'images/111.png',
  'images/112.png',
  'images/113.png',
  'images/114.png',
  'images/115.png',
  'images/116.png',
  'images/117.png',
  'images/118.png',
  'images/119.png',
  'images/120.png',
  'images/121.png',
  'images/122.png',
  'images/123.png',
  'images/124.png',
  'images/125.png',
  'images/126.png',
  'images/127.png',
  'images/128.png',
  'images/129.png',
  'images/130.png',
  'images/131.png',
  'images/132.png',
  'images/133.png',
  'images/134.png',
  'images/135.png',
  'images/136.png',
  'images/137.png',
  'images/138.png',
  'images/139.png',
  'images/140.png',
  'images/141.png',
  'images/142.png',
  'images/143.png',
  'images/144.png',
  'images/145.png',
  'images/146.png',
  'images/147.png',
  'images/148.png',
  'images/149.png',
  'images/150.png',
  'images/151.png',
];

var lies = [
  'I once killed a pigeon by accidentally standing on it',
  'I can juggle',
  'I went to school with somebody who is now an actor',
  'I have 12 first cousins',
  'I have written off a car',
  'I am colourblind',
  'I once got so drunk at a wedding that I stole the microphone0',
  'Do something true',
  'Do something true',
  'Do something true',
  'Do something true',
  'Do something true',
];

var secret_tasks = [
  'pretend to be upset in 2 rounds, everyone who believes you has to do 3 drinks',
  'storm out in 4 cards, everyone who believes you has to do 3 drinks',
  'act really offended at the next thing said to you, everyone who believes you has to do 3 drinks',
  'suddenly get A LOT drunker until somebody notices, everyone who believes you has to do 3 drinks',
  'nothing, you are safe',
  'fall over the next time you go to the bathroom, everyone who believes you has to do 3 drinks',
  'pretend to chunder in the bathroom within the next 15 minutes, everyone who believes you has to do 3 drinks',
  'express some controversial views in 3 turns, everyone who believes you has to do 3 drinks',
  'nothing, you are safe',
];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(cards);
shuffleArray(lies);
shuffleArray(secret_tasks);

var state = 0;
var totalImages = cards.length;
var remaining = cards.length - 1;
var counter = 0;
var ended = false;

console.log(totalImages)
console.log('1')

function displayImage(){
  document.getElementById("hiddencontainer").style.display = "none"; 
  if (ended == true){
      return;
  } else {
  document.getElementById("imageidback").src= cards[counter];
  console.log(cards[counter]);
  if (cards[counter] == 'images/140.png'){
    console.log('@olliegg');
    document.getElementById('hiddencontainer').innerHTML = lies[0];
    document.getElementById("hiddencontainer").style.display = "inline-block"; 
  };
  if (cards[counter] == 'images/141.png'){
    console.log('@olliegg');
    document.getElementById('hiddencontainer').innerHTML = secret_tasks[0];
    document.getElementById("hiddencontainer").style.display = "inline-block"; 
  };
  counter++;
  console.log(counter)
  if (counter === totalImages){
      document.getElementById("imageidback").src= 'images/finish.jpg';
      ended = true;
      return;
      }
  }
  };

function flip(){
  if (ended == true) {
    return;
  };
  var element = event.currentTarget;
  if (element.className === "card") {
    if(element.style.transform == "rotateY(-180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(-180deg)";
    }
  }
};

function nextFlip(){
    if (state == 0) {
      displayImage();
      remaining--;
      if (remaining < 1) {
        document.getElementById('remaining').innerHTML = 'Cards remaining: 0';
      }
      else {
        document.getElementById('remaining').innerHTML = 'Cards remaining: ' + remaining;
      }
      state = 1;
      flip();
      return;
    }

    if (state == 1) {
      state = 0;
      flip();
      if (remaining < 1) {
        document.getElementById("imageidfront").src= 'images/finish.jpg';
        ended = true;
      }
      return;
  }
};
function remainder() {
  document.getElementById('remaining').innerHTML = 'Cards remaining: ' + remaining;
};
window.onload = displayImage();