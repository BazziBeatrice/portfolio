// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project

// This is Javascript code to make the example in question02 work, feel free to remove this when you start working on your project
$(document).ready(function () {

//$("#specchietto > g").hide();
$("#physicalinternet-description1").hide();
$("#physicalinternet-description2").hide();
$("#physicalinternet-description3").hide();
$("#physicalinternet-description4").hide();


// -----------------------------------------CLICK ON THE HASHTAGS

 // ---- setjetting
  // $("#sfondo_3 #setjetting").click(function() {
  //   console.log("clicco");
  // $("#sfondo_3 #setjetting").hide();
  // $("#sfondo_3 #setjetting2").show();
  // $("#sfondo_3 #seichijunrei").show();
  // $("#sfondo_3 #seichijunrei2").hide();
  // $("#sfondo_3 #all").show();
  // $("#sfondo_3 #all2").hide();
  // $("#immagini>").hide();
  // $("#sfondo_3 .setj").show();
  // });


// -----------------------------------------RECREATING THE SCENE

 // ---- AFRICAN QUEEN
  // $("#immagini #img99_3_").hover(function() {
  // $("#focus-recreating #african_queen").show();
  // $("#Cick_here").hide();
  // $(this).css("opacity", 1);
  // $("#immagini >").css("opacity", 0.4);
  // $("#immagini #img99_3_").css("opacity", 1);
  // }, function() {
  // $("#focus-recreating #african_queen").hide();
  // $("#Cick_here").show();
  // $(this).css("opacity", 0);
  // $("#immagini >").css("opacity", 1);
  // });

  // ---- PHYSICALINTERNET Shapes
   $("#physicalinternet-image1").hover(function() {
   $("#physicalinternet-description1").show();
   $(this).css("opacity", 1);
   $("#physicalinternet-image2").css("opacity", 0.4);
   $("#physicalinternet-image3").css("opacity", 0.4);
   $("#physicalinternet-image4").css("opacity", 0.4);
   }, function() {
   $("#physicalinternet-description1").hide();
   $(this).css("opacity", 1);
   $("#physicalinternet-image2").css("opacity", 1);
   $("#physicalinternet-image3").css("opacity", 1);
   $("#physicalinternet-image4").css("opacity", 1);
   });

  // ---- PHYSICALINTERNET Size scale
   $("#physicalinternet-image2").hover(function() {
   $("#physicalinternet-description2").show();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 0.4);
   $("#physicalinternet-image3").css("opacity", 0.4);
   $("#physicalinternet-image4").css("opacity", 0.4);
   }, function() {
   $("#physicalinternet-description2").hide();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 1);
   $("#physicalinternet-image3").css("opacity", 1);
   $("#physicalinternet-image4").css("opacity", 1);
   });

  // ---- PHYSICALINTERNET Line stroke
   $("#physicalinternet-image3").hover(function() {
   $("#physicalinternet-description3").show();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 0.4);
   $("#physicalinternet-image2").css("opacity", 0.4);
   $("#physicalinternet-image4").css("opacity", 0.4);
   $("#physicalinternet-image3").css("opacity", 1);
   }, function() {
   $("#physicalinternet-description3").hide();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 1);
   $("#physicalinternet-image2").css("opacity", 1);
   $("#physicalinternet-image4").css("opacity", 1);
   });

  // ---- PHYSICALINTERNET Background
   $("#physicalinternet-image4").hover(function() {
   $("#physicalinternet-description4").show();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 0.4);
   $("#physicalinternet-image2").css("opacity", 0.4);
   $("#physicalinternet-image3").css("opacity", 0.4);
   }, function() {
   $("#physicalinternet-description4").hide();
   $(this).css("opacity", 1);
   $("#physicalinternet-image1").css("opacity", 1);
   $("#physicalinternet-image2").css("opacity", 1);
   $("#physicalinternet-image3").css("opacity", 1);
   });

});
