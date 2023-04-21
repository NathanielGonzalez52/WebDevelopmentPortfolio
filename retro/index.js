// $(document).ready(function(){
//   $('.carousel').carousel({
//     interval: 3567898000
//   })
// });

//
// $('.carousel').carousel({
//   interval: 1000
// })

const myCarouselElement = document.getElementById('#carouselExampleIndicators');

const carousel = new bootstrap.Carousel(myCarouselElement, {
  ride: false
});

var date = new Date();

var copyRight = document.getElementsByClassName("date")[0];

// console.log(copyRight.innerHTML);

copyRight.innerHTML = "© " + date.getFullYear() + "  New Game Plus";
