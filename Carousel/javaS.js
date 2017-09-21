// alert('Kas yyyra?!');

// Vykdyti kazka, kai uzsikrauna visas html.
document.addEventListener("DOMContentLoaded", function(event) {
    var toggleToolbar = document.getElementById('toggle-toolbar');
	// console.log(toolbar);
	document.addEventListener('keyup', function(event) {
		// console.log(event.keyCode); ATRANDA klaviaturos simbolio skaiciu.
//Jei paspausti i desine, tai pakesiti keisti funkcija
//pakeistiNuotrauka, o jei kaire, tai keisti funkcija
//pakeistiNuotraukaAtgal.
		if(event.keyCode == 39) {
			pakeistiNuotrauka();
		} else if (event.keyCode == 37) {
			pakeistiNuotraukaAtgal();
		};
	});
	// Migtukai valdyti karusele
	var pirmyn = document.getElementById('pirmyn');
	var atgal = document.getElementById('atgal');
	var random = document.getElementById('random'); 
	var play = document.getElementById('play');

	var slider = document.querySelectorAll('#slider img');
	var lastImage;
	var random = document.getElementById('random');
	play.addEventListener("click", autoPlay);
	pirmyn.addEventListener('click', pakeistiNuotrauka);
	atgal.addEventListener('click', pakeistiNuotraukaAtgal);
	random.addEventListener('click', randomNuotraukos); 

toggleToolbar.addEventListener('click', function() {

// paspaudus mygtuka paslepti div'a su id toggle-toolbar.
	var toolbar = document.getElementById('toolbar')
	toolbar.classList.toggle('hide');
	var right = document.getElementById('toggle-right');
	var down = document.getElementById('toggle-down');
	right.classList.toggle('hide');
	down.classList.toggle('hide');
	});

var slider = document.querySelectorAll('#slider img');

// Random nuotraukos numeris


 });

var imgNumber = 1;

// Funkcija kuri manipuliuoja rodoma nuotrauka

function pakeistiNuotrauka() {
	imgNumber++;
	console.log(imgNumber);
	var sliderImg = document.getElementById('sliderImg');
	// console.log(sliderImg);

	if (imgNumber > 6) {
		imgNumber = 1;
	}
	sliderImg.setAttribute('src', 'Carousel/img/'+ imgNumber + '.jpg');

// Kai pasiekiam paskutine nuotrauka gryzti i pradzia

	
};
// Kai pasiekia pirma nuotrauka gryzti i pabaiga

function pakeistiNuotraukaAtgal() {
	imgNumber--;
	if(imgNumber < 1) {
		imgNumber = 6;
	};
	sliderImg = document.getElementById('sliderImg');
	sliderImg.setAttribute('src', 'Carousel/img/'+ imgNumber + '.jpg');
	console.log(imgNumber);
};
// 1 variantas randomo!

function randomNuotraukos() {
	imgNumber = Math.floor((Math.random() * 6) + 1);
	sliderImg = document.getElementById('sliderImg');
	sliderImg.setAttribute('src', 'Carousel/img/'+ imgNumber + '.jpg');
	console.log(imgNumber);
	stopPlay();
}

var sliderInterval = 0;
function autoPlay() {
	if(sliderInterval == 0) {
		sliderInterval = window.setInterval(pakeistiNuotrauka, 1000)
	} else {
		window.clearInterval(sliderInterval);
		sliderInterval = 0;
	}

};
