/* certainty opinon SAI */
let quesUncertaintySAI = {
    ques: ["I have a clear opinion about stratospheric aerosol injection.",
      "I know how to think about the possible use of stratospheric aerosol injection.",
      "Overall, I am very sure about my opinion of stratospheric aerosol injection."
    ],
    scale: ["1", "2", "3"]
  }
  
  var index_quesUncertaintySAI = shuffle(quesUncertaintySAI);
  console.log("quesUncertaintySAI index: ", index_quesUncertaintySAI);
  console.log("quesUncertaintySAI: ", quesUncertaintySAI);
  
  var items_quesUncertaintySAI = createitems(quesUncertaintySAI, index_quesUncertaintySAI);
  console.log(items_quesUncertaintySAI);
  
  
  /* Climate Change Concern */
  let quesClimateChangeConcern = {
    ques: ["I worry about the climate’s state.",
      "Climate change has severe consequences for humans and nature.",
      "Climate protection is important for our future.",
      "We must protect the climate’s delicate equilibrium.",
      "There is no need to be too anxious about climate change, as it will change anyway, like during an ice age.",
      "I worry about what will happen due to climate change.",
      "I worry about the cause of climate change."
    ],
    scale: ["1", "2", "3", "4", "5r", "6", "7"]
  }
  
  var index_quesClimateChangeConcern = shuffle(quesClimateChangeConcern);
  console.log("quesClimateChangeConcern index: ", index_quesClimateChangeConcern);
  console.log("quesClimateChangeConcern: ", quesClimateChangeConcern);
  
  var items_quesClimateChangeConcern = createitems(quesClimateChangeConcern, index_quesClimateChangeConcern);
  console.log(items_quesClimateChangeConcern);



  /* scales */
  

