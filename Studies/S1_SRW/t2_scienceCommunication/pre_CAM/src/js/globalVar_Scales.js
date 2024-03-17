/*
Use the modern version of the Fisher–Yates shuffle algorithm:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
*/
function shuffle(queslist) {
  let array_emp = [];
  for (var i = 0; i < queslist.ques.length; i++) {
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

function createitems(queslist, quesindex) {
  let quesitems = [];
  for (i = 0; i < queslist.ques.length; i++) {
    let tmp_ques = queslist.ques[quesindex[i]];
    let tmp_label = queslist.scale[quesindex[i]];

    quesitems.push({
      label: tmp_ques,
      coding: tmp_label,
    });
  }
  return quesitems;
}



/* items Heerink 2010 */
let HeerinkList = {
  ques: ["Wenn ich den Roboter benutzen sollte, hätte ich Angst, Fehler damit zu machen.", "Wenn ich einen Roboter beutzen sollte, hätte ich Angst etwas kaputt zu machen.", "Ich finde den Roboter gruselig.", "Ich finde den Roboter einschüchternd.", "Ich denke es ist eine gute Idee, den Roboter zu verwenden.", "Der Roboter würde das Leben Interessanter machen.", "Es ist gut, einen Nutzen aus dem Roboter zu ziehen."],
  scale: ["1anx", "2anx", "3anx", "4anx", "1att", "2att", "3att"]
};

var index_HeerinkList = shuffle(HeerinkList);
console.log("HeerinkList: ", HeerinkList);
console.log("HeerinkList index: ", index_HeerinkList);

var items_Heerink = createitems(HeerinkList, index_HeerinkList);
console.log(items_Heerink.slice(0, 4));




/* items Koverola 2022 */
let KoverolaList = {
  ques: [
    "Roboter sind notwendig, da sie Jobs ausführen können, welche zu schwer oder gefährlich für Menschen sind.",
    "Roboter können das Leben einfacher machen.",
    "Die Zuweisung von Routineaufgaben an Roboter ermöglicht es den Menschen, bedeutungsvollere Aufgaben zu erledigen.",
    "Gefährliche Aufgaben sollten primär Robotern übertragen werden.", 
    "Roboter sind eine gute Sache für die Gesellschaft, da sie Menschen helfen.",],
  scale: ["1sp", "2sp", "3sp", "4sp", "5sp"]
};

var index_KoverolaList = shuffle(KoverolaList);
console.log("KoverolaList: ", KoverolaList);
console.log("KoverolaList index: ", index_KoverolaList);

var items_Koverola = createitems(KoverolaList, index_KoverolaList);
console.log(items_Koverola.slice(0, 4));
