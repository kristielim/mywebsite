var isMobile;
var FADE_TIME = 500;

function attachEventHandlers() {
	$('.closebtn').on('click', closeOverlay);
	$('.img-proj').on('click', handleImageClick); // when a div with the class image is clicked, do the function handleImageClick
	$('ul.navbar-nav.nav').on('click', function() {
		if(isMobile.matches){
			console.log("mobile");
			$('#myNavbar').addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
		}
	});
}

function closeOverlay(event) {
	const images = $('.img-proj');
	images.removeClass('selected');
	images.removeClass('not-selected');
	$('#overlay').fadeOut(FADE_TIME);
}

function changeText(label, text) {
	label.hide();
	label.text(text);
	label.fadeIn(FADE_TIME)
}

function handleImageClick(event) {
	$('#overlay').show();
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
	const sources = ['resources/bruinplay.png','resources/cruisinbruins.png','resources/ytplaylist.png','resources/hangman.png','resources/fbmessages.png','resources/starsearch.png'];
	const names = ['Bruin Play','Cruisin\' Bruins', 'Youtube Playlist','Hangman Game','Messenger Reader','Star Search'];
	const descriptions = [	'A web application that plays uploaded songs, final project in ACM Hack School--a full stack web dev course with Node.js. (HTML, CSS, JavaScript)',
							'A website that suggests activities around UCLA based on criteria such as price and transportation. (HTML, CSS, JavaScript)',
							'A Youtube playlist is made from every video ever sent to my Facebook Messenger account. It is based off tutorial from Julian Knodt. (JavaScript)',
							'A Harry Potter themed Hangman game, my final group project in AP Computer Science. (Java)',
							'A program to filter messages from the Facebook messenger archive by person and date, in chronological order. (JavaScript)',
							'A game to guess a secret word along with a helper AI that suggests words to win the game. (C++)']
	const links = ["https://github.com/kristielim/BruinPlay","https://github.com/kristielim/hothproject","https://goo.gl/dr76Pg","https://github.com/alveerak/hangman","https://goo.gl/pxypWU", "https://goo.gl/5NEk2j"];

	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.addClass('not-selected');
		closeOverlay();

	} else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		console.log(imgSrc);
		const index = sources.indexOf(imgSrc.toLowerCase());
		console.log(index);

		changeText(nameLabel,names[index]);
		changeText(descLabel,descriptions[index]);
		linkLabel.hide();
		linkLabel.attr('href',links[index]);
		linkLabel.fadeIn(FADE_TIME);

		if(isMobile.matches) {
			/*$('html, body').animate({
        		scrollTop: parseInt($("#project").offset().top)
   			}, 1000); no longer needed with overlay*/
   			$('#overlay').css('width', '100vw');
   			$('#overlay').css('margin-left', '-50vw');
   			$('.overlay-text').css('margin','20px');
		} else {
			$('#overlay').css('width', '40vw');
   			$('#overlay').css('margin-left', '-20vw');
   			$('.overlay-text').css('margin','60px');
		}
	}
	
}

$('document').ready(function() {

	attachEventHandlers();
	$('#overlay').hide();
	$('.proj-desc').hide();
	$('.proj-name').text("Click on a bubble!");
	$('.proj-more').hide();
	isMobile = window.matchMedia("only screen and (max-width: 760px)");

});
