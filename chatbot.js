<!DOCTYPE HTML>
<html>
<body>
<style>
body {
    background-color: orange;
    text-align: center;
    color: white;
    font-family: Arial;
    font-size: 30px;
}
</style>
<div id="output"></div>

<!--This is a comment in HTML-->
<!--This is a Chatbot program. It asks the user questions and responds accordingly. This emphasizes the use of variables, functions, and conditionals. By allowing students to create their own questions and responses, it allows them to apply their creativity and have fun with it!-->

<div id="container">
	<!-- 1) allow only "Submit" button to submit:  -->
    <!--<input type="text" id="input" value="">-->    
    <!-- 2) allow enter key and "Submit" button to submit:  -->
    <input type="text" value="" onKeyDown="if(event.keyCode==13) 				submitPressed();" id="input" fontSize=30px>
</div>

<!--create "Submit" button:  -->
<button id="submit" onclick="submitPressed()">Submit</button>

<script>
//This is a comment in Javascript

var questionNum = 0;													
// keep count of questions, used for IF condition.
var question = '<h1>What is your name?</h1>';				  
// first question
    
var output = document.getElementById('output');				
// store id="output" in output variable
output.innerHTML = question;											 
// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    // store id="input" in input variable

    if (questionNum == 0) { 	//You're on the first question
    	//capitalize the first letter of their name:
    	input = input.charAt(0).toUpperCase() + input.slice(1);
    	output.innerHTML ='<h1>Hello ' + input + '!</h1>';
        // display response
    	document.getElementById("input").value = "";   	
        // clear text box
    	question = '<h1>How old are you?</h1>';			   
        // load next question		
    	setTimeout(timedQuestion, 2000); 
        // output next question after 2sec delay
    }
	
    else if (questionNum == 1) {	//You're on the second question
    	output.innerHTML = '<h1>That means you were born in ' + ((new 				Date()).getFullYear() - input) + '.</h1>';
    	document.getElementById("input").value = "";   
    	question = '<h1>Whats your favorite color?</h1>';	
    	setTimeout(timedQuestion, 2000);
    }  
    
    else if (questionNum==2){	//You're on the third question
    	if(input == 'yellow' || input == 'orange' || input == 'red' || 				input == 'pink'){
    		output.innerHTML = '<h1>Thats a warm color.</h1>';
    		document.getElementById("input").value = "";   	
    		question = '<h1>What day of the month is your birthday?</h1>';
        	setTimeout(timedQuestion, 2000);
        }
     	else if(input == 'blue' || input == 'green' || input == 'purple'){
    		output.innerHTML = '<h1>Thats a cool color.</h1>';
    		document.getElementById("input").value = "";   	
    		question = '<h1>What day of the month is your birthday?</h1>';			  
        	setTimeout(timedQuestion, 2000);
        }
        else{
        	output.innerHTML = '<h1>Thats a neutral color.</h1>';
    		document.getElementById("input").value = "";   	
    		question = '<h1>What day of the month is your birthday?</h1>';
        	setTimeout(timedQuestion, 2000);
        }
    }
    
    else if (questionNum==3){	//You're on the fourth question
    	if(input%2 == 0)	//% is the symbol for "mod". This checks whether the remainder of input/2 = 0, in which case it is an even number.
    		output.innerHTML = '<h1>Thats an even number.</h1>';
        else
        	output.innerHTML = '<h1>Thats an odd number.</h1>';
    	document.getElementById("input").value = ""; 
        question = '<h1>Thanks for sharing! Goodbye.</h1>';			
        setTimeout(timedQuestion, 2000);
    } 
}

function timedQuestion() {	
    output.innerHTML = question;	//display question
}

function submitPressed() { 
    bot();		// run bot function when submit button or "Enter" pressed
    questionNum++;	// increase questionNum count by 1
  }

</script>

</body>
</html>

