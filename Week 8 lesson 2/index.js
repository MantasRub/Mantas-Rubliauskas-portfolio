var persons = [];

$(document).ready(function() {
	$('button[type=submit]').click(function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var email = $('#email').val();
		var position = $('#position').val();

		var person = new Person(name, email, position);
		persons.push(person);
		showData();
	})

})
function showData() {
	var tbody = $('table tbody');
	tbody.html('');
	for(var i = 0; i < persons.length; i++) {
		tbody.append('<tr>' +
			'<td>' + (i+1) + '</td>' +
			'<td>' + persons[i].name + '</td>' +
			'<td>' + persons[i].email + '</td>' +
			'<td>' + persons[i].position + '</td>' +
			'<td>' + '<img  style="border-radius: 50%;" class="avatar" src="' + persons[i].avatar + '">' + '</td>' +
			'<td><a href"#" class="btn btn-danger delete" data-id="' + persons[i].id + '">X</a></td>' + 
			'</tr>');
	}
	$('.delete').click(function(e) {
		e.preventDefault();
		var id = $(this).data('id');
		deleteOne(id);
	})
}
function deleteOne(id) {
	for(var i = 0; i < persons.length; i++) {
		if(persons[i].id == id) {
			persons.splice(i, 1);
			break;
		}
	}
	showData();
}