

function todaysDateNumber () {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd < 10) {
    	dd = '0' + dd
	} 

	if(mm < 10) {
    	mm = '0' + mm
	} 
	today = mm + '/' + dd + '/' + yyyy;
	return today;
}

function todaysDateEnglish () {
	var today = new Date();
	var dd = today.getDate();
	var yyyy = today.getFullYear();
	if(dd < 10) {
    	dd = '0' + dd
	}
	var fullDate = new Date();
	var daysNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var day = daysNames[fullDate.getDay()];
	var monthsNames = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];
	var todaysDateConversational = "Today is " + day + "," + " " + monthsNames[fullDate.getMonth()] + " " + dd + "," + " " +  yyyy + ".";
	return todaysDateConversational;
}

function momsBdayEnglish () {
	var today = new Date();
	var monthsNames = ["January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December"];
	var momsBirthdayEnglish = "January fifteenth"
	return momsBirthdayEnglish;
}

console.log(todaysDateEnglish());