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



/* items Brotherton 2013 */
let BrothertonList = {
  ques: ["The government is involved in the murder of innocent citizens and/or well-known public figures, and keeps this a secret. ", "The power held by heads of state is second to that of small unknown groups who really control world politics.", "Secret organizations communicate with extraterrestrials, but keep this fact from the public.", "The spread of certain viruses and/or diseases is the result of the deliberate, concealed efforts of some organization.", "Groups of scientists manipulate, fabricate, or suppress evidence in order to deceive the public.", "The government permits or perpetrates acts of terrorism on its own soil, disguising its involvement.", "A small, secret group of people is responsible for making all major world decisions, such as going to war.", "Evidence of alien contact is being concealed from the public.", "Technology with mind-control capacities is used on people without their knowledge.", "New and advanced technology which would harm current industry is being suppressed.", "The government uses people as patsies to hide its involvement in criminal activity.", "Certain significant events have been the result of the activity of a small group who secretly manipulate world events.", "Some UFO sightings and rumors are planned or staged in order to distract the public from real alien contact.", "Experiments involving new drugs or technologies are routinely carried out on the public without their knowledge or consent.", "A lot of important information is deliberately concealed from the public out of self-interest."],
  scale: ["01gm", "01mg", "01et", "01pw", "01ci", "02gm", "02mg", "02et", "02pw", "02ci", "03gm", "03mg", "03et", "03pw", "03ci"]
};

var index_BrothertonList = shuffle(BrothertonList);
console.log("BrothertonList: ", BrothertonList);
console.log("BrothertonList index: ", index_BrothertonList);

var items_Brotherton = createitems(BrothertonList, index_BrothertonList);
console.log(items_Brotherton.slice(0, 4));