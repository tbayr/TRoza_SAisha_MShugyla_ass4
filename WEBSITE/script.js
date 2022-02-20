function pushUpMessage() {
    document.getElementById('sound').play();
}

$(document).ready(function(){
  $("button").click(function(){
    alert("The pay was successfully submitted");
  });
});
