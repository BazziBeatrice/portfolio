// JavaScript Document


// navbar background color change on scroll
$(window).scroll(
        function(){
                        var scroll = $(window).scrollTop();
                        if (scroll < 1300) {$('.nav-bar-transition').css('background','none'); }
                        else {  $('.nav-bar-transition').css('background','black');}
                  }
)

//variables

$(document).ready(function(){

        pageName= location.pathname.substring(location.pathname.lastIndexOf("/")+1);
        pageName= pageName.substring(0,pageName.lastIndexOf("."))
        // console.log(pageName);

                // CheckCartIcon();
                // FillCart();




        //add to cart btn unhides elements
                $("#addCartbtn").click(
                        function() {
                                    localStorage.setItem(pageName, "true");
                                    CheckCartIcon();
                                    FillCart();
                                  }
                );


        //this function makes the category image appear on hover

                $("#MAKE").hover(
                        function(){     if (windWidth>1100 && windWidth<2000) {
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category01.jpg')")
                                        }
                                  },

                        function(){      if (windWidth>1100 && windWidth<2000) {
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );

                 $("#LEAVE").hover(
                        function(){
                                        if (windWidth>1100 && windWidth<2000) {
                                                $("#CategoryContainer").addClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "url('assets/images/category02.jpg')")
                                        }
                                  },

                        function(){      if (windWidth>1100 && windWidth<2000) {
                                                $("#CategoryContainer").removeClass("CategoryImgFadeIn");
                                                $("#CategoryContainer").css("background-image", "none")
                                        }
                                  }
                );




        //about--------------------------------------------//

                $("#makeyourpresence").hover(
                      function(){ $(this).css("opacity", "0");
                            $("#makeyourpresence_hover").css("opacity", "1");
                            },
                      function(){ $(this).css("opacity", "1");
                            $("#makeyourpresence_hover").css("opacity", "0");
                            }
                );



//LOADER

var loader = document.getElementById("loader");
})
