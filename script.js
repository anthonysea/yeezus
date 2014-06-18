$(document).ready(function() {

	count = 0;
	kanye = document.getElementById('kanye').getContext('2d');

	$("#sadboyz, #whye, #forsake, #808, #nolove, #heartless, #lr").fadeOut(10);

	$("#yeezus").click(function() {
		$(this).animate({
			'font-size': '+=100%'
		});

		$("#heartbreak").fadeOut(1200);

		count += 1;

		if (count >= 3) {

			$(this).fadeOut(300);

			img = new Image();

			img.onload = function() {kanye.drawImage(img, 0, 0);};
			
			img.src = 'sad-kanye.jpg';

			$("#sadboyz").fadeIn(2000);

			$("#whye").fadeIn(2000);
			setTimeout(function() {$("#forsake").fadeIn(2000);}, 3000);
			setTimeout(function() {$("#808").fadeIn(2000);}, 4000);
			setTimeout(function() {$("#nolove").fadeIn(2000);}, 6000);
			setTimeout(function() {$("#heartless").fadeIn(2000);}, 4500);
			setTimeout(function() {$("#lr").fadeIn(2000);}, 5000);
		}

	});

	



});