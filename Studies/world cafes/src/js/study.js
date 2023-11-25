function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";

  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
}

const Required_Testing = false; // set to false for production

/* number of components / elements to set slider */
const numElements = 14;
var numElementsCounter = 0;
/* general global variables */
var URLparams_global;

var paracountclicks = 0;

// var TechnologyScenario = "Stratospheric Aerosol Injection"; // placeholder for technology name for ESTA

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
################### info pages ###################
*/
const InfosBasalAttributes_htmlForm = new lab.html.Form({
  title: "Infos basal attributes",
  content: textObj.infoBasalAttributes,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

    },
  },
});

const InfosSoftRobot_htmlForm = new lab.html.Form({
  title: "Infos soft robot",
  content: textObj.infoBenefitRiskSoftRobot,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});



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

// ending screen
const EndingScreen_htmlScreen = new lab.html.Screen({
  title: "EndingScreen",
  tardy: true,
  content: `
  <header>
  <h2> Thank you very much for your participation ! </h2>
  </header>

  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
  <div>
  It is very likely that we will invite you to another study within the next two weeks.
  </div>
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
  timeout: 10000,
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

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
            "https://app.prolific.co/submissions/complete?cc=C1I8SXIJ", // !!!
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




/* 
################### rating basal attributes ###################
*/
const template = new lab.html.Form({
  content: '<b style="font-size: 32px; border: 1px dashed black; padding: 20px;">${ parameters.word }</b> ' + `
<br>
<br>
<!-- Relevancy Rating -->
<div class="page-item page-item-likert" style="margin-left:20%; margin-right: 20%">
    <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
  Relevancy for livMatS
    </p>
  
    <span style="float: left; display: inline-block; width: 20%; font-size: 16px;">
    unimportant
    </span>
    <span style="float: center; display: inline-block; width: 50%; font-size: 16px;">
    little significant <span style="margin-left: 40%;">significant</span>
    </span>
    <span style="float: right; display: inline-block; width: 20%; font-size: 16px;">
    very significant
    </span>
  
    <form id="ratingBasalAttributes">
  <table class="page-item-table">
      <colgroup>
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  <col style="width: 6%">
  </colgroup>
      <thead class="sticky-top">
  <th class="sticky-top text-center small">
  1
  </th>
  <th class="sticky-top text-center small">
  2
  </th>
  <th class="sticky-top text-center small">
  3
  </th>
  <th class="sticky-top text-center small">
  4
  </th>
  <th class="sticky-top text-center small">
  5
  </th>
  <th class="sticky-top text-center small">
  6
  </th>
  <th class="sticky-top text-center small">
  7
  </th>
  <th class="sticky-top text-center small">
  8
  </th>
  <th class="sticky-top text-center small">
  9
  </th>
  <th class="sticky-top text-center small">
  10
  </th>
  </thead>
      <tbody>

  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="1" required >
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="2" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="3" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="4" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="5" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="6" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="7" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="8" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="9" required>
  </label>
  </td>
  <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
  <input type="radio" name="ratingLivmats" value="10" required>
  </label>
      </tbody>
    </table>
    </div>
  
<br>

<!-- Valence Rating -->
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
Emotional evaluation
  </p>
  <div class="center-valence">
<div class="outerNodeSlider" style="margin-bottom: 25px;">
<div class="greenColorNodeSlider">
    <div class="yellowColorNodeSlider">
        <div class="redColorNodeSlider">
            <input type="range" min="1" max="7" step="1" id="nodeSlider" name="ratingValence">
        </div>
    </div>

<div class="labelsNodeSlider">
    <span>-3</span>
    <span>-2</span>
    <span>-1</span>
    <span>0</span>
    <span>1</span>
    <span>2</span>
    <span>3</span>
</div>
</div>
</div>
</div>
  </form>

    <button id="continue" type="submit" form="ratingBasalAttributes">
    Please interact with the slider to continue
  </button>
`, // parameters substituted ...
  tardy: true,
  messageHandlers: {
    run: function anonymous() {
      $("#continue").prop("disabled", true);
      $("#nodeSlider").on("change click", function() {
        $("#continue").prop("disabled", false);
        $("#continue").text("Continue →");
      });
    },
    commit: function anonymous() {
      study.options.datastore.set("ratingValence", $("#nodeSlider").val());
    },
  },
})

const basalAttributes = new lab.flow.Loop({
  template: template,
  templateParameters: [
    /* ... */
    { word: 'adaptiv' },
    { word: 'energieautonom' },
    { word: 'langlebig' },
    /* ... */
  ],
  sample: {
    mode: "draw-shuffle"
  },
})

const basalAttributesRating = new lab.html.Frame({
  context: `
    <header>
      <h3>Please rate the relevance and the valence of the following adjectives for livMatS</h3>
      <h5>Remark: Particular important adjectives for material systems in livmats should be rated 8-10.</h5>
    </header>
    <br>
    <main style="width: 100%;">
      <!-- this is where stimuli will be inserted -->
    </main>
  `,
  contextSelector: 'main',
  content: basalAttributes,
})





/* 
################### important basal attributes for livmats areas ###################
*/
function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var StatisticsVal = undefined;
var StatisticsArray = [];

var SoftwareVal = undefined;
var SoftwareArray = [];

var ContentVal = undefined;
var ContentArray = [];

var ToolsVal = undefined;
var ToolsArray = [];

var fillArray = [];
var list = undefined;

var BatchArray = [];

const QuesTools_htmlForm = new lab.html.Form({
  title: "QuesTools",
  content: textObj.livmatsAreas,
  messageHandlers: {
    run: function anonymous() {
      /* for Statistical Models / Methods: */
      fillArray = jatos.batchSession.get("statistics"); // !!!
      fillArray = fillArray.filter(onlyUnique);

      fillArray = fillArray.sort();
      list = document.getElementById("statistics_list");
      fillArray.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        list.appendChild(option);
      });

      /* for Statistical Models / Methods: */
      // > add
      $("#select_statistics_list").click(() => {
        StatisticsVal = $("#statistics").val();
        if (StatisticsVal.length > 0) {
          StatisticsArray.push(StatisticsVal);
          StatisticsArray = StatisticsArray.filter(onlyUnique);

          $(".choosenElements_statistics").html(StatisticsArray.join('<br>'));
                  // StatisticsArray.toString()
        }

        $("#statistics").val("");

        // Batch data add:
        jatos.batchSession
          .add("/statistics/-", StatisticsVal)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
      });
      // > delete
      $("#remove_statistics_list").click(() => {
        StatisticsVal = $("#statistics").val();
        if (StatisticsVal.length > 0) {
          StatisticsArray = StatisticsArray.filter(function (e) {
            return e !== StatisticsVal;
          });
          $(".choosenElements_statistics").html(StatisticsArray.join('<br>'));
        }
        $("#statistics").val("");

        // Batch data remove:
        /*
        BatchArray = jatos.batchSession.get("statistics");
        BatchArray = BatchArray.filter(function (e) {
          return e !== StatisticsVal;
        });
        jatos.batchSession
          .set("statistics", BatchArray)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
          */
      });

      /* for Software: */
      fillArray = jatos.batchSession.get("software"); // !!!
      fillArray = fillArray.filter(onlyUnique);

      fillArray = fillArray.sort();
      list = document.getElementById("software_list");
      fillArray.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        list.appendChild(option);
      });

      /* for Software: */
      // > add
      $("#select_software_list").click(() => {
        SoftwareVal = $("#software").val();
        if (SoftwareVal.length > 0) {
          SoftwareArray.push(SoftwareVal);
          SoftwareArray = SoftwareArray.filter(onlyUnique);

          $(".choosenElements_software").html(SoftwareArray.join('<br>'));
          // $(".choosenElements_software").text(SoftwareArray.toString());
        }
        $("#software").val("");

        // Batch data add:
        jatos.batchSession
          .add("/software/-", SoftwareVal)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
      });
      // > delete
      $("#remove_software_list").click(() => {
        SoftwareVal = $("#software").val();
        if (SoftwareVal.length > 0) {
          SoftwareArray = SoftwareArray.filter(function (e) {
            return e !== SoftwareVal;
          });
          $(".choosenElements_software").html(SoftwareArray.join('<br>'));
        }
        $("#software").val("");

        // Batch data remove:
        /*
        BatchArray = jatos.batchSession.get("software");
        BatchArray = BatchArray.filter(function (e) {
          return e !== SoftwareVal;
        });
        jatos.batchSession
          .set("software", BatchArray)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
          */
      });

      /* for Content-wise topic(s): */
      fillArray = jatos.batchSession.get("contentwise"); // !!!
      fillArray = fillArray.filter(onlyUnique);

      fillArray = fillArray.sort();
      list = document.getElementById("contentwise_list");
      fillArray.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        list.appendChild(option);
      });

      /* for Content-wise topic(s): */
      // > add
      $("#select_contentwise_list").click(() => {
        ContentVal = $("#contentwise").val();
        if (ContentVal.length > 0) {
          ContentArray.push(ContentVal);
          ContentArray = ContentArray.filter(onlyUnique);

          $(".choosenElements_contentwise").html(ContentArray.join('<br>'));
          // $(".choosenElements_contentwise").text(ContentArray.toString());
        }
        $("#contentwise").val("");

        // Batch data add:
        jatos.batchSession
          .add("/contentwise/-", ContentVal)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
      });
      // > delete
      $("#remove_contentwise_list").click(() => {
        ContentVal = $("#contentwise").val();
        if (ContentVal.length > 0) {
          ContentArray = ContentArray.filter(function (e) {
            return e !== ContentVal;
          });
          $(".choosenElements_contentwise").html(ContentArray.join('<br>'));
        }
        $("#contentwise").val("");

        // Batch data remove:
        /*
        BatchArray = jatos.batchSession.get("contentwise");
        BatchArray = BatchArray.filter(function (e) {
          return e !== ContentVal;
        });
        jatos.batchSession
          .set("contentwise", BatchArray)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
          */
      });

      /* for Tools: */
      fillArray = jatos.batchSession.get("tools"); // !!!
      fillArray = fillArray.filter(onlyUnique);

      fillArray = fillArray.sort();
      list = document.getElementById("tools_list");
      fillArray.forEach(function (item) {
        var option = document.createElement("option");
        option.value = item;
        list.appendChild(option);
      });

      /* for Software: */
      // > add
      $("#select_tools_list").click(() => {
        ToolsVal = $("#tools").val();
        if (ToolsVal.length > 0) {
          ToolsArray.push(ToolsVal);
          ToolsArray = ToolsArray.filter(onlyUnique);

          // $(".choosenElements_tools").text(ToolsArray.toString());
          $(".choosenElements_tools").html(ToolsArray.join('<br>'));

        }
        $("#tools").val("");

        // Batch data add:
        jatos.batchSession
          .add("/tools/-", ToolsVal)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
      });
      // > delete
      $("#remove_tools_list").click(() => {
        ToolsVal = $("#tools").val();
        if (ToolsVal.length > 0) {
          ToolsArray = ToolsArray.filter(function (e) {
            return e !== ToolsVal;
          });
          $(".choosenElements_tools").html(ToolsArray.join('<br>'));
        }
        $("#tools").val("");

        // Batch data remove:
        /*
        BatchArray = jatos.batchSession.get("tools");
        BatchArray = BatchArray.filter(function (e) {
          return e !== ToolsVal;
        });
        jatos.batchSession
          .set("tools", BatchArray)
          .then(() => console.log("Batch Session was successfully updated"))
          .catch(() => console.log("Batch Session synchronization failed"));
                */
      });
    },
    end: function anonymous() {
      // save entries: 
      study.options.datastore.set("toolsStatistics", StatisticsArray);
      study.options.datastore.set("toolsSoftwares", SoftwareArray);
      study.options.datastore.set("toolsTopics", ContentArray);
      study.options.datastore.set("toolsData", ToolsArray);


      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});




/* 
################### open questions soft robot ###################
*/
const SAIpreKnowledge_htmlForm = new lab.html.Form({
  title: "SAIpreKnowledge",
  content: textObj.SAIpreKnowledge,
  messageHandlers: {
    run: function anonymous() {
      $("#hideKnowSRMdefinition").hide();
      $("#hideRisksSRfinition").hide();


      $("#knowSRM").on("input", () => {
        var tmpValue = $("#knowSRM option:selected")[0].value;

        if (tmpValue != "knowSRMno") {
          $("#hideKnowSRMdefinition").show();
        } else {
          $("#hideKnowSRMdefinition").hide();
        }
      });

      $("#risksSR").on("input", () => {
        var tmpValue = $("#risksSR option:selected")[0].value;

        if (tmpValue != "risksSRno") {
          $("#hideRisksSRfinition").show();
        } else {
          $("#hideRisksSRfinition").hide();
        }
      });
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      if (typeof jatos.jQuery === "function") {
        // If JATOS is available, send data there
        var resultJson = study.options.datastore.exportJson();
        jatos
          .submitResultData(resultJson)
          .then(() => console.log("success"))
          .catch(() => console.log("error"));
      }
    },
  },
});






// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "t1_CAMspiracy",
    description: "t1 - climate change scepticism",
    repository: "",
    contributors: "Julius Fenn, Christophe Becht",
  },
  plugins: [
    new lab.plugins.Metadata(),
    //new lab.plugins.Fullscreen(),
    new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
    basalAttributesRating,
    // risk benefits soft robot
    InfosSoftRobot_htmlForm,
    SAIpreKnowledge_htmlForm,

    // >>> introduction phase
    Greetings_htmlForm,
    InformCon_htmlForm,
    InformConsentNO_htmlForm,
    //ExclusionCriteria_htmlForm,
    //AttentionCheck_htmlForm,
    SetupStudy_htmlForm,

    // basal attributes
    InfosBasalAttributes_htmlForm,
    basalAttributesRating,
    QuesTools_htmlForm,

    // risk benefits soft robot
    InfosSoftRobot_htmlForm,
    SAIpreKnowledge_htmlForm,


    // >>> ending phase
    //QuesSocioDemo_htmlForm,
    FeedbackScreen_htmlScreen,
    EndingScreen_htmlScreen,
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
