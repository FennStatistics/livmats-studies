/*
Use the modern version of the Fisher–Yates shuffle algorithm:
https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
*/
function shuffle(queslist) {
  let array_emp = []
  for (var i = 0; i < queslist.ques.length; i++) {
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

function createitems(queslist, quesindex) {
  let quesitems = [];
  for (i = 0; i < queslist.ques.length; i++) {
    let tmp_ques = queslist.ques[quesindex[i]];
    let tmp_label = queslist.scale[quesindex[i]];

    quesitems.push({
      label: tmp_ques,
      coding: tmp_label,
    })

  }
  return quesitems;
}



