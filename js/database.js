var horoscopeData = TAFFY([{starsign:"aries", content:"Aries will find good news in the days ahead.<br> "},                        
                        {starsign:"taurus", content:"Those from Taurus have fortune in their favour soon.<br> "},                        
                        {starsign:"gemini", content:"Those marked by Gemini could be greatened in the coming days.<br> "},                       
                        {starsign:"cancer", content:"Those under Cancer could find good tidings heading their way.<br> "},                        
                        {starsign:"leo", content:"Those of Leo may find joy in the next few days.<br> "},                        
                        {starsign:"virgo", content:"Don’t worry Virgo as your luck is on the up.<br> "},                        
                        {starsign:"libra", content:"Libra will be bringing you news in the coming weeks.<br> "},                        
                        {starsign:"scorpio", content:"Scorpios should hold their heads high today.<br> "},                        
                        {starsign:"sagittarius", content:"Sagittarius will be the bearer of fortune in the days ahead.<br> "},                        
                        {starsign:"capricorn", content:"There's good news for capricorns this week.<br> "},                        
                        {starsign:"aquarius", content:"Followers of Aquarius should find greater happiness soon.<br>"},                        
                        {starsign:"pisces", content:"Pisces should be on the lookout this week.<br> "},
                        {mood:"1", content:"<p>Your good mood is something you <br>shouldn’t keep to yourself,<br> why not try improving someone else’s day as well. </p>"},
                        {mood:"1", content:"<p>The happiness that currently flows <br>through you reveals that your<br> doubts are misplaced. Focus on that if they try to appear again.</p> "},
                        {mood:"2", content:"<p>While your current mood might not seem <br>the best it might turn out<br> to simply be a symptom of contentment you currently feel.<br> Don’t look too much into possible negative feelings you have. </p>"},
                        {mood:"2", content:"<p>Though you may not currently feel at your<br> best this isn’t a bad thing.<br> We all experience ups and downs and that means your <br>future looks bright.</p> "},
                        {mood:"3", content:"<p>Your mood may be dark at the current <br>moment but don’t fear as every day<br> offers new opportunities to improve it. Don’t allow <br>your mood to stop you from experiencing those opportunities.</p> "},
                        {mood:"3", content:"<p>Though things right now may seem bleak<br> don’t fret. Everyone experiences<br> bad days and understand how it can be. Why not spend <br>times with your friends and loved ones to see if your mood improves. </p>"},
                        {age:"a", content:"<p>You may often find yourself cursing your<br> youthful nature but you shouldn’t<br> take it for granted. These are your most <br>responsibility-free years of your life<br> and you’re unlikely to ever be so carefree again.</p> "},
                        {age:"a", content:"<p>Your current age gives you the most <br>opportunity to try out new things.<br> Don’t miss this chance to find out what you want to<br> do with your life. </p>"},
                        {age:"b", content:"<p>Despite your young age you will be <br>required to make some serious choices in<br> the coming months. Now is the time to show people<br> who you want to be. </p>"},
                        {age:"b", content:"<p>Though you have seen few years you <br>shouldn’t be dissuaded from aiming high.<br> A risk every now and then can make a positive <br>difference in your life. </p>"},
                        {age:"b", content:"<p>You may sometimes feel you are looked<br> down on due to your youth but fear not.<br> Now is the best time to learn new and skills <br>and make connections that can help you well into the future. </p>"},
                        {age:"b", content:"<p>Your low number of years and lack of<br> experience may be viewed by many as a<br> weakness but it also allows you the opportunity for<br> fresh ideas and ways of thinking that others may have missed. </p>"},
                        {age:"c", content:"<p>Now might be the time to seek a <br>change in your life. Complacency can <br>lead to missed opportunities and lost chances. </p>"},
                        {age:"c", content:"<p>By now you have found a sense of <br>stability in your life but that shouldn’t<br> mean you can’t seek new adventures. Maybe it’s time<br> to learn a new skill that could benefit you in the future.</p> "},
                        {age:"c", content:"<p>You probably enjoy the routine of your<br> life but also find yourself anxious<br> to try new experiences. A holiday may benefit you if<br> just for a change of pace. </p>"},
                        {age:"c", content:"<p>The normalcy of your life allows you<br> to plan ahead but the repetitive <br>nature of it can remove some of the fun it once had.<br> Now might be the time to find a new hobby.</p> "},
                        {age:"d", content:"<p>You may feel outdone by those <br>younger than yourself but remember that<br> experience has its own benefits. </p>"},
                        {age:"d", content:"<p>While you may feel that you are <br>set in your ways it is never too late<br> to learn something new.<br> Why not try to learn a new skill or hobby.</p> "},
                        {age:"d", content:"<p>Your age, while on the surface may<br> feel to be a burden, is one of your<br> greatest assets. Your years of knowledge and <br>experience put you at a distinct advantage in your field. </p>"},
                        {interest:"nature", content:"<p>Your observational nature<br> will come in handy in the near future.<br> Don’t overlook the finer details over the <br>coming days. </p>"},
                        {interest:"nature", content:"<p>Though you may prefer a <br>non-intrusive approach to disagreements<br> you may need to take a more active role. <br>Sometimes you must intervene to make a real difference. </p>"},
                        {interest:"music", content:"<p>This week try finding a <br>rhythm in your work. This should help you<br> to complete tasks more quickly. </p>"},
                        {interest:"sport", content:"<p>You value teamwork within your<br> work but don’t forget, sometimes you<br> will find tasks that are much better undertaken in solitude. </p>"},
                        {interest:"sport", content:"<p>Don’t try to do things alone.<br> Dividing up a task in a group will<br> not only finish it faster but allow others <br>to show their expertise in key areas. </p>"},
                        {interest:"knowledge", content:"<p>Try to do tasks in more<br> detail this week. Not only does<br> this mean more will get done but you may learn <br>something new in the process. </p>"},
                        {interest:"knowledge", content:"<p>Try to find a new way<br> of doing things this week. Not only<br> does this help shake things up but could add <br>new knowledge to your repertoire. </p>"},
                        {interest:"family", content:"<p>Don’t forget to take the advice<br> of those close around you.<br> While they may not be familiar with the specifics<br> of the current issue in your life their experience<br> is likely to help you in the future. </p>"},
                        {interest:"family", content:"<p>Those closest to you are <br>your greatest asset. Never overlook<br> them for help when you need it as they’ll always<br> be willing to offer it.</p> "},
                        {interest:"romance", content:"<p>Listen to the person you <br>are closest to in the coming days.<br> They’re likely to have an insight into your <br>current preoccupations. </p>"},
                        {interest:"romance", content:"<p>The person you care for most is likely to know you <br>better than yourself. Listen to their advice in the coming<br> days and head their warnings. </p>"},
                        {subject:"maths", content:"<p>Your positive experience with numbers can be useful <br>in a variety of areas, today is the time for you to use the <br>knowledge you gained in this area towards financial possibilities. </p>"},
                        {subject:"maths", content:"<p>Your ability with statistics should be useful in many<br> ways you may have overlooked previously. A career in finances<br> could bring substantial rewards your way.</p>"},
                        {subject:"english", content:"<p>Your study of many texts will provide you great benefit<br> in the coming months. Never fail to look for hidden meaning <br>in what others write as you may ward off negative repercussions in doing so.</p> "},
                        {subject:"english", content:"<p>You love for the written word offers a great way to<br> escape from the ordinary. Now seems to be a good time to indulge <br>in reading once again.</p> "},
                        {subject:"science", content:"<p>Though you may prefer <br>looking at how each individual<br> part never lose sight of the whole. The bigger picture can often<br> reveal more information than expected.</p> "},
                        {subject:"science", content:"<p>You history of looking in depth at how things are<br> made up can be a boon today. Try to understand why key events are in<br> motion and other will be grateful for it.</p> "},
                        {subject:"history", content:"<p>An interest in the past gives you a unique insight<br> in a world that looks towards the future, today may be a historical<br> day for many people and could be for you if you offer them your insight.</p> "},
                        {subject:"history", content:"<p>Your love for things historical provides a calling<br> you may want to pay more attention to. Now could be a great time to<br> visit something archaeological.</p> "},
                        {subject:"art", content:"<p>Your passion for creativity should help you in coming<br> up with new ways of completing your work or resolving differences with<br> others. While it may seem unorthodox to begin with these new ideas can lead to great rewards.</p> "},
                        {subject:"art", content:"<p>Your creative nature not only can help solve a variety<br> of problems in ways others might have overlooked but allows you to <br>express yourself in new ways. Now may be the time to let your creativity flow free.</p> "},
                        {subject:"geography", content:"<p>Whether this interest comes from wanting to travel<br> or not, today might be the day to start planning a voyage, time to<br> tick a box on a list of things to do. </p>"},
                        {subject:"geography", content:"<p>Your awareness of the things around you gives you<br> an incentive to explore. Why not take a small break sometime soon <br>and go on an adventure. </p>"},
                        {subject:"pe", content:"<p>Today is your day to be active and work off any stress you<br> currently feel but be careful with over doing it you will <br>need some strength to remain for tomorrow. </p>"},
                        {subject:"pe", content:"<p>Use your love of sports to try and bring people at your <br>workplace together. This can help to form long lasting bonds <br>but be careful to not overdo it as rivalries can be a major source of negativity. </p>"},
                        {subject:"re", content:"<p>Your understanding of other views <br>makes you a valuable person<br> in defusing arguments. This allows you to help others reach<br> harmony and work together for the greater good. </p>"},
                        {subject:"re", content:"<p>Maybe now is the time to explore your old passion for other <br>cultures or philosophies. Why not go on a trip abroad to <br>find out more in person. </p>"},
                        {subject:"technology", content:"<p>Your love of things technical means you should be <br>better suited in helping others adapt to new items that are <br>common. Why not spend a few days helping those who have issues with new technologies. </p>"},
                        {subject:"technology", content:"<p>You seem to be a person who enjoys a more hands-on <br>approach to life. If you work can’t be done this why, try an <br>outlet that makes greater use of your skills. </p>"},
                        {subject:"languages", content:"<p>Your knowledge of other languages is likely to offer<br> you an insight into other cultures. This can be of great <br>boon to yourself and others around you. Don’t be afraid to use those skills. </p>"},
                        {subject:"languages", content:"<p>Why not utilise your previous love of languages<br> and take a trip abroad in the near future. Not only does this <br>give you a chance to lose stress but also see how different cultures use language. </p>"},
                        {subject:"general", content:"<p>Your past love of subjects can offer you an escape<br> from the drudgery of the everyday. They could become the thing <br>to revisit for a new outlet or even a new vocation. </p>"},
                        {subject:"general", content:"<p>Try to find a new way to explore your previous <br>interests in the coming days. It may provide the answer to questions <br>that have stumped you for a while now. </p>"}]);								
