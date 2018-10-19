var fox,
    wolf;
$(document).ready(()=>
{
  fox = $("#fox");
  wolf = $("#wolf");

});

//-------------------------- personage movements --------------------------
var move = {
  left: function(personage, distance, speed)
    {personage.animate({left: "-="+distance+"px"}, speed)},
  right: function(personage, distance, speed)
    {personage.animate({left: "+="+distance+"px"}, speed)},
  up: function(personage, distance, speed)
    {personage.animate({top: "-="+distance+"px"}, speed)},
  down: function(personage, distance, speed)
    {personage.animate({top: "+="+distance+"px"}, speed)}
};


//var go = setInterval(()=>{move.down(fox,1,1)});
