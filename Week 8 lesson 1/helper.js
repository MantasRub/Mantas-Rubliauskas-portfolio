$(document).ready(function() {
	$('#warning').click(function(e) {
		e.preventDefault();
		var dialog = new Dialog('warning', 'Ispejimo pranesimas.');
		dialog.show();
	});
	$('#success').click(function(e) {
		e.preventDefault();
		var dialog = new Dialog('success', 'Ispejimo pranesimas.');
		dialog.show();
	});
	$('#danger').click(function(e) {
		e.preventDefault();
		var dialog = new Dialog('danger', 'Ispejimo pranesimas.');
		dialog.show();
	});
})