var output = " ";
var Interest;

var letterData = TAFFY([{original:"a", output:"s"},
						{original:"b", output:"v"},
						{original:"c", output:"x"},
						{original:"d", output:"f"},
						{original:"e", output:"r"},
						{original:"f", output:"g"},
						{original:"g", output:"h"},
						{original:"h", output:"y"},
						{original:"i", output:"u"},
						{original:"j", output:"k"},
						{original:"k", output:"l"},
						{original:"l", output:";"},
						{original:"m", output:"n"},
						{original:"n", output:"b"},
						{original:"o", output:"p"},
						{original:"p", output:"o"},
						{original:"q", output:"w"},
						{original:"r", output:"t"},
						{original:"s", output:"a"},
						{original:"t", output:"f"},
						{original:"u", output:"j"},
						{original:"v", output:"b"},
						{original:"w", output:"e"},
						{original:"x", output:"c"},
						{original:"y", output:"t"},
						{original:"z", output:"x"},
						{original:"A", output:"S"},
						{original:"B", output:"V"},
						{original:"C", output:"X"},
						{original:"D", output:"F"},
						{original:"E", output:"R"},
						{original:"F", output:"G"},
						{original:"G", output:"H"},
						{original:"H", output:"Y"},
						{original:"I", output:"U"},
						{original:"J", output:"K"},
						{original:"K", output:"L"},
						{original:"L", output:";"},
						{original:"M", output:"N"},
						{original:"N", output:"B"},
						{original:"O", output:"P"},
						{original:"P", output:"O"},
						{original:"Q", output:"W"},
						{original:"R", output:"T"},
						{original:"S", output:"A"},
						{original:"T", output:"F"},
						{original:"U", output:"J"},
						{original:"V", output:"B"},
						{original:"W", output:"E"},
						{original:"X", output:"C"},
						{original:"Y", output:"T"},
						{original:"?", output:"?"},
						{original:" ", output:" "},
						{original:",", output:","},
						{original:".", output:"."},
						{original:"'", output:"'"},
						{original:"-", output:"-"},
						{original:"1", output:"1"},
						{original:"2", output:"2"},
						{original:"3", output:"3"},
						{original:"4", output:"4"},
						{original:"5", output:"5"},
						{original:"6", output:"6"},
						{original:"7", output:"7"},
						{original:"8", output:"8"},
						{original:"9", output:"9"},
						{original:"0", output:"0"},
						]);
								
