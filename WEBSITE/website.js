if(document.images) {
  var image1 = new Image();     // Preload an image
  this.image1.src = "sticker-telegram-manicure-vk-messaging-apps-png-favpng-XPCcDcGakRPp9p0A7F7q9WSbs-removebg-preview.png";
  var image2 = new Image();     // Preload second image
  this.image2.src = "eyelash-removebg-preview.png";
}

i = 0;
$(document).ready(function(){
  $("p").keypress(function(){
    $("span").text(i += 1);
  });
  $("#likeButton").click(function(){
    $("p").keypress();
  });
});
