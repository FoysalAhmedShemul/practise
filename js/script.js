$(document).ready(function(){
    $('.banner-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        autoplay: false,
        autoplaySpeed: 2000,

        prevArrow:'<i class="fas fa-chevron-circle-left slider-prev-arrow"></i>',
        nextArrow:'<i class="fas fa-chevron-circle-right slider-next-arrow"></i>',
  
      });
  });




// var preloder = document.querySelector(".preloder");
// window.addEventListener("load",function(){
//     // console.log("paice");
// preloder.classList.add("preloder-hide")
// })






// ====preloder======
// var preloder = document.querySelector(".preloder")
// window.addEventListener("load",function(){
//      preloder.classList.add("preloder-hide")
// })


// =====sticky======
var navbar = document.querySelector(".navbar")
window.addEventListener("scroll",function(){
    navbar.classList.add("lalala")
    var sticky  = window.scrollY;
    navbar.classList.toggle("sticky-header", sticky>200)
})



//recent item slide
$('.recent-project-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
     prevArrow:'<i class="fas fa-chevron-circle-left project-left"></i>',
     nextArrow:'<i class="fas fa-chevron-circle-right project-right"></i>',
     centerModde: false,
     centerPadding: "0px",
     responsive: [
        // {
        //   breakpoint: 1024,
        //   settings: {
        //     slidesToShow: 3,
        //     slidesToScroll: 3,
        //     infinite: true,
        //     dots: true
        //   }
        // },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
   
//mix it up js
var mixer = mixitup('.project-main');

//venubox js
new VenoBox({
    spinner: 'plane',
    spinColor: 'green'
});
//counter up js
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