function stringOut(input)
{
	console.log(input);
	var Stop = 0;
	var Difficulty = 80;
	var TypingBad = Math.floor(Math.random() * Difficulty) + 1;
	var OutPut;
	for(i = 0; i < input.length; i++)
	{
		//console.log(input[i]); Error Checking for grammer missing
		if(input[i] == '<')
			Stop = 1;
		TypingBad = Math.floor(Math.random() * Difficulty) + 1;
		if(TypingBad == Difficulty && Stop == 0)
		{
			out = letterData({original:{is:input[i]}}).get()[0].output;
			OutPut += out;
		}
		else
			OutPut += input[i];

		if(input[i] == '>')
			Stop = 0;
	}
	return OutPut;
}


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
			if(MoodArr[i].toLowerCase().contains(Input[j].toLowerCase())) 
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
		typeSpeed: 60,
		// typing speed
        startDelay: (20000 / Number(question.length)),
        // backspacing speed
        backSpeed: 40,
		backDelay: 1000,
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

//Get Information from user
function CheckuserName(LastPage, NextPage)
{
	if(document.getElementById('fname').value)
	{
		userName();
		toggle_visibility(LastPage);
		toggle_visibility(NextPage);
		typedText('#typed-Q2', '#typedQ2');
	}
}
function userName() 
{
    // Grab Value
    var Fname = document.getElementById('fname').value;
    // Add to horoscope
    if (Fname == '') 
    {
        $('#FirstName').html('<p>Sorry, i didnt catch your name. Ill ask you again.</p>');
    }
    else
    {
		output = Fname + "- ";
		console.log(Fname);
		// Add to HTML
		$('#FirstName').html(stringOut('<p>' + Fname + ', Its a pleasure to meet you.</p><p>My name is Dimitri, <br>I will be operating the MirrorMirror today.</p><p>Could I ask what is your date of birth? </p><p>I cant quite tell how old you are through<br> this mirror.</p>'));
    }
}

