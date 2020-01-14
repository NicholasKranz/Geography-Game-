console.log("connected")

var stateAndCap = [{state: "", cap: ""}, {state: "Washington D.C.", cap: "Washington D.C."}, {state: "Vermont", cap: "Montpelier"}, {state: "New Hampshire", cap: "Concord"}, {state: "Massachusetts", cap: "Boston"},
{state: "Connecticut", cap: "Hartford"}, {state: "New York", cap: "Albany"}, {state: "Maine", cap: "Augusta"}, {state: "Rhode Island", cap: "Providence"},
{state: "Pennsylvania", cap: "Harrisburg"}, {state: "New Jersey", cap: "Trenton"}, {state: "Maryland", cap: "Annapolis"}, {state: "Delaware", cap: "Dover"}, 
{state: "Virginia", cap: "Richmond"}, {state: "West Virginia", cap: "Charleston"}, {state: "South Carolina", cap: "Columbia"}, {state: "North Carolina", cap: "Raleigh"},
{state: "Georgia", cap: "Atlanta"}, {state: "Kentucky", cap: "Frankfort"}, {state: "Tennessee", cap: "Nashville"}, {state: "Ohio", cap: "Columbus"},
{state: "Indiana", cap: "Indianapolis"}, {state: "Michigan", cap: "Lansing"}, {state: "Illinois", cap: "Springfield"}, {state: "Florida", cap: "Talahassee"},
{state: "Alabama", cap: "Montgomery"}, {state: "Mississippi", cap: "Jackson"}, {state: "Louisiana", cap: "Baton Rouge"}, {state: "Texas", cap: "Austin"},
{state: "Missouri", cap: "Jefferson City"}, {state: "Kansas", cap: "Topeka"}, {state: "Iowa", cap: "Des Moines"}, {state: "Wisconsin" , cap: "Madison"},
{state: "Minnesota", cap: "St Paul"}, {state: "Nebraska", cap: "Lincoln"}, {state: "Oklahoma", cap: "Oklahoma City"}, {state: "North Dakota", cap: "Bismarck"},
{state: "South Dakota", cap: "Pierre"}, {state: "Montana", cap: "Helena"}, {state: "Idaho", cap: "Boise"}, {state: "Wyoming", cap: "Cheyenne"}, 
{state: "Colorado", cap: "Denver"}, {state: "Arizona", cap: "Phoenix"}, {state: "New Mexico", cap: "Santa Fe"}, {state: "Nevada", cap: "Carson City"}, 
{state: "Washington", cap: "Olympia"}, {state: "Oregon", cap: "Salem"}, {state: "California", cap: "Sacramento"},{state: "Hawaii", cap: "Honolulu"},
{state: "Alaska", cap: "Juneau"}, {state: "Utah", cap: "Salt Lake City"}] 

//variables 
optionsList   = document.getElementById("optionsList");
next          = document.getElementById("next");
capitalAnswer = document.querySelector("#capitalAnswer");

window.onload = ShuffleNPicked()

next.addEventListener("click", ShuffleNPicked);

/////////STARTUP FUNCTION////////	
	function ShuffleNPicked(){

	//randomly chooses winning capital/state by picking random index
	randomObj = Math.floor((Math.random() * 50 + 1));
		randomState = stateAndCap[randomObj].state;
			randomCap = stateAndCap[randomObj].cap;
  			document.getElementById("state").innerHTML = randomState; 
 			document.getElementById("capitalAnswer").innerHTML = randomCap;

 			//randomly generates a 5 number array (UNREPEATED) to be generated and chose from for an index. 
			function RandomFillers(){
			    var max = 5;
			    var randomInts = [];
			    for(var i = 0;i<max ; i++){
			        var integer = Math.floor(Math.random() * 50 + 1);
			        if(randomInts.indexOf(integer) === -1){
			            randomInts.push(integer);
			        } else {
			         i--;
			        }
			    }
			    	//assigning variables to those five numbers, preparing for deployment. 
			    	false1	= randomInts[0]
			    	false2	= randomInts[1]
					false3	= randomInts[2]		    					
					false4	= randomInts[3]
					false5	= randomInts[4]

					//this checks to see if any of those five numbers are the same as our winning state. 
					//if so, then the inner function RandomFillers is restarted. If not, then the other li's are filled randomly. 
					if (false1 == randomObj || 
						false2 == randomObj || 
						false3 == randomObj || 
						false4 == randomObj || 
						false5 == randomObj){
							RandomFillers();
					} else {
						document.getElementById("falseAnsr1").innerHTML = stateAndCap[false2].cap
						document.getElementById("falseAnsr2").innerHTML = stateAndCap[false5].cap
						document.getElementById("falseAnsr3").innerHTML = stateAndCap[false1].cap
						document.getElementById("falseAnsr4").innerHTML = stateAndCap[false4].cap
						document.getElementById("falseAnsr5").innerHTML = stateAndCap[false3].cap
					}
			}
			//function call
			RandomFillers();
    	}
    	//shuffles <li>'s everytime
	for (var i = optionsList.children.length; i >= 0; i--) {
	optionsList.appendChild(optionsList.children[Math.random() * i | 0]);
};




