/* 
Affective Imagery: 
*/
const AffectiveImageryTechnology = "Klimawandel";
var boolSkipAffectImg = undefined;

const AffectiveImageryInst_htmlForm = new lab.html.Form({
  title: "AffectiveImageryInstruction",
  content: textObj.AffectiveImageryInst,
  messageHandlers: {
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const AffectiveImagery_htmlForm = new lab.html.Form({
  title: "AffectiveImagery",
  content: textObj.AffectiveImagery,
  messageHandlers: {
    run: () => {
      var timesClicked = 1;
      const placeholderLabel = ["zweite", "dritte", "vierte", "fünfte"];

      $(function () {
        $("#skipResponse").hide();
        $("#finalResponse").hide();

        // restrict keydown event to affectiveImageryForm
        $("#affectiveImageryForm").keydown(function (e) {
          if (e.keyCode == 13) {
            // Enter key
            if (timesClicked <= 4) {
              $("#submitAssoButton").click();
              $(document).unbind("keypress");
              return false;
            }
            if (timesClicked == 5) {
              $("#finalResponse").click();
              return false;
            }
          }
        });

        //$(document).on('#finalResponse mouseout',".click", () => {
        $("#submitAssoButton").on("click", () => {
          // increase counter

          var currentElement = "#R" + timesClicked;
          var nextElement = "#R" + (timesClicked + 1);

          // only if letters entered continue
          if (
            document
              .querySelector(currentElement)
              .value.replace(/[^a-zA-Z]+/g, "").length > 0
          ) {
            // set skip to false:
            boolSkipAffectImg = false;

            $("#unknownResponse").hide();
            $("#skipResponse").show();

            // change placeholder
            document.querySelector(nextElement).placeholder =
              "Geben Sie Ihre " +
              placeholderLabel[timesClicked - 1] +
              " Assoziation ein";
            // set disabled to true or false
            document.querySelector(currentElement).disabled = true;
            document.querySelector(nextElement).disabled = false;

            // adjust prograss bar of affective imagery
            document.querySelector(".progress-bar-AffectiveImg").style.width =
              (timesClicked / 5) * 100 + "%";

            timesClicked++;

            // focus on next element
            $(nextElement).focus();

            if (timesClicked == 5) {
              $("#submitAssoButton").hide();
              $("#finalResponse").show();
            }
          } else {
            document.querySelector(currentElement).value = "";
            toastr.warning(
              "Klicken Sie auf die nächste Antwort oder auf Enter, wenn Sie ein Wort eingegeben haben (verwenden Sie Buchstaben)",
              "Bitte geben Sie mindestens ein Wort ein oder klicken Sie auf Unbekannt, wenn Sie das Wort nicht kennen",
              {
                closeButton: true,
                timeOut: 3000,
                positionClass: "toast-top-center",
                preventDuplicates: true,
              }
            );
          }
        });
      });
    },
    commit: () => {
      // progress bar
      numElementsCounter++;
      document.querySelector(".progress-bar").style.width =
        (numElementsCounter / numElements) * 100 + "%";
    },
  },
});

const AffectiveImageryAffect_htmlForm = new lab.html.Page({
  title: "AffectiveImageryAffect",
  tardy: true,
  skip: "${boolSkipAffectImg}",
  items: [
    {
      required: true,
      type: "likert",
      items: [
        {
          label: "${study.state.R1}",
          coding: "R1",
        },
        {
          label: "${study.state.R2}",
          coding: "R2",
        },
        {
          label: "${study.state.R3}",
          coding: "R3",
        },
        {
          label: "${study.state.R4}",
          coding: "R4",
        },
        {
          label: "${study.state.R5}",
          coding: "R5",
        },
      ],
      width: "7",
      anchors: [
        "sehr negativ",
        "negativ",
        "etwas negativ",
        "neutral",
        "etwas positiv",
        "positiv",
        "sehr positiv",
      ],      
      label: `Bitte geben Sie an, inwieweit Sie die von Ihnen genannten Überlegungen oder Eindrücke zu <strong>${AffectiveImageryTechnology}</strong> als positiv oder negativ empfinden:`,
      help: "Lesen Sie jeden Ihrer Überlegungen oder Eindrücke und markieren Sie dann die Antwortoption, die am ehesten zutrifft.",
      shuffle: true,
      name: "affImgAffect",
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

      // remove empty elements
      if ($(".page-item-table > tbody > tr > td")[32].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[4].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[24].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[3].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[16].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[2].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[8].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[1].remove();
      }
      if ($(".page-item-table > tbody > tr > td")[0].innerText.length == 0) {
        $(".page-item-table > tbody > tr")[0].remove();
      }

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
  },
  commit: () => {
    // progress bar
    numElementsCounter++;
    document.querySelector(".progress-bar").style.width =
      (numElementsCounter / numElements) * 100 + "%";
  },
});
