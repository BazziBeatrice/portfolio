// JavaScript Document


//get mouse position--------------------------------------------//
const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});
//get mouse position--------------------------------------------//


//aos animation--------------------------------------------//
// var AOS = require('aos');
AOS.init({
 duration: 1200
});
//aos animation--------------------------------------------//


$(document).ready(function(){

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


    //
    //
    // var yOff = 15;
    // var xOff = -20;
    //
    // $(".text-hover-image").hover(function (e) {
    //     $("body").append("<h1 id='image-when-hovering-text'><img src='./assets/images/spleen-1.png'/></h1>");
    //     $("#image-when-hovering-text")
    //         .css("position", "absolute")
    //         .css("top", (e.pageY - yOff))
    //         .css("left", (e.pageX + xOff))
    //         // .fadeIn("fast");
    //         console.log("ok");
    // }, function () {
    //    $("#image-when-hovering-text").remove();
    // });
    //
    // $(".text-hover-image").mousemove(function (e) {
    //     $("#image-when-hovering-text")
    //         .css("top", ('--mouse-y'))
    //         .css("left", ('--mouse-x'));
    // });
    //
    // $(".text-hover-image2").hover(function (e) {
    //     $("body").append("<h1 id='image-when-hovering-text'><img src='./assets/images/outforia-1.jpg'/></h1>");
    //     $("#image-when-hovering-text")
    //         .css("position", "absolute")
    //
    //         // .fadeIn("fast");
    //         console.log("ok");
    // }, function () {
    //    $("#image-when-hovering-text").remove();
    // });
    //
    // $(".text-hover-image2").mousemove(function (e) {
    //     $("#image-when-hovering-text")
    //
    // });



//     $('#project03').hover(
//     function() {
//         $('#btn').fadeIn('slow');;
//         console.log("ok");
//     },function() {
//         $('#btn').fadeOut('slow');
//     }
// );


// $("#project03").mouseover(function() {
//   $("#btn").show();
//   console.log();
// });
// $("#project03").mouseout(function() {
//   $("#btn").hide();
// });
//
// $(".text-hover-image").hover(function(e) {
//   $("body").append("<h1 id='image-when-hovering-text'><img src='../assets/images/spleen-1.png'/></h1>");
//   $("#image-when-hovering-text")
//     .css("position", "absolute")
//     .css("top", (e.pageY - yOff))
//     .css("left", (e.pageX + xOff))
//   // .fadeIn("fast");
//   console.log("ok");
// }, function() {
//   $("#image-when-hovering-text").remove();
// });
//
// $(".text-hover-image").mousemove(function(e) {
//   $("#image-when-hovering-text")
//     .css("top", ('--mouse-y'))
//     .css("left", ('--mouse-x'));
// });






//
//  $('#fuso').hide();
//
//          $(document).on('mouseenter mouseleave', '#project02', function(){
//     // By giving this function two triggers, the same action is performed for each trigger
//     $('#fuso').toggle();
// });



  //this function makes the category image appear on hover
  // $('.fuso-image').hide();

         //  $('#project02').hover(function() {
         //    $('#fuso').show();
         // },function() {
         //   $('#fuso').hide();
         // });


         // $("#project02").hover(
         //       function(){ $(this).css("opacity", "0");
         //             $(".fuso-image").css("opacity", "1");
         //             },
         //       function(){ $(this).css("opacity", "1");
         //             $(".fuso-image").css("opacity", "0");
         //             }
         // );



        //about--------------------------------------------//

                // $("#makeyourpresence").hover(
                //       function(){ $(this).css("opacity", "0");
                //             $("#makeyourpresence_hover").css("opacity", "1");
                //             },
                //       function(){ $(this).css("opacity", "1");
                //             $("#makeyourpresence_hover").css("opacity", "0");
                //             }
                // );

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

});
