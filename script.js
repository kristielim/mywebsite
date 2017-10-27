var isMobile;
var FADE_TIME = 500;

function attachEventHandlers() {
	// TODO
	$('.img-proj').on('click', handleImageClick); // when a div with the class image is clicked, do the function handleImageClick
	$('ul.navbar-nav.nav').on('click', function() {
		if(isMobile.matches){
			console.log("mobile");
			$('#myNavbar').addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
		}
	});
}

function changeText(label, text) {
	label.hide();
	label.text(text);
	label.fadeIn(FADE_TIME)
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
	const descriptions = ['This Youtube playlist is made from every video ever sent to my Facebook Messenger account. It is based off tutorial from Julian Knodt and uses NodeJS.',
							'This is a Harry Potter themed Hangman game, my final group project in AP Computer Science. It implements a GUI and uses Java.',
							'This is a program to filter messages from the Facebook messenger archive by person and date, in chronological or reverse chronological order. It uses NodeJS.']
	const links = ["https://goo.gl/dr76Pg","https://github.com/alveerak/hangman","https://goo.gl/pxypWU"];

	// TODO
	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.removeClass('not-selected');
		changeText(nameLabel,'Click on a bubble!');
		descLabel.hide();
		linkLabel.hide();

	} else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		const index = sources.indexOf(imgSrc);

		changeText(nameLabel,names[index]);
		changeText(descLabel,descriptions[index]);
		linkLabel.hide();
		linkLabel.attr('href',links[index]);
		linkLabel.fadeIn(FADE_TIME);

		if(isMobile.matches) {
			$('html, body').animate({
        		scrollTop: parseInt($("#project").offset().top)
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
