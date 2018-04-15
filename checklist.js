// checklist task

var data = '{"tasks":{"Cut Grass":true,"Clean Room":false,"Go to Gym":true,"Make Dinner":false,"Read Book":true}}';
var dataJ = JSON.parse(data);

var output = document.getElementById('output');
var taskList = document.querySelector('#taskList');

for (var key in dataJ.tasks) {
	console.log(key , dataJ.tasks[key]);
	var status = !dataJ.tasks[key] ? '' : 'checked';
	var html = '<li>' + key + '<input type="checkbox" value="'+key+'" '+status+'></li>';
	taskList.innerHTML += html;
}

addEvents();

function addEvents() {

	var checkboxes = document.querySelectorAll('#taskList input[type=checkbox]');
	for (var index in checkboxes) {
		checkboxes[index].onchange = updateJSON;
	}
	console.log(checkboxes);
}

function updateJSON() {
	var key = event.target.value;
	console.log(key);
}










// console.log(dataJ);