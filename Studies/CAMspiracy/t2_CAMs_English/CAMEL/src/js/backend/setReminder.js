
const contentFirstReminder =  `
You have only <b>3 minutes</b> left to draw your <i>Mind-Map</i>. Please slowly come to an end, and keep in mind the following:
<ul style="font-size: 14px;">
  <li>Use no more than three words per concept and do not leave any drawn concept empty.</li>
  <li>Connect all drawn concepts with each other.</li>
</ul>
<br>
Please click on the background to continue.
`;



const contentFinalReminder =  `
Please complete the drawing of the <i>Mind-Map</i> now and respect the following rules:
<ul style="font-size: 14px;">
  <li>Do not leave any drawn concept empty.</li>
  <li>Connect all drawn concepts with each other.</li>
</ul>
<br>
Please click on the background to continue, and click on the disk icon in the upper right corner to save your CAM. Thank you!
`;



var startTimeMS = 0;  // EPOCH Time of event count started
var timerStepFirst = 720000;   // Time first reminder > 720000 / 1000 / 60 = 12 minutes
var timerStepFinal = 900000;   // Time final reminder > 900000 / 1000 / 60 = 15 minutes


function firstReminder() {
   $("#dialogReminder").dialog("open");
   $("#textDialogReminder")[0].innerHTML = contentFirstReminder;
 }
   
 function finalReminder() {
   $("#dialogReminder").dialog("open");
   $("#textDialogReminder")[0].innerHTML = contentFinalReminder;
 }
   


// This function starts the two reminder
function startTimer(){
   startTimeMS = (new Date()).getTime();
   setTimeout(firstReminder,timerStepFirst);
   setTimeout(finalReminder,timerStepFinal);
}


// Gets the number of ms remaining to execute the eventRaised Function
function getRemainingTime(){
    var remainingTimeFirst =  timerStepFirst - ( (new Date()).getTime() - startTimeMS );
    var remainingTimeFinal =  timerStepFinal - ( (new Date()).getTime() - startTimeMS );

    console.log("remaining time first reminder:", remainingTimeFirst);
    console.log("remaining time final reminder:", remainingTimeFinal);
}


if(config.setReminder){
  startTimer();
}



