// JavaScript Document

 $('#fuso').hide();

         $(document).on('mouseenter mouseleave', '#project02', function(){
    // By giving this function two triggers, the same action is performed for each trigger
    $('#fuso').toggle();
});


$(document).ready(function(){

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


})
