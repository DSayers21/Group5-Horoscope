var horoscopeData = [{starsign:"capricorn", content:"There's good news for capricorns this week"},
                        {starsign:"pisces", content:"Pisces should be on the lookout this week"},
                        {starsign:"taurus", content:"Those from Taurus have fortune in their favour soon."},
                        {starsign:"cancer", content:"Those under Cancer could find good tidings heading their way."},
                        {starsign:"virgo", content:"Don’t worry Virgo as your luck is on the up."},
                        {starsign:"scorpio", content:"Scorpios should hold their heads high today."},
                        {starsign:"aquarius", content:"Followers of Aquarius should find greater happiness soon."},
                        {starsign:"aries", content:"Aries will find good news in the days ahead."},
                        {starsign:"gemini", content:"Those marked by Gemini could be greatened in the coming days."},
                        {starsign:"leo", content:"Those of Leo may find joy in the next few days."},
                        {starsign:"libra", content:"Libra will be bringing you news in the coming weeks."},
                        {starsign:"sagittarius", content:"Sagittarius will be the bearer of fortune in the days ahead."},
                        {mood:"1", content:"Your good mood is something you shouldn’t keep to yourself, why not try improving someone else’s day as well."},
                        {mood:"1", content:"The happiness that currently flows through you reveals that your doubts are misplaced. Focus on that if they try to appear again."},
                        {mood:"2", content:"While your current mood might not seem the best it might turn out to simply be a symptom of contentment you currently feel. Don’t look too much into possible negative feelings you have."},
                        {mood:"2", content:"Though you may not currently feel at your best this isn’t a bad thing. We all experience ups and downs and that means your future looks bright."},
                        {mood:"3", content:"Your mood may be dark at the current moment but don’t fear as every day offers new opportunities to improve it. Don’t allow your mood to stop you from experiencing those opportunities."},
                        {mood:"3", content:"Though things right now may seem bleak don’t fret. Everyone experiences bad days and understand how it can be. Why not spend times with your friends and loved ones to see if your mood improves."},
                        {age:"a", content:"You may often find yourself cursing your youthful nature but you shouldn’t take it for granted. These are your most responsibility-free years of your life and you’re unlikely to ever be so carefree again."},
                        {age:"a", content:"Your current age gives you the most opportunity to try out new things. Don’t miss this chance to find out what you want to do with your life."},
                        {age:"b", content:"Despite your young age you will be required to make some serious choices in the coming months. Now is the time to show people who you want to be."},
                        {age:"b", content:"Though you have seen few years you shouldn’t be dissuaded from aiming high. A risk every now and then can make a positive difference in your life."},
                        {age:"b", content:"You may sometimes feel you are looked down on due to your youth but fear not. Now is the best time to learn new and skills and make connections that can help you well into the future."},
                        {age:"b", content:"Your low number of years and lack of experience may be viewed by many as a weakness but it also allows you the opportunity for fresh ideas and ways of thinking that others may have missed."},
                        {age:"c", content:"Now might be the time to seek a change in your life. Complacency can lead to missed opportunities and lost chances."},
                        {age:"c", content:"By now you have found a sense of stability in your life but that shouldn’t mean you can’t seek new adventures. Maybe it’s time to learn a new skill that could benefit you in the future."},
                        {age:"c", content:"You probably enjoy the routine of your life but also find yourself anxious to try new experiences. A holiday may benefit you if just for a change of pace."},
                        {age:"c", content:"The normalcy of your life allows you to plan ahead but the repetitive nature of it can remove some of the fun it once had. Now might be the time to find a new hobby."},
                        {age:"d", content:"You may feel outdone by those younger than yourself but remember that experience has its own benefits."},
                        {age:"d", content:"While you may feel that you are set in your ways it is never too late to learn something new. Why not try to learn a new skill or hobby."},
                        {age:"d", content:"Your age, while on the surface may feel to be a burden, is one of your greatest assets. Your years of knowledge and experience put you at a distinct advantage in your field."},
                        {interest:"nature", content:"Your observational nature will come in handy in the near future. Don’t overlook the finer details over the coming days."},
                        {interest:"nature", content:"Though you may prefer a non-intrusive approach to disagreements you may need to take a more active role. Sometimes you must intervene to make a real difference."},
                        {interest:"music", content:"This week try finding a rhythm in your work. This should help you to complete tasks more quickly."},
                        {interest:"sport", content:"You value teamwork within your work but don’t forget, sometimes you will find tasks that are much better undertaken in solitude."},
                        {interest:"sport", content:"Don’t try to do things alone. Dividing up a task in a group will not only finish it faster but allow others to show their expertise in key areas."},
                        {interest:"knowledge", content:"Try to do tasks in more detail this week. Not only does this mean more will get done but you may learn something new in the process."},
                        {interest:"knowledge", content:"Try to find a new way of doing things this week. Not only does this help shake things up but could add new knowledge to your repertoire."},
                        {interest:"family", content:"Don’t forget to take the advice of those close around you. While they may not be familiar with the specifics of the current issue in your life their experience is likely to help you in the future."},
                        {interest:"family", content:"Those closest to you are your greatest asset. Never overlook them for help when you need it as they’ll always be willing to offer it."},
                        {interest:"romance", content:"Listen to the person you are closest to in the coming days. They’re likely to have an insight into your current preoccupations."},
                        {interest:"romance", content:"The person you care for most is likely to know you better than yourself. Listen to their advice in the coming days and head their warnings."},
                        {subject:"maths", content:"Your positive experience with numbers can be useful in a variety of areas, today is the time for you to use the knowledge you gained in this area towards financial possibilities."},
                        {subject:"maths", content:"Your ability with statistics should be useful in many ways you may have overlooked previously. A career in finances could bring substantial rewards your way."},
                        {subject:"english", content:"Your study of many texts will provide you great benefit in the coming months. Never fail to look for hidden meaning in what others write as you may ward off negative repercussions in doing so."},
                        {subject:"english", content:"You love for the written word offers a great way to escape from the ordinary. Now seems to be a good time to indulge in reading once again."},
                        {subject:"science", content:"Though you may prefer looking at how each individual part never lose sight of the whole. The bigger picture can often reveal more information than expected."},
                        {subject:"science", content:"You history of looking in depth at how things are made up can be a boon today. Try to understand why key events are in motion and other will be grateful for it."},
                        {subject:"history", content:"An interest in the past gives you a unique insight in a world that looks towards the future, today may be a historical day for many people and could be for you if you offer them your insight."},
                        {subject:"history", content:"Your love for things historical provides a calling you may want to pay more attention to. Now could be a great time to visit something archaeological."},
                        {subject:"art", content:"Your passion for creativity should help you in coming up with new ways of completing your work or resolving differences with others. While it may seem unorthodox to begin with these new ideas can lead to great rewards."},
                        {subject:"art", content:"Your creative nature not only can help solve a variety of problems in ways others might have overlooked but allows you to express yourself in new ways. Now may be the time to let your creativity flow free."},
                        {subject:"geography", content:"Whether this interest comes from wanting to travel or not, today might be the day to start planning a voyage, time to tick a box on a list of things to do."},
                        {subject:"geography", content:"Your awareness of the things around you gives you an incentive to explore. Why not take a small break sometime soon and go on an adventure."},
                        {subject:"PE", content:"Today is your day to be active and work off any stress you currently feel but be careful with over doing it you will need some strength to remain for tomorrow."},
                        {subject:"PE", content:"Use your love of sports to try and bring people at your workplace together. This can help to form long lasting bonds but be careful to not overdo it as rivalries can be a major source of negativity."},
                        {subject:"RE", content:"Your understanding of other views makes you a valuable person in defusing arguments. This allows you to help others reach harmony and work together for the greater good."},
                        {subject:"RE", content:"Maybe now is the time to explore your old passion for other cultures or philosophies. Why not go on a trip abroad to find out more in person."},
                        {subject:"technology", content:"You seem to be a person who enjoys a more hands-on approach to life. If you work can’t be done this why, try an outlet that makes greater use of your skills."},
                        {subject:"technology", content:"Your love of things technical means you should be better suited in helping others adapt to new items that are common. Why not spend a few days helping those who have issues with new technologies."},
                        {subject:"languages", content:"Your knowledge of other languages is likely to offer you an insight into other cultures. This can be of great boon to yourself and others around you. Don’t be afraid to use those skills."},
                        {subject:"languages", content:"Why not utilise your previous love of languages and take a trip abroad in the near future. Not only does this give you a chance to lose stress but also see how different cultures use language."},
                        {subject:"general", content:"Your past love of subjects can offer you an escape from the drudgery of the everyday. They could become the thing to revisit for a new outlet or even a new vocation."},
                        {subject:"general", content:"Try to find a new way to explore your previous interests in the coming days. It may provide the answer to questions that have stumped you for a while now."}];

