$('.slider-principal').slick({
	infinite: true,
	dots: true,
	speed: 600,
	slidesToShow: 1
});

setInterval(function(){document.getElementsByClassName("slick-next")[0].click()}, 10*1000);