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
const numElements = 11;
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
          /*
          alert(
            "Sorry, there may be a technical error! It was not possible to obtain all the necessary data from prolific. Please write to the study director that an error has occurred."
          );
          jatos.abortStudy("study aborted - no prolific ID");
          */
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
  <br>
  <div>
  <i>The experiment will end in few seconds and you will be automatically redirected back to the livMatS page.</i> 
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
            "https://www.livmats.uni-freiburg.de/en", // !!!
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
  content: '<b style="font-size: 32px; border: 1px dashed black; padding: 20px;">${ parameters.English_translation }</b> ' + `
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

  <span style="float: center; display: inline-block; width: 100%; font-size: 16px;">
[strongly negative - neutral - strongly positive]
  </span>

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

      /*
      // this.parent.end() !!!s
      var tmp_this = this;
      $(document).one('keydown', function (e) {
        if (e.keyCode == 90) {
          console.log("clicked z");
          tmp_this.parent.end();
        }
      });
      */

    },
    end: function anonymous() {
      study.options.datastore.set("ratingValence", $("#nodeSlider").val());
    },
  },
})

const basalAttributes = new lab.flow.Loop({
  template: template,
  templateParameters: [
    {
        "Number": "1",
        "Attribut": "adaptiv",
        "English_translation": "adaptive"
    },
    {
        "Number": "2",
        "Attribut": "anisotropisch",
        "English_translation": "anisotropic"
    },
    {
        "Number": "3",
        "Attribut": "autonom",
        "English_translation": "autonomous"
    },
    {
        "Number": "4",
        "Attribut": "beweglich",
        "English_translation": "mobile"
    },
    {
        "Number": "5",
        "Attribut": "bio-inspiriert",
        "English_translation": "bio-inspired"
    },
    {
        "Number": "6",
        "Attribut": "bionisch",
        "English_translation": "biologically inspired"
    },
    {
        "Number": "7",
        "Attribut": "energieautonom",
        "English_translation": "energy autonomous"
    },
    {
        "Number": "8",
        "Attribut": "energieeffizient",
        "English_translation": "energy-efficient"
    },
    {
        "Number": "9",
        "Attribut": "energiespeichernd",
        "English_translation": "storing energy"
    },
    {
        "Number": "10",
        "Attribut": "Gestalt veränderbar",
        "English_translation": "changeable shape"
    },
    {
        "Number": "11",
        "Attribut": "intelligent",
        "English_translation": "intelligent"
    },
    {
        "Number": "12",
        "Attribut": "langlebig",
        "English_translation": "durable"
    },
    {
        "Number": "13",
        "Attribut": "lebensähnlich",
        "English_translation": "life-like"
    },
    {
        "Number": "14",
        "Attribut": "multifunktional",
        "English_translation": "multifunctional"
    },
    {
        "Number": "15",
        "Attribut": "nachhaltig",
        "English_translation": "sustainable"
    },
    {
        "Number": "16",
        "Attribut": "ökologisch",
        "English_translation": "ecologically"
    },
    {
        "Number": "17",
        "Attribut": "reagierend",
        "English_translation": "responsive"
    },
    {
        "Number": "18",
        "Attribut": "resilient",
        "English_translation": "resilient"
    },
    {
        "Number": "19",
        "Attribut": "robust",
        "English_translation": "robust"
    },
    {
        "Number": "20",
        "Attribut": "selbstheilend",
        "English_translation": "self-healing"
    },
    {
        "Number": "21",
        "Attribut": "selbstreparierend",
        "English_translation": "self-repairing"
    },
    {
        "Number": "22",
        "Attribut": "selbstständig",
        "English_translation": "autonomous"
    },
    {
        "Number": "23",
        "Attribut": "soft",
        "English_translation": "soft"
    },
    {
        "Number": "24",
        "Attribut": "technologisch",
        "English_translation": "technological"
    },
    {
        "Number": "25",
        "Attribut": "umweltverträglich",
        "English_translation": "environmentally friendly"
    },
    {
        "Number": "26",
        "Attribut": "veränderbar",
        "English_translation": "changeable"
    },
    {
        "Number": "27",
        "Attribut": "verlässlich",
        "English_translation": "reliable"
    },
    {
        "Number": "28",
        "Attribut": "vielseitig",
        "English_translation": "versatile"
    },
    {
        "Number": "29",
        "Attribut": "wartungsfrei",
        "English_translation": "maintenance-free"
    },
    {
        "Number": "30",
        "Attribut": "pneumatisch",
        "English_translation": "pneumatic"
    },
    {
        "Number": "31",
        "Attribut": "elektronikfrei",
        "English_translation": "electronic-free"
    },
    {
        "Number": "32",
        "Attribut": "reaktiv",
        "English_translation": "reactive"
    }
],
  sample: {
    mode: "draw-shuffle",
    n: "32",
  },
})

const basalAttributesRating = new lab.html.Frame({
  context: `
    <header>
      <h3>Please rate the relevance and the valence of the following adjectives for livMatS</h3>
      <h5>Remark: Particular important adjectives for material systems in livmats should be rated 8-10, and for the emotional evaluation focus on your initial emotional feeling.</h5>
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

