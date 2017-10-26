var isMobile;

function attachEventHandlers() {
	// TODO
	$('.img-proj').on('click', handleImageClick); // when a div with the class image is clicked, do the function handleImageClick
}

function handleImageClick(event) {
	if(isMobile.matches) {
		console.log("mobile device");
	} else {
		console.log("not a mobile device");
	}

	const target = $(event.target);
	const images = $('.img-proj');
	const nameLabel = $('.proj-name');
	const descLabel = $('.proj-desc');
	const linkLabel = $('.proj-more');

	const imgSrc = target.attr('src');
	const sources = ['ytplaylist.PNG','hangman.png','fbmessages.PNG'];
	const names = ['Youtube Playlist','Hangman Game','Messenger Reader'];
	const descriptions = ['This Youtube playlist is made from every message ever sent to my Facebook Messenger account. It is based off tutorial from Julian Knodt and uses NodeJS.',
							'This is a Harry Potter themed Hangman game, my final group project in AP Computer Science. It implements a GUI and uses Java.',
							'This is a program to filter messages from the Facebook messenger archive by person and date, in chronological or reverse chronological order. It uses NodeJS.']
	const links = ["https://goo.gl/dr76Pg","https://github.com/alveerak/hangman","https://goo.gl/pxypWU"];

	const FADE_TIME = 400;
	// TODO
	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.removeClass('not-selected');
		descLabel.fadeOut(FADE_TIME);
		nameLabel.fadeOut(FADE_TIME, function() {
			nameLabel.text("Click on a bubble!");
			nameLabel.fadeIn(FADE_TIME);
		});
		linkLabel.fadeOut(FADE_TIME);

	} else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		const index = sources.indexOf(imgSrc);

		nameLabel.fadeOut(FADE_TIME, function() {
			nameLabel.text(names[index]);
			nameLabel.fadeIn(FADE_TIME);
		});
		descLabel.fadeOut(FADE_TIME, function() {
			descLabel.text(descriptions[index]);
			descLabel.fadeIn(FADE_TIME);
		});
		linkLabel.fadeOut(FADE_TIME, function() {
			linkLabel.attr('href',links[index]);
			linkLabel.fadeIn(FADE_TIME);
		});

		if(isMobile.matches) {
			$('html, body').animate({
        		scrollTop: parseInt($("#proj").offset().top)
   			}, 1000);
		}
	}
	
}

$('document').ready(function() {

	attachEventHandlers();
	$('.proj-desc').hide();
	$('.proj-name').text("Click on a bubble!");
	$('.proj-more').hide();
	isMobile = window.matchMedia("only screen and (max-width: 760px)");

});
