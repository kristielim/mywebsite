
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
	const sources = ['ytplaylist.png','hangman.png','fbmessages.png'];
	const names = ['Youtube Messenger Playlist','Hangman Game','Facebook Messenger Reader'];
	const descriptions = ['A Youtube playlist made from every message ever sent to my Facebook Messenger account.\nBased off tutorial from Julian Knodt.\nUses NodeJS.',
							'A Harry Potter themed Hangman game. Final group project in AP Computer Science class.\nDefeat dark wizards by casting spells.\nUses Java.',
							'A program to filter messages from the Facebook messenger archive by person and date, in chronological or reverse order.\nUses NodeJS.']
	const links = ["https://goo.gl/dr76Pg","https://github.com/alveerak/hangman","https://goo.gl/pxypWU"];

	// TODO
	if(target.hasClass('selected')) {
		target.removeClass('selected');
		images.removeClass('not-selected');
		nameLabel.text("");
		descLabel.text("");
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
		linkLabel.show();
	}
	
}

$('document').ready(function() {

	attachEventHandlers();
	$('.proj-name').text("");
	$('.proj-desc').text("");
	$('.proj-more').hide();

});
