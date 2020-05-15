$(document).ready(function () {

//$("#specchietto > g").hide();
$("#physicalinternet-description1").hide();$("#physicalinternet-description2").hide();
$("#physicalinternet-description3").hide();$("#physicalinternet-description4").hide();

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
