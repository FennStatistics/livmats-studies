/* number of components / elements to set slider */
const numElements = 13; // 8+5
var numElementsCounter = 5;


const htmlForm = new lab.html.Form({
  content:
    `
    <main class="content-horizontal-center content-vertical-center">
    <div class="w-l text-justify">
    Your drawn CAM had the overall valence of
    <span id="placeholder" style="font-weight: bold;">XXX</span>, please explain why your overall drawn CAM was 
    <span id="placeholder2" style="font-weight: bold;">XXX</span>
  <form>
<textarea rows="10" name="ans1" style="width: 100%;" placeholder="Write here your answer..." required></textarea>
  <br>
  <button type="submit">Save</button>
  </div>
  </main>
  </form>
  `,
  messageHandlers: {
    run: function anonymous(){
      $("#placeholder").text(jatos.studySessionData.meanvalence);
      if(jatos.studySessionData.meanvalence < 0){
        $("#placeholder2").text("negative");
      }else if(jatos.studySessionData.meanvalence > 0){
        $("#placeholder2").text("positive");
      }
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width = (numElementsCounter / numElements) * 100 + "%";
      }

  },
})
// ${jatos.studySessionData.answer}
const htmlForm2 = new lab.html.Form({
  content:     `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
  Your have drawn <span id="placeholder" style="font-weight: bold;">XXX</span> negative and <span id="placeholder2" style="font-weight: bold;">XXX</span> positive concepts. 
  Please explain why:
<form>
<textarea rows="10" name="ans2" style="width: 100%;" placeholder="Write your answer here..." required></textarea>
<br>
<button type="submit">Save</button>
</div>
</main>
</form>
`,
  messageHandlers: {
    run: function anonymous(){
      $("#placeholder").text(jatos.studySessionData.negativenodes.length);
      $("#placeholder2").text(jatos.studySessionData.positivenodes.length);     
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width = (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson2 = study.options.datastore.exportJson();
        if (typeof jatos.jQuery === "function") {
          console.log("my result data sent to JATOS first time: ", resultJson2);
          jatos.submitResultData(resultJson2)
          .then(() => console.log('success'))
          .catch(() => console.log('error'));
        }
      }
    }
  },
})


const htmlForm3 = new lab.html.Form({
  content:     `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
  Your have drawn the following positive concepts: 
  <div id="myListPos"></div>
  Your have drawn the following negative concepts: 
  <div id="myListNeg"></div>
<br>
Please explain why:
<form>
<textarea rows="10" name="ans3" style="width: 100%;" placeholder="Write here your answer..." required></textarea>
<br>
<button type="submit">Save</button>
</div>
</main>
</form>
`,
  messageHandlers: {
    run: function anonymous(){
      function arrToUl(root, arr) {
        var ul = document.createElement('ul');
        var li;
        
        root.appendChild(ul); // append the created ul to the root
      
        arr.forEach(function(item) {
          if (Array.isArray(item)) { // if it's an array
            arrToUl(li, item); // call arrToUl with the li as the root
            return;
          }
          
          li = document.createElement('li'); // create a new list item
          li.appendChild(document.createTextNode(item)); // append the text to the li
          ul.appendChild(li); // append the list item to the ul
        });
      }
      var divPos = document.getElementById('myListPos');
      var divNeg = document.getElementById('myListNeg');

      if(jatos.studySessionData.positivenodes.length > 0){
        var nodes = jatos.studySessionData.positivenodes;
        var ArrayText = [];
        nodes.forEach(node => {
          ArrayText.push(node.text);
        });

        arrToUl(divPos, ArrayText);
      }


      if(jatos.studySessionData.negativenodes.length > 0){
        var nodes = jatos.studySessionData.negativenodes;
        var ArrayText = [];
        nodes.forEach(node => {
          ArrayText.push(node.text);
        });

        arrToUl(divNeg, ArrayText);
      }
  
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width = (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson2 = study.options.datastore.exportJson();
        if (typeof jatos.jQuery === "function") {
          console.log("my result data sent to JATOS first time: ", resultJson2);
          jatos.submitResultData(resultJson2)
          .then(() => console.log('success'))
          .catch(() => console.log('error'));
        }
      }
    }
  },
})




const break500 = new lab.html.Screen({
  content: `
  `,
  timeout: 500
})



/* 
################### ending phase ###################
*/
// feedback screen
const FeedbackScreen_htmlScreen = new lab.html.Form({
  title: "FeedbackScreen",
  content: textObj.feedbackQues,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

// ending screen
/*
 ` +
    "${TechnologyScenario}" +
    `
*/
const EndingScreen_htmlScreen = new lab.html.Screen({
  title: "EndingScreen",
  tardy: true,
  content: `
  <header>
  <h2> Thank you very much for your participation! </h2>
  </header>

  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
  <br>
  <div>
  <i>The experiment will end in few seconds and you will be automatically redirected back to Prolific.</i> 
  <br>
  <br>
  <br>
  If you have any questions, please contact the study director Julius Fenn (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>).
  </div>
  </main>
  `,
  timeout: 6000,
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width = 100 + "%";

      // alert(numElementsCounter);
    },
    epilogue: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("my result data sent to JATOS final time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));

        // then redirect
        if (
          study.options.datastore.extract("sender").includes("FeedbackScreen")
        ) {
          jatos.endStudyAndRedirect(
            "https://app.prolific.co/submissions/complete?cc=C8FL71OE", // !!!
            true,
            "everything worked fine"
          );
        } else {
          alert(
            "It seems that you did not go through the entire study because you did not see the previous feedback screen."
          );
          jatos.abortStudy("study aborted - copied submission link");
        }
      }
    },
  },
});




// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "Covid-19 perception post study",
    description: "applying CAMEL Software",
    repository: "",
    contributors: "Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Debug(), // comment out finally
    //new lab.plugins.Download()
  ],
  content: [
    break500,
    CAMfeedbackGeneral_htmlForm,
    htmlForm,
    
    FeedbackScreen_htmlScreen,
    EndingScreen_htmlScreen
  ],
})



// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}