/* Climate Change Concern */
const ClimateChangeConcern_htmlForm = new lab.html.Page({
    title: "ClimateChangeConcern",
    items: [
      {
        required: Required_Testing,
        type: "likert",
        items: items_quesClimateChangeConcern,
        width: "6",
        anchors: [
          "Strongly Disagree",
          "Disagree",
          "Somewhat Disagree",
          "Somewhat Agree",
          "Agree",
          "Strongly Agree",
        ],
        label:
          "In the following you see a scale that consists of seven statements regarding your climate change concern. Please indicate the extent to which <b>you</b> would agree with the following statements.",
        help: "Please answer every statement, even if you are not completely sure of your response.",
        shuffle: false,
        name: "ClimateChangeConcern",
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
       <col style=\"width: 65%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
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
  
  
  
  /* certainty opinon on SAI */
  const quesCertaintySAI_htmlForm = new lab.html.Page({
    title: "quesCertaintySAI",
    items: [
      {
        required: Required_Testing,
        type: "likert",
        items: items_quesUncertaintySAI,
        width: "7",
        anchors: [
          "Strongly Disagree",
          "Disagree",
          "Somewhat Disagree",
          "Neutral",
          "Somewhat Agree",
          "Agree",
          "Strongly Agree",
        ],
        label:
          "Evaluate how confident you are in your opinion about stratospheric aerosol injection. ",
        help: "Please answer every statement, even if you are not completely sure of your response.",
        shuffle: false,
        name: "certaintySAI",
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
       <col style=\"width: 65%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       <col style=\"width: 5%\">
       `;
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
  



/* ESTA SCALE */

function shuffleESTA(queslist) {
    let array_emp = [];
    for (var i = 0; i < queslist.length; i++) {
      array_emp.push(i);
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

const ESTA = [
    {
      scale: "relativist01",
      left: "is unacceptable to my culture",
      right: "is acceptable to my culture",
    },
    {
      scale: "relativist02",
      left: "is unacceptable to my family",
      right: "is acceptable to my family",
    },
    {
      scale: "relativist03",
      left: "is unacceptable to my traditions",
      right: "is acceptable to my traditions",
    },
    {
      scale: "relativist04",
      left: "is unacceptable for myself",
      right: "is acceptable for myself",
    },
    {
      scale: "relativist05",
      left: "is unacceptable to people I most admire",
      right: "is acceptable to people I most admire",
    },
    { scale: "contractualist01", left: "is unjust", right: "is just" },
    { scale: "contractualist02", left: "is unfair", right: "is fair" },
    {
      scale: "contractualist03",
      left: "works against implicit moral conventions",
      right: "supports implicit moral conventions",
    },
    {
      scale: "contractualist04",
      left: "violates important social norms",
      right: "does not violate important social norms",
    },
    {
      scale: "contractualist05",
      left: "does not result in an equal distribution of good and bad",
      right: "results in an equal distribution of good and bad",
    },
    {
      scale: "contractualist06",
      left: "violates my ideas of fairness",
      right: "does not violate my ideas of fairness",
    },
    {
      scale: "hedonism01",
      left: "is personally unsatisfactory",
      right: "is personally satisfactory",
    },
    {
      scale: "hedonism02",
      left: "would be selfish for me to use",
      right: "would not be selfish for me to use",
    },
    {
      scale: "hedonism03",
      left: "requires me to make sacrifices in order to use it",
      right: "does not require me to make sacrifices in order to use it",
    },
    {
      scale: "hedonism04",
      left: "is not in the best interests of my person",
      right: "is in the best interests of my person",
    },
    {
      scale: "hedonism05",
      left: "minimizes my pleasure",
      right: "maximizes my pleasure",
    },
    {
      scale: "hedonism06",
      left: "is a hindrance to a good personal life",
      right: "promotes a good personal life",
    },
    { scale: "hedonism07", left: "harms my health", right: "promotes my health" },
    {
      scale: "hedonism08",
      left: "harms my freedom",
      right: "promotes my freedom",
    },
    { scale: "hedonism09", left: "harms my safety", right: "promotes my safety" },
    {
      scale: "utilitarian01",
      left: "provides the least amount of utility for society",
      right: "provides the greatest amount of utility for society",
    },
    {
      scale: "utilitarian02",
      left: "minimizes benefits for society",
      right: "maximizes benefits for society",
    },
    {
      scale: "utilitarian03",
      left: "maximizes harm for society",
      right: "minimizes harm for society",
    },
    {
      scale: "utilitarian04",
      left: "tends overall to be bad for society",
      right: "tends overall to be good for society",
    },
    {
      scale: "utilitarian05",
      left: "leads to the least good for the greatest number",
      right: "leads to the greatest good for the greatest number",
    },
    {
      scale: "utilitarian06",
      left: "leads to the greatest ill for the greatest number",
      right: "leads to the least ill for the greatest number",
    },
    {
      scale: "utilitarian07",
      left: "results in a negative cost benefit ratio for society",
      right: "results in a positive cost benefit ratio for society",
    },
    {
      scale: "utilitarian08",
      left: "is inefficient for society",
      right: "is efficient for society",
    },
    {
      scale: "utilitarian09",
      left: "leads to future harm for society",
      right: "leads to future benefit for society",
    },
    {
      scale: "deontology01",
      left: "does not imply a moral obligation to act in a certain way",
      right: "implies a moral obligation to act in a certain way",
    },
    {
      scale: "deontology02",
      left: "harms the autonomy of users",
      right: "promotes the autonomy of users",
    },
    {
      scale: "deontology03",
      left: "obliges a certain immoral behavior",
      right: "obliges a certain moral behavior",
    },
    {
      scale: "deontology04",
      left: "is morally wrong",
      right: "is morally right",
    },
    {
      scale: "deontology05",
      left: "goes against an important moral rule by which I live",
      right: "does not go against an important moral rule by which I live",
    },
    {
      scale: "deontology06",
      left: "attacks the intrinsic value of nature",
      right: "protects the intrinsic value of nature",
    },
    {
      scale: "deontology07",
      left: "attacks the value of the ecological environment",
      right: "protects the value of the ecological environment",
    },
    {
      scale: "deontology08",
      left: "attacks the value of the cultural environment",
      right: "protects the value of the cultural environment",
    },
    {
      scale: "virtue01",
      left: "is developed by someone who has wrong motivations",
      right: "is developed by someone who has good motivations",
    },
    {
      scale: "virtue02",
      left: "is developed by someone who has wrong desires",
      right: "is developed by someone who has good desires",
    },
    {
      scale: "virtue03",
      left: "is developed by someone who has a bad character",
      right: "is developed by someone who has a good character",
    },
    {
      scale: "virtue04",
      left: "is developed by someone who is not prudent",
      right: "is developed by someone who is prudent",
    },
    {
      scale: "virtue05",
      left: "is developed by someone who is not reasonable",
      right: "is developed by someone who is reasonable",
    },
    {
      scale: "virtue06",
      left: "is developed by someone who is not striving for professional excellence",
      right:
        "is developed by someone who is striving for professional excellence",
    },
    {
      scale: "virtue07",
      left: "is developed by someone who is indifferent towards nature",
      right: "is developed by someone who is respectful towards nature",
    },
    {
      scale: "virtue08",
      left: "is developed by someone who is insensitive to interactions with society",
      right:
        "is developed by someone who is sensitive to interactions with society",
    },
    {
      scale: "virtue09",
      left: "is developed by someone who is acting on ill intentions",
      right: "is developed by someone who is acting on good intentions",
    },
  ];
  
  var index_ESTA = shuffleESTA(ESTA);
  console.log("ESTA index: ", index_ESTA);
  
  /* Definition Ethic Theories */
  const EthicTheories = [
    {
      ethicTheory: "Deontology",
      itemID: "deontology",
      def_top: "to see whether it violates central principles or duties",
      def_beforemain:
        "is concerned with the possible violation of central principles or duties:",
      def_main:
        'A technology is morally acceptable if it respects basic principles and duties. These basic principles are held up by you as a free and rational person. Your principles are oriented by the guiding statement: "You should act the way you want others to act". When interacting with the technology, upholding your principles is of central importance, not the potential outcomes and consequences of your actions.',
      def_picture: "Deontology.JPG",
      def_picture_old: "Folie1.JPG",
    },
    {
      ethicTheory: "Utilitarianism",
      itemID: "utilitarian",
      def_top: "regarding its consequences on society",
      def_beforemain: "is concerned with the consequences for society:",
      def_main:
        "A technology is morally acceptable if it leads to the best outcomes and consequences for society. By interacting with the technology, society aims to maximize overall benefit by increasing utility, decreasing harm or leading to a better world.",
      def_picture: "Utilitarianism.JPG",
      def_picture_old: "Folie2.JPG",
    },
    {
      ethicTheory: "Hedonism",
      itemID: "hedonism",
      def_top: "regarding its consequences for you personally",
      def_beforemain: "is concerned with the consequences for you personally:",
      def_main:
        "A technology is morally acceptable if it increases pleasure and wellbeing or promotes a good life for you. By interacting with the technology in an instrumental way, you can increase your pleasure, wellbeing or your personal goals.",
      def_picture: "Hedonism.JPG",
      def_picture_old: "Folie3.JPG",
    },
    {
      ethicTheory: "Virtue ethics",
      itemID: "virtue",
      def_top:
        "regarding the moral standards of the person who has developed this technology",
      def_beforemain:
        "is concerned with the moral standards of the technology’s developer:",
      def_main:
        "A technology is morally acceptable if it has been developed by someone who has the character and ability to recognize what is morally required. The developer is an upright person with high moral standards, who has developed the technology on the basis of her/his values.",
      def_picture: "Virtue_ethics.JPG",
      def_picture_old: "Folie4.JPG",
    },
    {
      ethicTheory: "Contractualism",
      itemID: "contractualist",
      def_top:
        "in terms of whether it goes against implicit conventions upon which our society generally relies",
      def_beforemain:
        "asks whether implicit conventions upon which our society generally relies are disregarded or violated:",
      def_main:
        "A technology is morally acceptable if it does not disregard or work against implicit moral conventions that are considered essential to the functioning of a society. To not break moral conventions is in the best interest of all members of a society. For example, in a state where there is “war of all against all”, life would be too insecure and harmful.",
      def_picture: "Contractualism.JPG",
      def_picture_old: "Folie5.JPG",
    },
    {
      ethicTheory: "Relativism",
      itemID: "relativist",
      def_top:
        "regarding the possibility that the ethical evaluation differs between groups of people",
      def_beforemain:
        "is concerned with the possibility that ethical evaluation differs between groups of people:",
      def_main:
        "The acceptability of a technology depends on the social, cultural and political contexts in which it is applied. These different contexts influence the standards and procedures by which the use or implementation of a technology is justified.",
      def_picture: "Relativism.JPG",
      def_picture_old: "Folie6.JPG",
    },
  ];
  
  var index_EthicTheories = shuffleESTA(EthicTheories);
  console.log("EthicTheories index: ", index_EthicTheories);
  

  /* ESTA scale */

  /* ESTA */
// general information
var skipESTAgeninfo = false;
const ESTAgeninfo_htmlForm = new lab.html.Form({
  title: "ESTAgeninfo",
  tardy: true,
  skip: "${skipESTAgeninfo}",
  content: textObj.ESTAgeninfo,
  messageHandlers: {
    run: () => {
      document.querySelector("button").style.visibility = "hidden";
      setTimeout(
        () => (document.querySelector("button").style.visibility = "visible"),
        10000 // 10000 (10 seconds)
      );
    },
    commit: () => {


      // progress bar
      if(!skipESTAgeninfo){
        numElementsCounter++;
        document.querySelector(".progress-bar").style.width =
          (numElementsCounter / numElements) * 100 + "%";
      }

            // show this element only once
            skipESTAgeninfo = true;

    },
  },
});

// ethic theories to fill in "setEthic"
var GlobalCounter = -1;

const ESTAtheorydefinition = new lab.html.Form({
  title: "ESTAtheorydefinition",
  tardy: true,
  content: textObj.ESTAtheorydefinition,
  //timeout: 1000,
  messageHandlers: {
    "before:prepare": () => {},
    run: () => {
      GlobalCounter++;
      if (GlobalCounter == 6) {
        GlobalCounter = 0; // set global counter to zero
        index_EthicTheories = shuffleESTA(EthicTheories); // shuffle again order of ethical theories
      }
      console.log("GlobalCounter: ", GlobalCounter);
      $("#ethicTheory_def_top").text(
        EthicTheories[index_EthicTheories[GlobalCounter]].def_top
      );

      $("#ethicTheory_name").text(
        EthicTheories[index_EthicTheories[GlobalCounter]].ethicTheory
      );
      $("#ethicTheory_beforemain").text(
        EthicTheories[index_EthicTheories[GlobalCounter]].def_beforemain
      );

      $("#ethicTheory_image").attr(
        "src",
        "static/EthicTheories/" +
          EthicTheories[index_EthicTheories[GlobalCounter]].def_picture
      );

      $("#ethicTheory_definition").text(
        EthicTheories[index_EthicTheories[GlobalCounter]].def_main
      );
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

var lastValue = undefined;
var activeESTA = [];
const ESTAscale = new lab.html.Form({
  title: "ESTAscale",
  content: textObj.ESTAscale, // FirstQuesComponentText,
  tardy: true,
  //timeout: 1000,
  messageHandlers: {
    run: () => {
      document.querySelectorAll("div")[0].classList = ["text-center"];
      document.querySelectorAll("main")[1].classList = ["w-xl"];
      $("#ethicTheory_name1").text(
        EthicTheories[index_EthicTheories[GlobalCounter]].ethicTheory
      );
      // console.log(ESTA);

      var setEthic = EthicTheories[index_EthicTheories[GlobalCounter]].itemID;

      var RegExpSetEthic = new RegExp(setEthic);
      activeESTA = [];
      ESTA.forEach((elt) => {
        if (RegExpSetEthic.test(elt.scale)) {
          // console.log("elt: ", elt);
          activeESTA.push(elt);
        }
      });

      // console.log("activeESTA: ", activeESTA);

      // remove all rows not needed
      var LengthTr = $("tr").length - 1;
      if (LengthTr > activeESTA.length) {
        for (let i = LengthTr; i >= activeESTA.length + 1; i--) {
          $("tr")[i].remove();
        }
      }

      // fill up needed rows
      var index_activeESTA = shuffleESTA(activeESTA);
      console.log("index_activeESTA: ", index_activeESTA);
      var itemName = undefined;
      for (let i = 1; i <= activeESTA.length; i++) {
        itemName = activeESTA[index_activeESTA[i - 1]].scale;

        // left and right scale
        $("tr")[i].children[0].innerHTML =
          activeESTA[index_activeESTA[i - 1]].left;
        $("tr")[i].children[8].innerHTML =
          activeESTA[index_activeESTA[i - 1]].right;

        // single radio buttons
        for (let n = 1; n <= 7; n++) {
          $("tr")[i].children[n].innerHTML = `
                <label style=\"height: 100%; padding: 5px 0\">
                  <input type=\"radio\" name=\"${itemName}\" value=\"${n}\" required=\"\">  
                </label>
              `;
        }
        // background colour
        if (i % 2 == 0) {
          $("tr")[i].style.backgroundColor = "#e9e9e9";
        }
      }

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

      // console.log("Component run");
      // save index values of ESTA:
      // study.options.datastore.set("index_ESTA", index_ESTA);
    },
    commit: () => {
      // save paradata
      let numberitems = document.querySelectorAll("tbody tr").length;
      paracountclicks -= numberitems;
      study.options.datastore.set("para_countclicks", paracountclicks);
      study.options.datastore.set(
        "para_ET_tech",
        EthicTheories[index_EthicTheories[GlobalCounter]].itemID
      );

      // compute last average value
      lastValue = $("#tablerandom input[type='radio']:checked");
      var vec_values = [];
      for (let i = 0; i < lastValue.length; i++) {
        vec_values.push(Number(lastValue[i].value));
      }
      var average = vec_values.reduce((a, b) => a + b, 0) / vec_values.length;
      lastValue = average;
      console.log("average - lastValue: ", lastValue);

      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";

      // save data at 3th and 7th round
      if (GlobalCounter == 5) {
        if (typeof jatos.jQuery === "function") {
          // If JATOS is available, send data there
          var resultJson = study.options.datastore.exportJson();
          console.log("result data sent to JATOS x time");
          jatos
            .submitResultData(resultJson)
            .then(() => console.log("success"))
            .catch(() => console.log("error"));
        }
      }
    },
  },
});

const SequenceInner = new lab.flow.Sequence({
  title: "SequenceInner",
  content: [
    // general info
    ESTAgeninfo_htmlForm,
    // ESTA
    ESTAtheorydefinition,
    ESTAscale,
  ],
});

const ESTALoopComponent = new lab.flow.Loop({
  template: SequenceInner,
  templateParameters: [
    {
      notneeded: 0,
    },
  ],
  sample: {
    mode: "draw-replace",
    n: "6",
  },
  indexParameter: "counter_inner",
});