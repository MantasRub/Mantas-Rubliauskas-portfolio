// Surandam DOM elementą
var mygtukas = document.getElementById('toggle-rectangle');
var divas = document.getElementById('rectangle');
var uzvestaPele = document.getElementById('rectangle');

// Funkcija, kuri išves mygtuko tekstą
function kaiMygtukasPaspaustas(event) {
	var tekstas = event.target.innerHTML;

	alert("Ko cia spaudineji mane!");
}

//per class toggle
function divrectangle() {
	
	divas.classList.toggle('hide');
}
function kaiUzvestaPele() {
	divas.style.backgroundColor = 'limegreen';
}
function kaiNeUzvestaPele () {
	divas.style.backgroundColor = 'gold';
}
function dblClick () {
	divas.style.backgroundColor = 'red';
}
//per style savybes
// if(divas.style.display == 'none') {
// 	divas.style.display = 'block';
// } else {
// 	divas.style.display = 'none';
// }


// Prisikabinam event'ą: kai paspausime elemento - įvykdys kaiMygtukasPaspaustas() funkciją
mygtukas.addEventListener('click', kaiMygtukasPaspaustas);
mygtukas.addEventListener('click', divrectangle);
uzvestaPele.addEventListener('mouseover', kaiUzvestaPele);
uzvestaPele.addEventListener('mouseout', kaiNeUzvestaPele);
uzvestaPele.addEventListener('dblclick', dblClick);
