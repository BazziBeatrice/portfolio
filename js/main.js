// JavaScript Document

// $(document).ready(function(){});


// if (matchMedia('only screen and (max-width: 768px)').matches) {
// if($(window).width() > 768){
//     $("#image-phone-01").hide();$("#image-phone-02").hide();$("#image-phone-03").hide();$("#image-phone-04").hide();
//   $("#image-phone-05").hide();$("#image-phone-06").hide();$("#image-phone-07").hide();}

if($(window).width() <= 768){

$("#image-phone-02").hide();$("#image-phone-03").hide();$("#image-phone-04").hide();$("#image-phone-05").hide();$("#image-phone-06").hide();$("#image-phone-07").hide();

window.addEventListener('scroll', function() {

       $("#image-phone-01").show();$("#image-phone-02").hide();$("#image-phone-03").hide();$("#image-phone-04").hide();
       $("#image-phone-05").hide();$("#image-phone-06").hide();$("#image-phone-07").hide();

  if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
    $("#image-phone-01").hide();$("#image-phone-02").show();$("#image-phone-03").hide();
    $("#image-phone-04").hide();$("#image-phone-05").hide();$("#image-phone-06").hide();$("#image-phone-07").hide();
     }
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        $("#image-phone-01").hide();$("#image-phone-02").hide(); $("#image-phone-03").show();
        $("#image-phone-04").hide();$("#image-phone-05").hide();$("#image-phone-06").hide();
        $("#image-phone-07").hide();
        }
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
          $("#image-phone-01").hide();$("#image-phone-02").hide();$("#image-phone-03").hide();
          $("#image-phone-04").show();$("#image-phone-05").hide();$("#image-phone-06").hide();
          $("#image-phone-07").hide();
          }
          if (document.body.scrollTop > 1620 || document.documentElement.scrollTop > 1620) {
                  $("#image-phone-01").hide();$("#image-phone-02").hide();  $("#image-phone-03").hide();
                  $("#image-phone-04").hide();$("#image-phone-05").show();$("#image-phone-06").hide();
                  $("#image-phone-07").hide();
             }
              if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
                $("#image-phone-01").hide();$("#image-phone-02").hide();$("#image-phone-03").hide();
                $("#image-phone-04").hide();  $("#image-phone-05").hide();  $("#image-phone-06").show();
                $("#image-phone-07").hide();
                }
                if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
                       $("#image-phone-01").hide();$("#image-phone-02").hide();$("#image-phone-03").hide();
                       $("#image-phone-04").hide();$("#image-phone-05").hide();$("#image-phone-06").hide();
                     $("#image-phone-07").show();
                  }
                  if (document.body.scrollTop > 2900 || document.documentElement.scrollTop > 2900) {
                    $("#image-phone-01").hide();$("#image-phone-02").hide();$("#image-phone-03").hide();
                    $("#image-phone-04").hide();$("#image-phone-05").hide();$("#image-phone-06").hide();
                    $("#image-phone-07").hide();
                    }
});
}


//LOADER
var loader = document.getElementById("loader");

window.setTimeout(function(){loader.style.height="500px";loader.style.width="500px";loader.style.visibility ="hidden";}, 2000);

/* Open */
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
