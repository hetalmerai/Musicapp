$(document).ready(function(){
	$(".w3-block").on("click",function(){
			// console.log("w3 block",this)
			$("div.w3-block").removeClass("w3-show");
			$(this).next().addClass("w3-show")
});

});