
function attachEventHandlers() {
	// TODO
	$('.img-proj').on('click', handleImageClick); // when a div with the class image is clicked, do the function handleImageClick
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.img-proj');
	const nameLabel = $('.proj-name');
	const descLabel = $('.proj-desc');
	const linkLabel = $('.proj-more');

	const imgSrc = target.attr('src');
	const sources = ['ytplaylist.PNG','hangman.png','fbmessages.PNG'];
	const names = ['Youtube Messenger Playlist','Hangman Game','Messenger Reader'];
	const descriptions = ['This Youtube playlist is made from every message ever sent to my Facebook Messenger account. It is based off tutorial from Julian Knodt and uses NodeJS.',
							'This is a Harry Potter themed Hangman game, my final group project in AP Computer Science. It implements a GUI and uses Java.',
							'This is a program to filter messages from the Facebook messenger archive by person and date, in chronological or reverse chronological order. It uses NodeJS.']
	const links = ["https://goo.gl/dr76Pg","https://github.com/alveerak/hangman","https://goo.gl/pxypWU"];

	// TODO
	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.removeClass('not-selected');
		nameLabel.hide();
		descLabel.text("Click on a bubble to learn more!");
		linkLabel.hide();
		
	} else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		const index = sources.indexOf(imgSrc);

		nameLabel.text(names[index]);
		descLabel.text(descriptions[index]);
		linkLabel.attr('href',links[index]);
		nameLabel.show();
		descLabel.show();
		linkLabel.show();
	}
	
}

$('document').ready(function() {

	attachEventHandlers();
	$('.proj-name').hide();
	$('.proj-desc').text("Click on a bubble to learn more!");
	$('.proj-more').hide();

});
