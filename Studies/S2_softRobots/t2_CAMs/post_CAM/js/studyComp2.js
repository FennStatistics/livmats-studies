/* number of components / elements to set slider */
const numElements = 13; // 8+5
var numElementsCounter = 5;



const break500 = new lab.html.Screen({
  content: `
  `,
  timeout: 500
})


/* 
################### update soft robot ###################
*/
const explanationSR1_htmlForm = new lab.html.Form({
  title: "explanationSR1",
  content: textObj.explanationSR1,
  messageHandlers: {
    run: function anonymous() {
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        5000 // 10000 (10 seconds)
      );
    },
    commit: () => {
      // progress bar
        numElementsCounter++;
        document.querySelector(".progress-bar").style.width =
          (numElementsCounter / numElements) * 100 + "%";

          // alert(numElementsCounter)
    }
  },
});


const explanationSR2_htmlForm = new lab.html.Form({
  title: "explanationSR2",
  content: textObj.explanationSR2,
  messageHandlers: {
    run: function anonymous() {
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        10000 // 10000 (10 seconds)
      );
    },
    commit: () => {
      // progress bar
        numElementsCounter++;
        document.querySelector(".progress-bar").style.width =
          (numElementsCounter / numElements) * 100 + "%";

          // alert(numElementsCounter)
    },
    epilogue: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("my result data sent to JATOS final time: ", resultJson);
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));

        // then redirect
        jatos.startNextComponent();
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
    //new lab.plugins.Metadata(),
    new lab.plugins.Debug(), // comment out finally
    //new lab.plugins.Download()
  ],
  content: [
    break500,
    CAMfeedbackGeneral_htmlForm,
    explanationSR1_htmlForm,
    explanationSR2_htmlForm
  ],
})

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}