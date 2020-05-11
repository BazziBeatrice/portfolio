// JavaScript Document



$("#image-phone-02").hide();
$("#image-phone-03").hide();
$("#image-phone-04").hide();
$("#image-phone-05").hide();
$("#image-phone-06").hide();
$("#image-phone-07").hide();

window.addEventListener('scroll', function() {

       $("#image-phone-01").show();
       $("#image-phone-02").hide();
       $("#image-phone-03").hide();
       $("#image-phone-04").hide();
       $("#image-phone-05").hide();
       $("#image-phone-06").hide();
       $("#image-phone-07").hide();

  if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
    $("#image-phone-01").hide();
    $("#image-phone-02").show();
    $("#image-phone-03").hide();
    $("#image-phone-04").hide();
    $("#image-phone-05").hide();
    $("#image-phone-06").hide();
    $("#image-phone-07").hide();
     }
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        $("#image-phone-01").hide();
        $("#image-phone-02").hide();
        $("#image-phone-03").show();
        $("#image-phone-04").hide();
        $("#image-phone-05").hide();
        $("#image-phone-06").hide();
        $("#image-phone-07").hide();
        }
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
          $("#image-phone-01").hide();
          $("#image-phone-02").hide();
          $("#image-phone-03").hide();
          $("#image-phone-04").show();
          $("#image-phone-05").hide();
          $("#image-phone-06").hide();
          $("#image-phone-07").hide();
          }
          if (document.body.scrollTop > 1620 || document.documentElement.scrollTop > 1620) {
                  $("#image-phone-01").hide();
                  $("#image-phone-02").hide();
                  $("#image-phone-03").hide();
                  $("#image-phone-04").hide();
                  $("#image-phone-05").show();
                  $("#image-phone-06").hide();
                  $("#image-phone-07").hide();
             }
              if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
                $("#image-phone-01").hide();
                $("#image-phone-02").hide();
                $("#image-phone-03").hide();
                $("#image-phone-04").hide();
                $("#image-phone-05").hide();
                $("#image-phone-06").show();
                $("#image-phone-07").hide();
                }
                if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
                       $("#image-phone-01").hide();
                       $("#image-phone-02").hide();
                       $("#image-phone-03").hide();
                       $("#image-phone-04").hide();
                       $("#image-phone-05").hide();
                       $("#image-phone-06").hide();
                     $("#image-phone-07").show();
                  }
                  if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
                    $("#image-phone-01").hide();
                    $("#image-phone-02").hide();
                    $("#image-phone-03").hide();
                    $("#image-phone-04").hide();
                    $("#image-phone-05").hide();
                    $("#image-phone-06").hide();
                    $("#image-phone-07").hide();
                    }
});

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
// AOS.init({
//  duration: 12
// });
//aos animation--------------------------------------------//


$(document).ready(function(){





  // // Add smooth scrolling to all links
  // $("a").on('click', function(event) {
  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();
  //     // Store hash
  //     var hash = this.hash;
  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });

// var slideIndex = 1;
// showSlides(slideIndex);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
//
// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

});
window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");

	// Sliders
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function() {
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen(); // Firefox
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen(); // Chrome and Safari
		}
	});


	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});


	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});

	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
	});
}
