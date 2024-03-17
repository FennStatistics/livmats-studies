/* number of components / elements to set slider */
const numElements = 13; //
var numElementsCounter = 0; // 8
/* general global variables */
var URLparams_global;

var paracountclicks = 0;


var perc_correct_HS; // measuring performance of headphone screening

/* 
################### randomly choose condition ###################
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



const typeInformation = ["Video", "Text"];
var choosenInformation = typeInformation[0]; 
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
        if (typeof URLparams_global.info !== "undefined") {
          choosenInformation = URLparams_global.info;
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
          // save condition
          study.options.datastore.set(
            "condiion",
            choosenInformation
          );
        }
      }
    },
  },
});


/* 
################### test headphones ###################
see: https://link.springer.com/article/10.3758/s13414-017-1361-2
*/
// audio calibration file
function playAudio() {
  var audio = new Audio('pre_CAM/static/Audio_HS/noise_calib_stim.wav');
  audio.play();
}

const HeadphoneScreening_Info_htmlForm = new lab.html.Form({
  title: "Headphone Screening info",
  content: textObj.hs_info,
  messageHandlers: {
    run: function anonymous() {
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});


const HeadphoneScreening_Task_htmlForm = new lab.html.Form({
  title: "Headphone Screening task",
  content: textObj.hs_task,
  messageHandlers: {
    run: function anonymous() {
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const HeadphoneScreening_Sound_htmlForm = new lab.html.Screen({
  title: "Headphone Screening sound",
  content: textObj.hs_sound,
  timeline: [{
    type: "sound",
    start: 0,
    stop: 1000,
    priority: 0,
    payload: {
      gain: 1,
      pan: 0,
      rampUp: 0,
      rampDown: 0,
      src: `pre_CAM/static/Audio_HS/` + '${parameters.stimulus_1}' +  `.wav`,
    }
  },
  {
    type: "sound",
    start: 1500,
    stop: 2500,
    priority: 0,
    payload: {
      gain: 1,
      pan: 0,
      rampUp: 0,
      rampDown: 0,
      src: `pre_CAM/static/Audio_HS/` + '${parameters.stimulus_2}' +  `.wav`,
    }
  }],
  timeout: 3000,
  messageHandlers: {
    run: function anonymous() {
    },
    commit: function anonymous() {
      // progress bar
    },
  },
});

const HeadphoneScreening_Judgement_htmlForm = new lab.html.Screen({
  title: "Headphone Screening judgement",
  content: textObj.hs_judgement,
  responses: {
    "click #choice-1": "1",
    "click #choice-2": "2",
  },
  correctResponse: "${parameters.position_correct}",
  messageHandlers: {
    run: function anonymous() {
    },
    commit: function anonymous() {
    },
  },
});



const HeadphoneScreening_task_sequence = new lab.flow.Sequence({
  title: "Headphone Screening task sequence",
  shuffle: false,
  tardy: true,
  content: [
    HeadphoneScreening_Sound_htmlForm,
    HeadphoneScreening_Judgement_htmlForm,
  ],
});


const HeadphoneScreening_Loop = new lab.flow.Loop({
  template: HeadphoneScreening_task_sequence,
  templateParameters: [
    {
      "stimulus_1": "louder1",
      "stimulus_2": "softest",
      "position_correct": "2"
    },
    {
      "stimulus_1": "softest",
      "stimulus_2": "louder1",
      "position_correct": "1"
    }
  ],
  sample: {
    mode: "draw-shuffle",
    n: "6",
  },
  messageHandlers: {
    run: function anonymous() {
    },
    end: function anonymous() {
      var vec_responses = study.options.datastore.extract('correct', 'Headphone Screening judgement');
      console.log("vec_responses:", vec_responses);
      perc_correct_HS = lab.util.stats.mean(vec_responses);
      console.log("perc_correct_HS:", perc_correct_HS);

      if (typeof jatos.jQuery === "function") {
        // save number of correct responses HS
        study.options.datastore.set(
          "number_correct_HS",
          lab.util.stats.sum(vec_responses)
        );
    }
    },
  },
})


// trap
const HeadphoneScreening_Trap_htmlForm = new lab.html.Form({
  title: "Headphone Screening trap",
  content: textObj.hs_trap,
  tardy: true,
  skip:  '${ perc_correct_HS > 2/3 }',
  messageHandlers: {
    run: function anonymous() {
      // progress bar
      document.querySelector(".progress-bar").style.width = 100 + "%";
    },
  },
});



const HeadphoneScreening_sequence = new lab.flow.Sequence({
  title: "Headphone Screening sequence",
  shuffle: false,
  tardy: true,
  skip: '${ choosenInformation === "Text" }',
  content: [
    HeadphoneScreening_Info_htmlForm,
    HeadphoneScreening_Task_htmlForm,
    HeadphoneScreening_Loop,
    HeadphoneScreening_Trap_htmlForm,
  ],
});



/* 
################### continue introduction phase ###################
*/
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
    run: function anonymous() {
      if(choosenInformation === "Video"){
        $("#placeholder_header").text("Vielen Dank für die Zustimmung zu den Teilnahmebedingungen und die Testung der erforderlichen Audioqualität.");
      }else{
        $("#placeholder_header").text("Vielen Dank für die Zustimmung zu den Teilnahmebedingungen.");
      }
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});



// Attention Check (not used) START
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
// Attention Check (not used) END



const SetupStudy_htmlForm = new lab.html.Form({
  title: "SetupStudy",
  content: textObj.setupStudy,
  messageHandlers: {
    run: () => {
      if (choosenInformation === "Video") {
        $("#placeholderCondition").text("Schauen Sie sich das Video zu dem Roboter, der sich aktuell in der Entwicklung befindet, aufmerksam an.");
      } else {
        // Text
        $("#placeholderCondition").text("Lesen Sie die Informationen zu dem Roboter, der sich aktuell in der Entwicklung befindet, aufmerksam durch.");
      }
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




/* 
################### information phase ###################
*/
/* 
video condition
*/
const explanation_video_htmlForm = new lab.html.Form({
  title: "explanationVideo",
  content: textObj.explanationVideo,
  tardy: true,
  skip: '${ choosenInformation === "Text" }',
  messageHandlers: {
    run: function anonymous() {


      $("#continue").css("visibility", "hidden");
      $("#dialog").hide();


      $('#SRWvideo').on('ended', evt => {
        // code you want to happen when the video ends
        // enable interaction with video
        $("#SRWvideo").css("pointer-events", "auto");
        // show continue button
        $("#continue").css("visibility", "visible");

        // inform participants
        $("#dialog").dialog({
          autoOpen: true,
          modal: true,
          show: "fade",
          hide: false,
          resizable: false,
          draggable: true,
          width: 400,
          maxWidth: 400,
          height: "auto",
          buttons: [
            {
              text: "Ok",
              id: "CloseButton",
              click: function () {
                console.log("clicked close button");
                $(this).dialog("close");
              },
            },
          ],
          position: {
            my: "center",
            at: "center",
            of: window,
            within: $("#SRWvideo")
          }
        });
      });


      /*
      // to test code
      playTimeout = setTimeout(function() {
       $("#SRWvideo").css("pointer-events", "auto"); 
       $("#continue").css("visibility", "visible"); 
       $("#dialog").dialog({
         autoOpen: true,
         modal: true,
         show: "fade",
         hide: false,
         resizable: false,
         draggable: true,
         width: 400,
         maxWidth: 400,
         height: "auto",
         buttons: [
           {text: "Ok",
               id: "CloseButton",
               click: function () {
                   console.log("clicked close button");
                   $(this).dialog("close");
               },
           },
       ],
         position: {
           my: "center",
           at: "center",
           of: window,
           within: $("#SRWvideo")
          }
     })
 
 
     }, 3000); // 3 seconds in ms
 */

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

/* 
text condition
*/
const explanation_text_htmlForm = new lab.html.Form({
  title: "explanationText",
  content: textObj.explanationText,
  tardy: true,
  skip: '${ choosenInformation === "Video" }',
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



/* 
################### survey scales ###################
*/
// >>> Almere Model
const LikertAlmere_htmlForm = new lab.html.Page({
  title: "Almere",
  items: [
    {
      required: true,
      type: "likert",
      items: items_Heerink,
      width: "5",
      anchors: [
        "Stimme überhaupt nicht zu",
        "Stimme nicht zu",
        "Weiß nicht",
        "Stimme zu",
        "Stimme voll und ganz zu"
      ],
      label:
        "Bitte lesen Sie die folgenden Aussagen und geben Sie basierend darauf an, inwieweit Sie jeder Aussage zustimmen.",
      help: "Beantworten Sie bitte jede Aussage, auch wenn Sie sich nicht ganz sicher sind, was Sie antworten sollen.",
      shuffle: false,
      name: "Almere",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 50%\">
     <col style=\"width: 10%\">
     <col style=\"width: 10%\">
     <col style=\"width: 10%\">
     <col style=\"width: 10%\">
     <col style=\"width: 10%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
      paracountclicks = 0;
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});



// >>>  General Attitudes Towards Robots Scale (GAToRS)
const LikertGAToRS_htmlForm = new lab.html.Page({
  title: "GAToRS",
  items: [
    {
      required: true,
      type: "likert",
      items: items_Koverola,
      width: "7",
      anchors: [
        "Stimme überhaupt nicht zu",
        "Stimme nicht zu",
        "Stimme eher nicht zu",
        "Neutral",
        "Stimme eher zu",
        "Stimme zu",
        "Stimme voll und ganz zu"
      ],
      label:
        "Bitte lesen Sie die folgenden Aussagen und geben Sie basierend darauf an, inwieweit Sie jeder Aussage zustimmen.",
      help: "Beantworten Sie bitte jede Aussage, auch wenn Sie sich nicht ganz sicher sind, was Sie antworten sollen.",
      shuffle: false,
      name: "GAToRS",
    },
  ],
  submitButtonText: "Continue →",
  submitButtonPosition: "right",
  width: "l",
  messageHandlers: {
    run: function anonymous() {
      // adjust size of scale
      document.querySelectorAll("div")[0].classList = ["text-left"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      document.querySelectorAll(".page-item-table colgroup")[0].innerHTML = `
     <col style=\"width: 55%\">
     <col style=\"width: 5%\">
     <col style=\"width: 5%\">
     <col style=\"width: 10%\">
     <col style=\"width: 5%\">
     <col style=\"width: 5%\">
     <col style=\"width: 5%\">
     <col style=\"width: 15%\">
     `;
      // sticky labels to front
      $("thead").first().css("z-index", "20");
      // collect paradata
      paracountclicks = 0;
      document.querySelectorAll("input").forEach((item) => {
        item.addEventListener("click", (event) => {
          paracountclicks++;
          console.log("input clicked", paracountclicks);
        });
      });
    },
    end: function anonymous() {
      // collect paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
    },
    commit: function anonymous() {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});



// Define the sequence of components that define the study
const study = new lab.flow.Sequence({
  metadata: {
    title: "S1 part I: science communication",
    description: "S1 study",
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

    HeadphoneScreening_sequence,

    ExclusionCriteria_htmlForm,
    //AttentionCheck_htmlForm,
    SetupStudy_htmlForm,

    // >>> information phase
    explanation_video_htmlForm,
    explanation_text_htmlForm,

    // >>> scales
    LikertAlmere_htmlForm,
    LikertGAToRS_htmlForm,
  ],
});

// Start the study (uncomment to run)
if (typeof jatos.jQuery === "function") {
  jatos.onLoad(() => study.run());
} else {
  study.run();
}
