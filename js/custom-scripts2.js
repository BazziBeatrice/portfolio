$(document).ready(function () {

//$("#specchietto > g").hide();
$("#physicalinternet-description1").hide();$("#physicalinternet-description2").hide();
$("#physicalinternet-description3").hide();$("#physicalinternet-description4").hide();

  $("#colors-spleen	> g").hide();

    $("#ed-hover").hide();$("#ind-hover").hide();$("#exp-hover").hide();
    $("#pers-hover").hide();$("#cal-hover").hide();$("#adv-hover").hide();$("#col-hover").hide();


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



  // ---- SPLEEN editorial
  $("#categories-spleen #ed").hover(function() {
    $("#colors-spleen #editorial").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #ed-hover").show();
  }, function() {
    $("#colors-spleen #editorial").hide();
    $("#categories-spleen #ed").css("opacity", 1);
    $("#categories-spleen #ed-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #ind").hover(function() {
    $("#colors-spleen #index").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #ind-hover").show();
  }, function() {
    $("#colors-spleen #index").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #ind").css("opacity", 1);
    $("#categories-spleen #ind-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #exp").hover(function() {
    $("#colors-spleen #expert").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #exp-hover").show();
  }, function() {
    $("#colors-spleen #expert").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #exp").css("opacity", 1);
    $("#categories-spleen #exp-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #pers").hover(function() {
    $("#colors-spleen #personal").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #pers-hover").show();
  }, function() {
    $("#colors-spleen #personal").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #pers").css("opacity", 1);
    $("#categories-spleen #pers-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #cal").hover(function() {
    $("#colors-spleen #calendar").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #cal-hover").show();
  }, function() {
    $("#colors-spleen #calendar").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #cal").css("opacity", 1);
    $("#categories-spleen #cal-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #adv").hover(function() {
    $("#colors-spleen #adv_1_").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #adv-hover").show();
  }, function() {
    $("#colors-spleen #adv_1_").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #adv").css("opacity", 1);
    $("#categories-spleen #adv-hover").hide();
  });

  // ---- SPLEEN editorial
  $("#categories-spleen #col").hover(function() {
    $("#colors-spleen #colophon").show();
    $(this).css("opacity", 1);
    $("#categories-spleen #col-hover").show();
    $("#categories-spleen #col").css("opacity", 0);
  }, function() {
    $("#colors-spleen #colophon").hide();
    $(this).css("opacity", 0);
    $("#categories-spleen #col").css("opacity", 1);
    $("#categories-spleen #col-hover").hide();
  });

// $(".p01").hover(function() {
//   $(".text-over").show();
// }, function() {
//   $(".text-over").hide();
// });
});


//LOADER

var loader = document.getElementById("loader");

window.setTimeout(function(){loader.style.height="500px";loader.style.width="500px";loader.style.visibility ="hidden";}, 2000);
