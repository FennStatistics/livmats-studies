/* number of components / elements to set slider */
const numElements = 13; // 8+5
var numElementsCounter = 0; // 8
/* general global variables */
var URLparams_global;

var paracountclicks = 0;

/* 
################### randomly choose type of robot ###################
*/

function shuffleArray(array) {
  let array_emp = []
  for (var i = 0; i < array.length; i++) {
    array_emp.push(i)
  }

  let j, x;
  for (i = array_emp.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array_emp[i];
    array_emp[i] = array_emp[j];
    array_emp[j] = x;
  }
  return array_emp;
}



const typeRobot = ["Rettungsroboter", " soziale Assistenzroboter"]; // ["rescue robots", "Socially assistive robots"];
const indexTypeRobot = shuffleArray(typeRobot);
var choosenRobot = typeRobot[indexTypeRobot[0]];

/*
var firstIndex = [];
for (i = 0; i < 10000; i++) {
  firstIndex.push(shuffleArray(typeRobot)[0]);
}
let sum = firstIndex.reduce((a, b) => a + b, 0);
let mean = sum / firstIndex.length;
console.log(mean);
*/

/* 
################### introduction phase ###################
*/
const Greetings_htmlForm = new lab.html.Form({
  title: "Greetings",
  content: textObj.greetings,
  messageHandlers: {
    run: function anonymous() {
      if (typeof jatos.jQuery === "function") {
        if (
          study.state.meta.screen_height < 700 &&
          study.state.meta.screen_width < 1200
        ) {
          alert(
            "It seems that your screen size you are using is smaller than 1200x700 pixels (height x width):\n" +
            "> your screen width: " +
            study.state.meta.screen_width +
            " your screen height: " +
            study.state.meta.screen_height +
            "\nStudy is aborted!"
          );
          jatos.abortStudy("study aborted - screen to small");
        }
      }
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // get URL params
      if (typeof jatos.jQuery === "function") {
        URLparams_global = jatos.urlQueryParameters;
        console.log("URLparams_global:", URLparams_global);

        // check if a robot is provided via URL parameter
        if (typeof URLparams_global.fixRobot !== "undefined") {
          choosenRobot = URLparams_global.fixRobot;
        }

        // check if a prolific ID is provided via URL parameter PROLIFIC study
        if (typeof URLparams_global.PROLIFIC_PID === "undefined") {
          alert(
            "Sorry, there may be a technical error! It was not possible to obtain all the necessary data from prolific. Please write to the study director that an error has occurred."
          );
          jatos.abortStudy("study aborted - no prolific ID");
        } else {
          // save prolific ID
          study.options.datastore.set(
            "PROLIFIC_PID",
            URLparams_global.PROLIFIC_PID
          );
          // save random choosen robot
          study.options.datastore.set(
            "choosen_Robot",
            choosenRobot
          );
        }
      }
    },
  },
});


const InformCon_htmlForm = new lab.html.Form({
  title: "InformedConsent",
  content: textObj.informCon,
  messageHandlers: {
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        console.log("result data sent to JATOS first time");
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});

const InformConsentNO_htmlForm = new lab.html.Form({
  title: "InformedConsentNO",
  content: textObj.informConNo,
  tardy: true,
  skip: "${ study.state.dummy_informedconsent == 1}",
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      document.querySelector(".progress-bar").style.width = 100 + "%";
    },
  },
});


const ExclusionCriteria_htmlForm = new lab.html.Form({
  title: "ExclusionCriteria",
  content: textObj.exclusionCriteria,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});



// Attention Check (not used)
function continueornot() {
  if ($("fieldset :checkbox:checked").length > 0) {
    // ok
    return true;
  } else {
    alert("Please check at least one of these activities.");
    return false;
  }
}

const AttentionCheck_htmlForm = new lab.html.Form({
  title: "AttentionCheck",
  content: textObj.attentionCheck,
  messageHandlers: {
    commit: () => {
      var attCheck_array = [];
      $("fieldset :checkbox").each(function () {
        if (this.checked) {
          attCheck_array.push(this.id);
        }
      });
      attCheck_array;

      study.options.datastore.set("attCheck_array", attCheck_array);
      study.options.datastore.set(
        "attCheck_text",
        $("#attCheck_OtherText").val()
      );

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const SetupStudy_htmlForm = new lab.html.Form({
  title: "SetupStudy",
  content: textObj.setupStudy,
  messageHandlers: {
    run: () => {
      $("#placeholderRobot").text(choosenRobot);
      $("#placeholderRobot2").text(choosenRobot);
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

        if (typeof jatos.jQuery === "function") {
          // If JATOS is available, send data there
          var resultJson = study.options.datastore.exportJson();
          console.log("result data sent to JATOS second time");
          jatos
            .submitResultData(resultJson)
            .then(() => console.log("success"))
            .catch(() => console.log("error"));
        }
    },
  },
});




// 

/* 
explenations soft robot
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
    }
  },
});



const explanationSR3_htmlForm = new lab.html.Form({
  title: "explanationSR3",
  content: textObj.explanationSR3,
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

        // save PROLIFIC_PID and choosen robot for next session
        var studySessionData = {
          "choosen_Robot": study.options.datastore.get("choosen_Robot"),
          "PROLIFIC_PID": study.options.datastore.get("PROLIFIC_PID")
      };
      jatos.setStudySessionData(studySessionData);
      console.log(studySessionData);
        // then redirect
        jatos.startNextComponent();
      }
    },
  },
});





// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "Covid-19 perception pre study",
    description: "applying CAMEL Software",
    repository: "",
    contributors: "Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    //new lab.plugins.Fullscreen(),
    new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [ 
    // >>> PRE
    Greetings_htmlForm,

    InformCon_htmlForm,
    InformConsentNO_htmlForm,
    ExclusionCriteria_htmlForm,
    //AttentionCheck_htmlForm,
    SetupStudy_htmlForm,

    CAMinst_multipage_htmlScreen,
    /**/
    explanationSR1_htmlForm,
    explanationSR2_htmlForm,
    explanationSR3_htmlForm     // -> next session
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
