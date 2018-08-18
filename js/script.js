$('.main-slider').slick({
	dots: true,
});
$(".tab-link").on("click", function(e){
$(".tab-link").removeClass("current");
$(this).addClass("current");
$(".slides-item").removeClass("current");
$($(this).attr("href")).addClass("current");

});