/*Slide Toggle Nav Bar for Mobile Device*/
$(".nav-hamburger").click(function(){
  $(".nav-links").slideToggle(200);
  if($(this).attr("name") === "reorder-four-outline"){
    $(this).attr("name","close-outline");
  } else {
    $(this).attr("name","reorder-four-outline");
  }
})