console.log(horoscopeData);
var horoscope = TAFFY(horoscopeData);

var person = {fname:"John", lname:"Doe", age:25}; 

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
var output = "";
function ConsoleTest(Fname, Dob, Feelings, Subject, Colour, Interest){
    
	console.log(Fname);
    output += Fname;
	console.log(Dob);
    console.log(Feelings);
    console.log(Subject);
    if (Dob == "01/01") {
        output += horoscopeData[0].content;
    }
    if (Dob == "01/02") {
        output += horoscopeData[1].content;
    }
    if (Dob == "01/03") {
        output += horoscopeData[2].content;
    }
    if (Dob == "01/04") {
        output += horoscopeData[3].content;
    }
    if (Dob == "01/05") {
        output += horoscopeData[4].content;
    }
    if (Dob == "01/06") {
        output += horoscopeData[5].content;
    }
    if (Dob == "01/07") {
        output += horoscopeData[6].content;
    }
    if (Dob == "01/08") {
        output += horoscopeData[7].content;
    }
    if (Dob == "01/09") {
        output += horoscopeData[8].content;
    }
    if (Dob == "01/10") {
        output += horoscopeData[9].content;
    }
    if (Dob == "01/11") {
        output += horoscopeData[10].content;
    }
    if (Dob == "01/12") {
        output += horoscopeData[11].content;
    }
    if (Feelings == "Good")
    {
        output += horoscopeData[12].content;
    }
    if (Feelings == "Average")
    {
        output += horoscopeData[14].content;
    }
    if (Feelings == "Bad")
    {
        output += horoscopeData[16].content;
    }
    if (Subject == "history") {
        output += horoscopeData[49].content;
    }
    document.getElementById("Answer").innerHTML = output;
}

$('.noEnterSubmit').bind('keypress', false);

$('.noEnterSubmit').keypress(function(e){
    if ( e.which == 13 ) return false;
    //or...
    if ( e.which == 13 ) e.preventDefault();
});

console.log(horoscopeData[62].content);