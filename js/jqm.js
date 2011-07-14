$(document).ready(function(){
	$("a").bind("mouseup", function(){
		$(".ui-btn-active").removeClass("ui-btn-active");
	});
	$("a").bind("touchend", function(){
		$(".ui-btn-active").removeClass("ui-btn-active");
	});
});