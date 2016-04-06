function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }
function Complete(){
	var Fname = document.getElementById('fname').value;
	var Dob = document.getElementById('dob').value;
	var Feelings = document.getElementById('feelings').value;
	var Subject = document.getElementById('subject').value;
	var Colour = document.getElementById('colour').value;
	var Interest = document.getElementById('interest').value;
	
	ConsoleTest(Fname, Dob, Feelings, Subject, Colour, Interest);
	ResetInputs();
}
function ResetInputs(){
	document.getElementById('fname').value = "";
	document.getElementById('dob').value = "";
	document.getElementById('feelings').value = "";
	document.getElementById('subject').value = "";
	document.getElementById('colour').value = "";
	document.getElementById('interest').value = "";
}
function ConsoleTest(Fname, Dob, Feelings, Subject, Colour, Interest){
	console.log(Fname);
	console.log(Dob);
	console.log(Feelings);
	console.log(Subject);
	console.log(Colour);
	console.log(Interest);
}

/*$('.noEnterSubmit').bind('keypress', false);

$('.noEnterSubmit').keypress(function(e){
    if ( e.which == 13 ) return false;
    //or...
    if ( e.which == 13 ) e.preventDefault();
});
*/
document.querySelector('form').onkeypress = checkEnter;
function checkEnter(e){
	e = e || event;
	var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
	return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
}