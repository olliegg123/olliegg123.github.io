var cardList = [
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
    'images/32.png',
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
    'images/61.png',
    'images/62.png',
    'images/63.png',
    'images/64.png',
    'images/65.png',
    'images/66.png',
    ];
  
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

    shuffleArray(cardList);
    console.log(cardList);

  var state = 0;
  var totalImages = cardList.length;
  var counter = 0;
  var ended = false;

  console.log(totalImages)
  
  function displayImage(){
    if (ended == true){
        return;
    } else {
    document.getElementById("imageidback").src= cardList[counter];
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
        state = 1;
        flip();
        return;
      }
      
      if (state == 1) {
        state = 0;
        flip();
        return; 
    }
  };

  window.onload = displayImage();