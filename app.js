

$('#root').html("<ul></ul>");
$('ul').html("<li id='li1'></li>");
$('#li1').html("<span>Сделать задание 3 по веб программированию</span> <input type='button' value='Удалить' id='button1'>");
//$('#li1').append("<input type='button' value='Удалить' id='button1'>");

$('#root').append('<input type="text" id="add_task_input">  <input type="button" id="add_task" value="Добавить элемент в список"> ');

$('#add_task').click(function(){
	var inputVal = $('#add_task_input').val();
	$('ul').append("<li id='li2'> </li>");
	$('#li2').html("<span>" + inputVal + "</span> <input type='button' value='Удалить' id='button2'>");
	
	$('#button2').click(function(){
	$('#li2').remove();
});
});



$('#button1').click(function(){
	$("#li1").remove();
});

