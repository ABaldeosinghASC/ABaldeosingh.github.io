function mash() {
	var job = ["You worked for Donald Trump, but you killed yourself after an hour on the job", 
				"You work as a butler for Batman", 
				"Your an exotic dancer", 
				"Your a prefessional hobo, you actually make a 40$ per hour"];		
	var wife = ["Your wife is Serena Williams", "Your wife is Nicki Minaj",
				"Your wife is Angelina Jolie,  you have 15 children", 
				"You don't have a wife, but your single and ready to mingle"];
	var car = ["You have a Lamborghini Veneno", 
				"You don't have a car you got a shopping cart ;-)", 
				"You drive a Suzuki Hayabusa",
				"You don't drive you ride a bike. Earth Friendly much?"];
	var homes = ["Mansion","Apartment","Shack","House"];
	
	var x = prompt("What job do you want to have");
	job.push(x)    
	var y = prompt("Who do you want to be your wife");
	wife.push(y) 
	var z = prompt("What car do you want");
	car.push(z)
	var roll = Math.floor((Math.random()  * wife.length) + 1); 
	
	alert("Welcome to Anthony's game of chance") 
	alert("Your wife will be " + wife[roll]);
	alert("Your job will be " + job[roll]);
	alert("Your car will be " + car[roll]);
	alert("Your form of residency will be " + (homes[roll]));
	alert("Thanks for playing")
}




function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 1200) {
      clearInterval(id);
    } else {
      pos++;
      
      elem.style.left = pos + 'px';
    }
  }
}

