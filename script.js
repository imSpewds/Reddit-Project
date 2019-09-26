$(document).ready(function(){
	$(".aw").hide();
	$(".fun").hide();
	$(".bread").hide();
	
	$("#banAw").click(function(){
		$(".aw").fadeIn("slow");
	});
	
	$("#banFun").click(function(){
		$(".fun").fadeIn("slow");
	});
	
	$("#banBread").click(function(){
		$(".bread").fadeIn("slow");
	});
});
