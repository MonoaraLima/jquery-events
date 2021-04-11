$(document).ready(function(){

// alert

$("#btn").click(function(){
	alert('hello');
});

});
// hide

$(document).ready(function(){

$("#hide").click(function(){

	$("h2").hide("slow");
	
});

$("#show").click(function(){

	$("h2").show(1000);
	
});
// toggle
$("#toggle").click(function(){

	$("h2").toggle();
	
});

$("#fadeout").click(function(){

	$("h2").fadeOut();
	
});
$("#fadein").click(function(){

	$("h2").fadeIn();
	
});

$("#fadetoggle").click(function(){

	$("h2").fadeToggle();
	
});

$(".panel").click(function(){

	$(".content").slideToggle(2000);
	
});
// mouse events
$(".p1").mouseenter(function(){
	$(this).css('color','red')
})

$(".p2").mouseout(function(){
	$(this).css('color','green')
})
$(".p3").mousedown(function(){
	$(this).css('color','teal')
})
$(".p4").mouseup(function(){
	$(this).css('color','yellow')
})
// focus and blur
$(".in2").focus(function(){
  $(this).css("background-color", "#cccccc");
})

$(".in1").blur(function(){
  $(this).css("background-color", "#ffffff");
});
// on event
$(".p-5").on({
  mouseenter: function(){
    $(this).css("background-color", "lightgray");
  },
  mouseleave: function(){
    $(this).css("background-color", "lightblue");
  },
  click: function(){
    $(this).css("background-color", "yellow");
  }
});
});

	
	