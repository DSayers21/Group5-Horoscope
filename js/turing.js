var output = " ";
var Interest;

if (!String.prototype.contains) {
    String.prototype.contains = function(s) {
        return this.indexOf(s) > -1;
    }
}

function CheckMood(MoodArr, CheckStr){
	var Input = CheckStr.split(" ");
	for (i = 0; i < MoodArr.length; i++) 
	{ 
		for (j = 0; j < Input.length; j++) 
		{
			if(MoodArr[i] == Input[j]) 
			{
				return true;
			}
		}
	}
	return false;
}

function typedText(question, cursor) {
    $(function(){
$(cursor).typed({
					// strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
					stringsElement: $(question),
					typeSpeed: 30,
					backDelay: 500,
					loop: false,
					contentType: 'html', // or text
					// defaults to false for infinite loop
					loopCount: false,
					callback: function(){ foo(); },
					resetCallback: function() { newTyped(); }
				});

				$(".reset").click(function(){
					$(cursor).typed('reset');
				});

				});

				function newTyped(){ /* A new typed object */ }

				function foo(){ console.log("Callback"); }
}

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
    }

function ResetInputs(){
	document.getElementById('fname').value = "";
	document.getElementById('feelings').value = "";
	document.getElementById('subject').value = "";
	document.getElementById('interest').value = "";
}

function userHello(stuff)
{
    $('#welcome').html('<p>' + stuff + '</p>');
     
     toggle_visibility('Start');
     toggle_visibility('Q1'); 
     typedText('#typed-strings', '#typed');
}

//Get Information from user
function userName(stuff) 
{
    // Grab Value
    var Fname = document.getElementById('fname').value;
    // Add to horoscope
    console.log(Fname);

     $('#FirstName').html('<p>' + stuff + '</p>');
     
     toggle_visibility('Q1'); 
     toggle_visibility('Q2'); 
     typedText('#typed-Q2', '#typedQ2');
}
function userAge(stuff)
{
    // Star sign
    var Dob = Number(hiddenDate);
    var userStar;
    if (Dob <= 419) { userStar="Aries"; }
    else if (Dob <= 520) { userStar="Taurus"; }
    else if (Dob <= 620) { userStar="Gemini"; }
    else if (Dob <= 722) { userStar="Cancer"; }
    else if (Dob <= 822) { userStar="Leo"; }
    else if (Dob <= 922) { userStar="Virgo"; }
    else if (Dob <= 1022) { userStar="Libra"; }
    else if (Dob <= 1121) { userStar="Scorpio"; }
    else if (Dob <= 1221) { userStar="Sagittarius"; }
    else if (Dob >= 1222) { userStar="Capricorn"; }
    else if (Dob <= 119) { userStar="Capricorn"; }
    else if (Dob <= 218) { userStar="Aquarius"; }
    else if (Dob <= 320) { userStar="Pisces"; }
    
	var ageLetter;
	// Age
    var Age = Number(hiddenYear);
    // Debug
    console.log(userStar);
	console.log(Age);
    // Add to HTML
    
    $('#userSign').html('<p>' + stuff + '</p>');

    toggle_visibility('Q2'); 
    toggle_visibility('Q3'); 
    typedText('#typed-Q3', '#typedQ3');
}
function userFeelings(stuff)
{
    var Feelings = document.getElementById('feelings').value;
	console.log(Feelings);
    // Add to HTML
    $('#userFeel').html('<p>' + stuff + '</p>');
    toggle_visibility('Q3'); 
    toggle_visibility('Q4'); 
    typedText('#typed-Q4', '#typedQ4')
}
function userSubject(stuff)
{
	//subject
    var Subject = document.getElementById('subject').value;
	console.log(Subject);
    $('#userSub').html('<p>' + stuff + '</p>');
    toggle_visibility('Q4'); 
    toggle_visibility('Q6');  
    typedText('#typed-Q5', '#typedQ5')
}
// Public so the HTML can see it 
function Complete(stuff){
    //Interests
    
    $("#userAns").html("<p>" + stuff + "</p>");
    toggle_visibility('Q6');
    toggle_visibility('Answer'); 
    typedText('#typed-Q6', '#typedQ6')
	ResetInputs();
}