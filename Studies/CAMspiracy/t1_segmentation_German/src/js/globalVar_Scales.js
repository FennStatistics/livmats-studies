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


/* items Bruder 2013 */
let BruderList = {
  ques: ["... many very important things happen in the world, which the public is never informed about.",
    "... politicians usually do not tell us the true motives for their decisions.",
    "... government agencies closely monitor all citizens.",
    "... events which superficially seem to lack a connection are often the result of secret activities.",
    "... there are secret organizations that greatly influence political decisions."],
  scale: ["01", "02", "03", "04", "05"]
};

var index_BruderList = shuffle(BruderList);
console.log("BruderList: ", BruderList);
console.log("BrothertonList index: ", index_BruderList);

var items_Bruder = createitems(BruderList, index_BruderList);
console.log(items_Bruder.slice(0, 4));


/* items Tobler 2012 */
let ToblerList = {
  ques: ["We must protect the climate’s delicate equilibrium.", "Climate protection is important for our future.", "I worry about the climate’s state.", "Climate change has severe consequences for humans and nature.", "Climate protection measures are determined by a few powerful persons; as a single citizen, I have no effect.", "With my behavior, I cannot influence the climate, as, in fact, it rests in the hands of the industry.", "As an ordinary citizen, I can influence governmental decisions regarding climate protection.", "I feel able to contribute to climate protection.", "If I tried to behave in a climate-friendly way, that would surely have a positive effect on the climate.", "Climate change and its consequences are being exaggerated in the media.", "Climate change is a racket.", "As long as meteorologists are not even able to accurately forecast weather, climate cannot be reliably predicted either.", "There are larger problems than climate protection.", "I do not feel threatened by climate change.", "The impacts of climate change are unpredictable; thus, my climate friendly behavior is futile.", "Climate protection needlessly impedes economic growth."],
  scale: ["01ccc", "02ccc", "03ccc", "04ccc", "01fop", "02fop", "03fopr", "04fopr", "05fopr", "01s", "02s", "03s", "04s", "05s", "06s", "07s"]
};

var index_ToblerList = shuffle(ToblerList);
console.log("ToblerList: ", ToblerList);
console.log("ToblerList index: ", index_ToblerList);

var items_Tobler = createitems(ToblerList, index_ToblerList);
console.log(items_Tobler.slice(0, 4));

/* items de Graaf 2023 */
let GraafList = {
  ques: ["I am hesitant to believe climate change scientists tell the whole story.",
  "The climate change we are observing is just a natural process.",
  "I think climate change is a serious problem.",
  "There is not much we can do that will help solve environmental problems.",
  "I believe that most of the concerns about environmental problems have been exaggerated.",
  "Mankind is largely responsible for global warming.",
  "I believe that most claims about climate change are true.",
  "It is a waste of work to solve environmental problems.",
  "I am uncertain that human activities cause global warming.",
  "Human behavior has little effect on stopping global warming.",
  "I am uncertain that global warming is actually occurring.",
  "I am concerned about the consequences of climate change."],
  scale: ["01ts","01as","01isr","01rs","02is","02asr","02tsr","02rs","03as","03rs","03ts","03isr"]
};

var index_GraafList = shuffle(GraafList);
console.log("GraafList: ", GraafList);
console.log("GraafList index: ", index_GraafList);

var items_Graaf = createitems(GraafList, index_GraafList);
console.log(items_Graaf.slice(0, 4));