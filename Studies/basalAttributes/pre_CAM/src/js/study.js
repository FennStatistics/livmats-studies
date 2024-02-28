/* number of components / elements to set slider */
const numElements = 15; // 7 Part I + 8 Part II
var numElementsCounter = 0; // 8
/* general global variables */
var URLparams_global;

var paracountclicks = 0;


/* 
list basal attributes
*/
var wordlist = [
  "aktive Formänderung durch Umwelteinwirkung",         // adaptive
  "aktive Verhaltensänderung durch Umwelteinwirkung",   // adaptive
  "autonom",                    // autonomous
  //"bio-inspiriert",             // bio-inspired
  "bioinspiriert",      // biologically inspired
  //"veränderbar",                // changeable
  //"veränderbare Form",          // changeable shape
  "haltbar",                    // durable
  "ökologisch",                 // ecologically
  "elektronikfrei",             // electronic-free
  "energieautonom",             // energy autonomous
  "energieeffizient",           // energy-efficient
  "umweltfreundlich",           // environmentally friendly
  "intelligent",                // intelligent
  "lebensähnlich",              // life-like
  "wartungsfrei",               // maintenance-free
  "multifunktional",            // multifunctional

  "passive Formänderung durch Umwelteinwirkung",          // reactive
  "passive Verhaltensänderung durch Umwelteinwirkung",    // reactive
  
  "zuverlässig",                // reliable
  "widerstandsfähig",                  // resilient
  "reaktionsfähig",             // responsive
  "robust",                     // robust
  "selbstheilend",              // self-healing
  "selbstreparierend",          // self-repairing
  "Energie speichernd",         // storing energy
  "nachhaltig",                 // sustainable
  "technologisch",              // technological
  //"vielseitig",                  // versatile

  "langlebig",                  // long-lasting

  "Energie generierend",       // harvest energy
  "umweltschädlich",            // environmentally harmful
  "enthält Kunststoff",            // contains plastic;	https://utopia.de/ratgeber/ist-plastik-gleich-kunststoff-das-ist-der-unterschied/ 
  "leicht zerstörbar",          // easily destructible
  "wartungsintensiv",           // maintenance-intensive
  "Insekten ähnlich"            // insect-like
];


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
  return array
}

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

/* 
explenations CAM
*/
const explanationCAM_htmlForm = new lab.html.Form({
  title: "explanationCAM",
  content: textObj.explanationCAM,
  messageHandlers: {
    run: function anonymous() {
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        15000 // 10000 (10 seconds)
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



const basalAttributes_htmlForm = new lab.html.Form({
  title: "basalAttributes_list",
  content: textObj.basalAttributes,
  messageHandlers: {
    run: function anonymous() {
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        30000 // 30000 / 1000 / 60 = 0.5 minutes
      );

      // add basal attributes to the table
      var shuffledWordlist = shuffleArray(wordlist);
      for(var i = 0; i < wordlist.length; i++){
      $('#basalAttributes tr:last').after('<tr><td>' + shuffledWordlist[i]);
      }

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

        // save PROLIFIC_PID for next session
        var studySessionData = {
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
    title: "basale Attribute",
    description: "basal Attributes pre CAM",
    repository: "",
    contributors: "Julius Fenn",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Fullscreen(),
    // new lab.plugins.Debug(), // comment out finally
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
 
    explanationCAM_htmlForm,
    basalAttributes_htmlForm    // -> next session
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
