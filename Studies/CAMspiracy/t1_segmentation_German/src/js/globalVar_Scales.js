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
  ques: ["Die Regierung ist an Ermordungen unschuldiger Bürger und/oder bekannter Persönlichkeiten beteiligt, und hält diesen Sachverhalt geheim.", "Die Macht von Staatsoberhäuptern ist der von kleinen anonymen Gruppen, die tatsächlich die Weltpolitik kontrollieren, untergeordnet.", "Geheime Organisationen kommunizieren mit Außerirdischen, aber halten diese Tatsache vor der Öffentlichkeit zurück.", "Die Verbreitung bestimmter Viren und/oder Krankheiten ist das Ergebnis der vorsätzlichen, verdeckten Aktionen einer Organisation.", "Gruppen von Wissenschaftlern manipulieren, erfinden oder halten Beweise zurück, um die Öffentlichkeit zu täuschen.", "Die Regierung erlaubt oder verübt selber terroristische Handlungen auf eigenem Grund und Boden und verschleiert dabei die eigene Beteiligung.", "Ein kleiner, geheimer Personenkreis ist für das Treffen aller wichtigen Entscheidungen verantwortlich, wie z.B. in den Krieg zu ziehen.", "Beweise für Kontakt mit Außerirdischen werden vor der Öffentlichkeit zurückgehalten.", "Technologien, die im Stande sind Gedanken zu kontrollieren, werden an Menschen ohne deren Wissen eingesetzt.", "Neue und fortschrittliche Technologien, die der gegenwärtigen Industrie schaden würden, werden zurückgehalten.", "Die Regierung benutzt das Volk als Sündenbock, um die eigene Beteiligung an kriminellen Aktivitäten zu verbergen.", "Gewisse bedeutende Ereignisse sind das Resultat der Aktivitäten einer kleinen Gruppe, die insgeheim das Weltgeschehen manipuliert.", "Einige UFO-Sichtungen und -gerüchte werden geplant oder inszeniert, um die Öffentlichkeit von tatsächlich stattfindendem Kontakt mit Außerirdischen abzulenken.", "Experimente, die mit neuen Medikamenten oder Technologien verbunden sind, werden regelmäßig an der Öffentlichkeit ohne deren Wissen oder Einverständnis durchgeführt.", "Ein Großteil wichtiger Informationen wird aus Eigennutz absichtlich vor der Öffentlichkeit geheim gehalten."],
  scale: ["01gm", "01mg", "01et", "01pw", "01ci", "02gm", "02mg", "02et", "02pw", "02ci", "03gm", "03mg", "03et", "03pw", "03ci"]
};

var index_BrothertonList = shuffle(BrothertonList);
console.log("BrothertonList: ", BrothertonList);
console.log("BrothertonList index: ", index_BrothertonList);

var items_Brotherton = createitems(BrothertonList, index_BrothertonList);
console.log(items_Brotherton.slice(0, 4));


/* items Bruder 2013 */
let BruderList = {
  ques: ["...es geschehen viele sehr wichtige Dinge in der Welt, über die die Öffentlichkeit nie informiert wird.", 
  "...Politiker geben uns normalerweise keine Auskunft über die wahren Motive ihrer Entscheidungen.", 
  "...Regierungsbehörden überwachen alle Bürger genau.", 
  "...Ereignisse, die auf den ersten Blick nicht miteinander in Verbindung zu stehen scheinen, sind oft das Ergebnis geheimer Aktivitäten.", 
  "...es gibt geheime Organisationen, die großen Einfluss auf politische Entscheidungen haben."],
  scale: ["01", "02", "03", "04", "05"]
};

var index_BruderList = shuffle(BruderList);
console.log("BruderList: ", BruderList);
console.log("BrothertonList index: ", index_BruderList);

var items_Bruder = createitems(BruderList, index_BruderList);
console.log(items_Bruder.slice(0, 4));


/* items Tobler 2012 */
let ToblerList = {
  ques: ["Wir müssen das empfindliche Gleichgewicht des Klimas schützen.",
  "Klimaschutz ist wichtig für unsere Zukunft.","Ich mache mir Sorgen über den Zustand des Klimas.",
  "Der Klimawandel hat schwerwiegende Folgen für Mensch und Natur.",
  "Klimaschutzmaßnahmen werden von wenigen mächtigen Personen bestimmt, ich als einzelner Bürger habe keinen Einfluss.",
  "Mit meinem Verhalten kann ich das Klima nicht beeinflussen, denn es liegt in den Händen der Industrie.",
  "Als normaler Bürger kann ich die Entscheidungen der Regierung zum Klimaschutz beeinflussen.",
  "Ich fühle mich in der Lage, einen Beitrag zum Klimaschutz zu leisten.",
  "Wenn ich versuchen würde, mich klimafreundlich zu verhalten, würde sich das sicher positiv auf das Klima auswirken.",
  "Der Klimawandel und seine Folgen werden in den Medien übertrieben dargestellt.","Der Klimawandel ist eine Masche.",
  "Solange Meteorologen nicht einmal in der Lage sind, das Wetter genau vorherzusagen, lässt sich auch das Klima nicht zuverlässig vorhersagen.",
  "Es gibt größere Probleme als Klimaschutz.","Ich fühle mich durch den Klimawandel nicht bedroht.",
  "Die Auswirkungen des Klimawandels sind unvorhersehbar; daher ist mein klimafreundliches Verhalten sinnlos.","Der Klimaschutz behindert unnötig das Wirtschaftswachstum."],
  scale: ["01ccc", "02ccc", "03ccc", "04ccc", "01fop", "02fop", "03fopr", "04fopr", "05fopr", "01s", "02s", "03s", "04s", "05s", "06s", "07s"]
};

var index_ToblerList = shuffle(ToblerList);
console.log("ToblerList: ", ToblerList);
console.log("ToblerList index: ", index_ToblerList);

var items_Tobler = createitems(ToblerList, index_ToblerList);
console.log(items_Tobler.slice(0, 4));

/* items de Graaf 2023 */
let GraafList = {
  ques: ["Ich bin nicht sicher, ob Klimawissenschaftler ihr Wissen vollständig mit der Öffentlichkeit teilen.",
  "Der beobachtete Klimawandel ist ausschließlich ein natürlicher Prozess.",
  "Ich denke, der Klimawandel ist ein ernstes Problem.",
  "Die Menschheit kann nicht viel tun, um die Umweltprobleme zu lösen.",
  "Ich glaube, dass die meisten Umweltprobleme übertrieben werden.",
  "Die Menschheit ist maßgeblich für die globale Erwärmung verantwortlich.",
  "Ich glaube, dass die meisten Behauptungen über den Klimawandel wahr sind.",
  "Der Versuch, Umweltprobleme zu lösen, ist reine Zeitverschwendung.",
  "Ich bezweifle, dass menschliches Handeln die Erderwärmung verursacht haben.",
  "Menschliches Handeln hat wenig Einfluss auf die Erderwärmung.",
  "Ich bin mir nicht sicher, ob die Erderwärmung tatsächlich stattfindet.",
  "Ich mache mir über die Folgen des Klimawandels Sorgen."],
  scale: ["01ts", "01as", "01isr", "01rs", "02is", "02asr", "02tsr", "02rs", "03as", "03rs", "03ts", "03isr"]
};

var index_GraafList = shuffle(GraafList);
console.log("GraafList: ", GraafList);
console.log("GraafList index: ", index_GraafList);

var items_Graaf = createitems(GraafList, index_GraafList);
console.log(items_Graaf.slice(0, 4));