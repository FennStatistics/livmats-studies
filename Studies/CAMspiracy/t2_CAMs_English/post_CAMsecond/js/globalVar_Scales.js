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
/* items van der Linden - Biospheric Values 2015 */
let vanLindenBiosphericList = {
  ques: ["Respecting the Earth (harmony with other species)",
  "Protecting the Environment (preserving nature)",
  "Preventing Pollution (protecting natural resources)",
  "Unity with Nature (fitting into nature)"],
  scale: ["1biospheric","2biospheric","3biospheric","4biospheric"]
};

var index_vanLindenBiosphericList = shuffle(vanLindenBiosphericList);
console.log("vanLindenBiosphericList: ", vanLindenBiosphericList);
console.log("vanLindenBiosphericList index: ", index_vanLindenBiosphericList);

var items_vanLindenBiospheric = createitems(vanLindenBiosphericList, index_vanLindenBiosphericList);
console.log(items_vanLindenBiospheric.slice(0, 4));


/* items van der Linden - Risk Perception 2015 */
let vanLindenRiskList = {
  ques: ["How serious of a threat do you think that climate change is to the natural environment?",
  "How serious would you rate current impacts of climate change around the world?",
  "How serious of a threat do you believe that climate change is, to you personally?",
  "How serious would you estimate the impacts of climate change for the United States?"],
  scale: ["1riskProb","2riskProb","3riskProb","4riskProb"]
};

var index_vanLindenRiskList = shuffle(vanLindenRiskList);
console.log("vanLindenRiskList: ", vanLindenRiskList);
console.log("vanLindenRiskList index: ", index_vanLindenRiskList);

var items_vanLindenRisk = createitems(vanLindenRiskList, index_vanLindenRiskList);
console.log(items_vanLindenRisk.slice(0, 4));

/* policy items */
let policyItemsList = {
  ques: ["Expand public transport (buses, trams, trains)","Ban the sale of diesel and petrol-engine cars.","Increase subsidies for alternatives to flying.","Increase or introduce taxes on air travel.","Increase subsidies for renewable energy projects (e.g., wind and solar energy).","Increasing the price of electricity consumption during peak times.","Increase or introduce taxes on red meat (e.g., beef, lamb, veal).","Increase subsidies for food products with low greenhouse gas emissions (e.g., fruit, vegetables, legumes, cereals)."],
  scale: ["1","2","3","4","5","6","7","8"]
};

var index_policyItemsList = shuffle(policyItemsList);
console.log("policyItemsList: ", policyItemsList);
console.log("policyItemsList index: ", index_policyItemsList);

var items_policyItems = createitems(policyItemsList, index_policyItemsList);
console.log(items_policyItems.slice(0, 4));