// application cases
const SRapplication_htmlForm = new lab.html.Form({
  title: "SR applications",
  content: textObj.SR_applications,
  messageHandlers: {
    run: function anonymous() {
      $("#hideapplicationsSRRdefinition").hide();


      $("#applicationsSR").on("input", () => {
        var tmpValue = $("#applicationsSR option:selected")[0].value;

        if (tmpValue != "0") {
          $("#hideapplicationsSRRdefinition").show();
        } else {
          $("#hideapplicationsSRRdefinition").hide();
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


// benefits, risks
const SRbenefitsRisks_htmlForm = new lab.html.Form({
  title: "SR benefits risks",
  content: textObj.SR_benefitsRisks,
  messageHandlers: {
    run: function anonymous() {
      $("#hidebenefitsSRdefinition").hide();
      $("#hideRisksSRfinition").hide();


      $("#benefitsSR").on("input", () => {
        var tmpValue = $("#benefitsSR option:selected")[0].value;

        if (tmpValue != "0") {
          $("#hidebenefitsSRdefinition").show();
        } else {
          $("#hidebenefitsSRdefinition").hide();
        }
      });

      $("#risksSR").on("input", () => {
        var tmpValue = $("#risksSR option:selected")[0].value;

        if (tmpValue != "0") {
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
    },
  },
});

// social benefits, risks
const SRsocialBenefitsRisks_htmlForm = new lab.html.Form({
  title: "SR social benefits risks",
  content: textObj.SR_socialBenefitsRisks,
  messageHandlers: {
    run: function anonymous() {
      $("#hidesocialBenefitsSRdefinition").hide();
      $("#hidesocialRisksSRdefinition").hide();


      $("#socialBenefitsSR").on("input", () => {
        var tmpValue = $("#socialBenefitsSR option:selected")[0].value;

        if (tmpValue != "0") {
          $("#hidesocialBenefitsSRdefinition").show();
        } else {
          $("#hidesocialBenefitsSRdefinition").hide();
        }
      });

      $("#socialRisksSR").on("input", () => {
        var tmpValue = $("#socialRisksSR option:selected")[0].value;

        if (tmpValue != "0") {
          $("#hidesocialRisksSRdefinition").show();
        } else {
          $("#hidesocialRisksSRdefinition").hide();
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


// application cases
const SRsustainable_htmlForm = new lab.html.Form({
  title: "SR sustainable",
  content: textObj.SR_sustainable,
  messageHandlers: {
    run: function anonymous() {
      $("#hidesustainableSRdefinition").hide();


      $("#sustainableSR").on("input", () => {
        var tmpValue = $("#sustainableSR option:selected")[0].value;

        if (tmpValue != "0") {
          $("#hidesustainableSRdefinition").show();
        } else {
          $("#hidesustainableSRdefinition").hide();
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
    title: "world cafe",
    description: "world cafe study",
    repository: "",
    contributors: "Julius Fenn, Louisa Estadieu",
  },
  plugins: [
    new lab.plugins.Metadata(),
    // new lab.plugins.Fullscreen(),
    // new lab.plugins.Debug(), // comment out finally
    // new lab.plugins.Download()
  ],
  content: [
        // risk benefits soft robot
        InfosSoftRobot_htmlForm,
        SRapplication_htmlForm,
        SRbenefitsRisks_htmlForm,
        SRsocialBenefitsRisks_htmlForm,
        SRsustainable_htmlForm,

        
    InfosBasalAttributes_htmlForm,
    basalAttributesRating,

    
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
    SRapplication_htmlForm,
    SRbenefitsRisks_htmlForm,
    SRsocialBenefitsRisks_htmlForm,
    SRsustainable_htmlForm,

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