function CheckuserAge(LastPage, NextPage)
{
	if(Number(hiddenDate) >= 0 && Number(hiddenDate)>= 0);
	{
		userAge();
		toggle_visibility(LastPage);
		toggle_visibility(NextPage);
		typedText('#typed-Q3', '#typedQ3');
	}
}
function userAge()
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
    
	output += horoscopeData({starsign:{is:userStar.toLowerCase()}}).get()[0].content;
	var ageLetter;
	// Age
    var Age = Number(hiddenYear);
    if (Age <= 17)              {ageLetter = 'a';}
    if (Age >= 18 && Age <= 24) {ageLetter = 'b';}
    if (Age >= 25 && Age <= 39) {ageLetter = 'c';}    
    if (Age >= 40)              {ageLetter = 'd';}
    // Debug
	console.log(Dob);
	output += horoscopeData({age:{is:ageLetter.toLowerCase()}}).get()[0].content;
    console.log(output);
    // Add to HTML
    $('#userSign').html(stringOut('<p>Thanks for that, you are a ' + userStar + ' if i am<br> correct?</p><p>Wow, ji </p><p>Wow, i didnt realise you are ' + Age + ', I really need <br>to clean this glass.</p><p>Anyway, How are you feeling? </p>'));
}

function CheckuserFeelings(LastPage, NextPage)
{
	if(document.getElementById('feelings').value)
	{
		userFeelings();
		toggle_visibility(LastPage);
		toggle_visibility(NextPage);
		typedText('#typed-Q4', '#typedQ4')
	}
}

