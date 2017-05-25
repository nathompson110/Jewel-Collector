var jewel1 = ranNum(1,12);
var jewel2 = ranNum(1,12);
var jewel3 = ranNum(1,12);
var jewel4 = ranNum(1,12);
var totalScore = 0;
var wins = 0;
var losses = 0;
var randomJewelValue = ranNum(19, 120);



function ranNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function checkResult () {
	if(totalScore===randomJewelValue){
		wins++;
		$("#wins").html(wins);
		jewel1 = ranNum(1,12);
		jewel2 = ranNum(1,12);
		jewel3 = ranNum(1,12);
		jewel4 = ranNum(1,12);
		totalScore = 0;
		randomJewelValue = ranNum(19, 120);
		$("#randomNum").html(randomJewelValue);
		
	}
	else if (totalScore>randomJewelValue){
		losses++;
		$("#losses").html(losses);
		jewel1 = ranNum(1,12);
		jewel2 = ranNum(1,12);
		jewel3 = ranNum(1,12);
		jewel4 = ranNum(1,12);
		totalScore = 0;
		randomJewelValue = ranNum(19, 120);
		$("#randomNum").html(randomJewelValue);
		
	}
}


console.log(randomJewelValue);

$(document).ready(function(){
	$("#randomNum").html(randomJewelValue);

   
   $("#jewel1").click( function(){
   	totalScore += jewel1;
   	checkResult();
   	$("#total-score").html(totalScore);
   
   })
   $("#jewel2").click( function(){
   	totalScore += jewel2;
   	checkResult();
   	$("#total-score").html(totalScore);
   	
   })
   $("#jewel3").click( function(){
   	totalScore += jewel3;
   	checkResult();
   	$("#total-score").html(totalScore);
  
   })
   $("#jewel4").click( function(){
   	totalScore += jewel4;
   	checkResult();
   	$("#total-score").html(totalScore);

   })
});
// $("#jewel1")
// document.getElementById("#jewel1").innerhtml=randomJewelValue;