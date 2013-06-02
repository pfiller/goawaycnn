var yesIReallyWantToSeeCNN = function(evt){
	evt.preventDefault();
	$(".cnn-overlay, .go-away-link").remove();
	$("body").removeClass("with-go-away-cnn");
}

$(function(){
	var div = $("<div />", { class: "cnn-overlay"});
	var a = $("<a />", { class: "go-away-link", href: "#" }).html("BREAKING: you don't really want to see this, do you?").click(yesIReallyWantToSeeCNN);
	$("body").addClass("with-go-away-cnn").prepend(div, a);
})