function userFeelings()
{
    var Feelings = document.getElementById('feelings').value;
    Feelings = Feelings.toLowerCase();
    var Mood;
	var MoodNum;
    //Word bank
    var goodMood = ["happy", "pleasured", "good", "gleeful", "delighted", "jovial", "jolly", "joking", "merry", "cheery", "cheerful", "glowing", "radiant", "carefree", "great", "fortunate", "lucky", "amazing", "horny", "sexy", "fantastic", "silly", "funny"];
    var averageMood = ["ok", "acceptable", "agreable", "adequate", "passable", "satisfactory", "well", "okay", "average", "content", "fine", "decent"];
    var badMood = ["irritated", "bad", "sad", "angry", "hurt", "mad", "hungover", "poor", "broke", "difficult", "crude", "retarded", "annoyed", "ill", "sick", "poorly", "failure", "failing", "rude", "dirty", "filthy", "indecent", "severe", "serious"];
    // Feelings  (containing the word bank)
    if (CheckMood(goodMood, Feelings)){ Mood = "good"; MoodNum = "1"; }
	else if (CheckMood(averageMood, Feelings)){ Mood = "average"; MoodNum = "2"; }
	else if (CheckMood(badMood, Feelings)){ Mood = "bad"; MoodNum = "3"; }
	
	output += horoscopeData({mood:{is:MoodNum}}).get()[0].content;
	console.log(output);
    // Add to HTML
    $('#userFeel').html(stringOut('<p>Thanks for letting me know that you<br> are in a ' + Mood + ' mood</p><p>that qil</p><p>that will help when making your horoscope.</p><p>When you went to school,</p><p>What was your favourite subject? </p>'));
}
function userSubject()
{
	//subject
    var Subject = document.getElementById('subject').value;
    Subject = Subject.toLowerCase();
    console.log(Subject + " before");
	//Subject Bank
	var mathsBank = [ "maths", "calculus"];
	var englishBank = [ "english", "film studies", "literature"];
	var scienceBank = [ "science", "physics", "chemistry", "biology"];
	var historyBank = [ "history" ];
	var artBank = [ "art" ];
	var geographyBank = [ "geography" ];
	var peBank = [ "pe" ];
	var reBank = [ "re", "philosophy" ];
	var itBank = [ "technology", "it", "ict", "computing" ];
	var languagesBank = [ "french", "german", "latin", "spanish"];
    //Subjects 
	if (CheckMood(mathsBank, Subject)){ Subject = "maths";}
	else if (CheckMood(englishBank, Subject)){ Subject = "english";}
	else if (CheckMood(scienceBank, Subject)){ Subject = "science";}
	else if (CheckMood(historyBank, Subject)){ Subject = "history";}
	else if (CheckMood(artBank, Subject)){ Subject = "art";}
	else if (CheckMood(geographyBank, Subject)){ Subject = "geography";}
	else if (CheckMood(peBank, Subject)){ Subject = "pe";}
	else if (CheckMood(reBank, Subject)){ Subject = "re";}
	else if (CheckMood(itBank, Subject)){ Subject = "technology";}
	else if (CheckMood(languagesBank, Subject)){ Subject = "languages";}
    else {Subject = "general";}
	console.log(Subject);
	output += horoscopeData({subject:{is:Subject}}).get()[0].content;
	console.log(output);  
    $('#userSub').html(stringOut('<p>Thats cool that you liked <br>' + Subject + ' at school, I only liked fairytale<br>class myself.</p><p>Ive made some cards, but you need to <br>hover on them to see them.</p><p>Do me a favour and pick your favourite? <br> We are nearly finished.</p>'));
}
// Public so the HTML can see it 
function Complete(){
    //Interests
	output += horoscopeData({interest:{is:Interest.toLowerCase()}}).get()[0].content;
	console.log(output);
    $("#userAns").html(stringOut("<p>" + output + "</p>" + '<p>I hope you found that useful, thankyou and goodbye.</p>'));
	ResetInputs();
}
