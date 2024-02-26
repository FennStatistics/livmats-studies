/* default CAM which will be redrawn if CAM is deleted*/
function shuffle(queslist) {
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



var wordlist = [
  "aktive Formänderung durch Umwelteinwirkung",         // adaptive
  "aktive Verhaltensänderung durch Umwelteinwirkung",   // adaptive
  "autonom",                    // autonomous
  //"bio-inspiriert",             // bio-inspired
  "bioinspiriert",      // biologically inspired
  //"veränderbar",                // changeable
  //"veränderbare Form",          // changeable shape
  "haltbar",                    // durable
  "ökologisch",                 // ecologically
  "elektronikfrei",             // electronic-free
  "energieautonom",             // energy autonomous
  "energieeffizient",           // energy-efficient
  "umweltfreundlich",           // environmentally friendly
  "intelligent",                // intelligent
  "lebensähnlich",              // life-like
  "wartungsfrei",               // maintenance-free
  "multifunktional",            // multifunctional

  "passive Formänderung durch Umwelteinwirkung",          // reactive
  "passive Verhaltensänderung durch Umwelteinwirkung",    // reactive
  
  "zuverlässig",                // reliable
  "widerstandsfähig",                  // resilient
  "reaktionsfähig",             // responsive
  "robust",                     // robust
  "selbstheilend",              // self-healing
  "selbstreparierend",          // self-repairing
  "Energie   speichernd",         // storing energy
  "nachhaltig",                 // sustainable
  "technologisch",              // technological
  //"vielseitig",                  // versatile

  "langlebig",                  // long-lasting

  "Energie   generierend",       // harvest energy
  "umweltschädlich",            // environmentally harmful
  "enthält Kunststoff",            // contains plastic;	https://utopia.de/ratgeber/ist-plastik-gleich-kunststoff-das-ist-der-unterschied/ 
  "leicht zerstörbar",          // easily destructible
  "wartungsintensiv",           // maintenance-intensive
  "Insekten ähnlich"            // insect-like
];





var coordinatesTop = [{ x: 100, y: 50 },
{ x: 220, y: 50 },
{ x: 340, y: 50 },
{ x: 460, y: 50 },
{ x: 580, y: 50 },
{ x: 700, y: 50 },
{ x: 820, y: 50 },
{ x: 940, y: 50 },
{ x: 1060, y: 50 },
{ x: 1180, y: 50 }];

var coordinatesBottom = [{ x: 100, y: 720 },
{ x: 220, y: 720 },
{ x: 340, y: 720 },
{ x: 460, y: 720 },
{ x: 580, y: 720 },
{ x: 700, y: 720 },
{ x: 820, y: 720 },
{ x: 940, y: 720 },
{ x: 1060, y: 720 },
{ x: 1180, y: 720 }];

var coordinatesLeft = [{ x: 80, y: 220 },
{ x: 80, y: 290 },
{ x: 80, y: 360 },
{ x: 80, y: 430 },
{ x: 80, y: 500 },
{ x: 80, y: 570 }];

var coordinatesRight = [{ x: 1200, y: 220 },
{ x: 1200, y: 290 },
{ x: 1200, y: 360 },
{ x: 1200, y: 430 },
{ x: 1200, y: 500 },
{ x: 1200, y: 570 }];


function defaultCAM() {
  CAM.addElement(new NodeCAM(0, "Akzeptanz eines neuen Materialsystems", {
    x: 650,
    y: 400
  }, false, false, false));

  var index_wordlist = shuffle(wordlist);
  console.log("index_wordlist:", index_wordlist);

  for (var i = 0; i < 10; i++) {
    CAM.addElement(new NodeCAM(0, wordlist[index_wordlist[0]], coordinatesTop[i], true, false, false));
    index_wordlist.shift();
  }

  for (var i = 0; i < 10; i++) {
    CAM.addElement(new NodeCAM(0, wordlist[index_wordlist[0]], coordinatesBottom[i], true, false, false));
    index_wordlist.shift();
  }

  for (var i = 0; i < 6; i++) {
    CAM.addElement(new NodeCAM(0, wordlist[index_wordlist[0]], coordinatesLeft[i], true, false, false));
    index_wordlist.shift();
  }

  for (var i = 0; i < 6; i++) {
    CAM.addElement(new NodeCAM(0, wordlist[index_wordlist[0]], coordinatesRight[i], true, false, false));
    index_wordlist.shift();
  }


  /*
  function defaultCAM() {
    CAM.addElement(new NodeCAM(0, "Akzeptanz eines neuen Materialsystems", {
      x: 650,
      y: 400
    }, false, false, false));
  
    CAM.addElement(new NodeCAM(3, "positive aspects", {
      x: 450,
      y: 400
    }, false, false, false));
  
  
    CAM.addElement(new NodeCAM(-2, "negative aspects", {
      x: 850,
      y: 400
    }, false, false, false));
  
  
    var connector = new ConnectorCAM();
    connector.establishConnection(CAM.nodes[0], CAM.nodes[1], IncreaseSliderIntensity, true);
    CAM.addElement(connector);
    CAM.connectors[0].isDeletable = false;
  
    var connector = new ConnectorCAM();
    connector.establishConnection(CAM.nodes[0], CAM.nodes[2], IncreaseSliderIntensity, true);
    CAM.addElement(connector);
    CAM.connectors[0].isDeletable = false;
  */
  CAM.draw();
}