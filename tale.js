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

$(document).keydown(e => { if(e.which == 87) { move.up(fox,10,1) }; });
$(document).keydown(e => { if(e.which == 68) { move.right(fox,10,1) }; });
$(document).keydown(e => { if(e.which == 65) { move.left(fox,10,1) }; });
$(document).keydown(e => { if(e.which == 83) { move.down(fox,10,1) }; });

$(document).keydown(e => { if(e.which == 38) { move.up(wolf,10,1) }; });
$(document).keydown(e => { if(e.which == 39) { move.right(wolf,10,1) }; });
$(document).keydown(e => { if(e.which == 37) { move.left(wolf,10,1) }; });
$(document).keydown(e => { if(e.which == 40) { move.down(wolf,10,1) }; });


//var go = setInterval(()=>{move.down(fox,1,1)});
