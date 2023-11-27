/* default CAM which will be redrawn if CAM is deleted
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

const ConceptsCAM = ["positive aspects", "negative aspects"];
const index_ConceptsCAM = shuffle(ConceptsCAM);
console.log("index_ConceptsCAM:", index_ConceptsCAM);
*/

function defaultCAM() {
  /* */
    CAM.addElement(new NodeCAM(0, "Covid-19", {
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

CAM.draw();
}