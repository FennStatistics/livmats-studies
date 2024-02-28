const textObj = {
   // introduction phase
   greetings: `
   <header>
   <div class="row">
   <div class="column2">
   <h2>Vielen Dank für Ihre Teilnahme an einer Studie der Allgemeinen Psychologie der Universität Freiburg!</h2>
 </div>
   <div class="column">
   <img src="pre_CAM/static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <i> Wichtiger Hinweis im Voraus: Sie können den Text und die Bilder der Studie jederzeit vergrößern oder verkleinern, damit Sie diese besser lesen können: </i>
       <ul>
           <li>
           Windows: Halten Sie die <kbd>Strg</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
           </li>
           <li>
               Mac: Halten Sie die <kbd>command</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
               </li>
       </ul>
       <br>
       <br>
       <section>
       Mit unserer Forschung zielen wir darauf ab, ein besseres Verständnis des menschlichen Verhaltens und mentaler Prozesse zu erlangen. 
       Zu diesem Zweck wird in der folgenden Studie Ihr Verhalten gemessen (z.B. Entscheidungen, Reaktionszeiten, ob Sie den Vollbildmodus verlassen haben).
       </section>
       <br>
       <section>
       Die Dauer der Studie beträgt <b>etwa 35 Minuten</b>. Unten sehen Sie eine Fortschrittsleiste, die sich zunehmend grüner färbt und Ihren Fortschritt in der Studie symbolisiert. 
       Bitte benutzen Sie für die Studie einen <b>Computer oder Laptop mit Tastatur</b>. 
       Bitte stellen Sie sicher, dass Sie an der Studie ungestört teilnehmen können.
       </section>
       <br>
       <section>
       Das Ziel der Studie ist es, Ihre Einstellung und Gefühle zu zentrale Eigenschaften von neuen Materialsystemen zu messen. Dafür setzen wir eine Methode ein, die "Cognitive-Affective Mapping" (CAM-Methode) heißt und bei der Sie eine Art Mind-Map zeichnen werden. 
       Auf den nächsten Seiten finden Sie weitere Informationen zum genauen Ablauf der Studie. Zunächst möchten wir Sie bitten, auf der folgenden Seite der informierten Einwilligung zuzustimmen.       
       </section>
   </div>
 </main>
 
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   Um mit der Studie fortzufahren, drücken Sie bitte auf &nbsp;
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informCon: `
   <header>
   <h2>Aufgeklärte Einwilligung</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <section>
       Im Folgenden erhalten Sie Informationen über Ihre Teilnahme an der Studie. Bitte lesen Sie diese sorgfältig durch:
       </section>
       <br>
       <section>
       Vielen Dank, dass Sie in Erwägung ziehen, an unserer Online-Studie teilzunehmen. Wir möchten betonen, dass Ihre Beteiligung vollkommen freiwillig ist und Sie 
       jederzeit ohne Angabe von Gründen Ihre Einwilligung zurückziehen können.
       </section>
       <br>
       <section>
       Es ist wichtig für Sie zu wissen, dass wir während dieser Studie keine persönlichen Daten erfassen. 
       Folglich werden die Daten nach Abschluss der Datenerhebungsphase vollständig anonymisiert sein, so dass es unmöglich ist, irgendwelche Daten mit Ihnen in Verbindung zu bringen.
       </section>
       <br>
       <section>
       Trotz der Anonymität bitten wir Sie freundlich um Ihre volle Konzentration und Aufmerksamkeit während der Teilnahme an der Studie. Dies trägt wesentlich zur Qualität und Zuverlässigkeit unserer Forschung bei.
       </section>
       <br>
       <section>
       Abschließend planen wir, die Ergebnisse und Daten aus dieser Studie in zukünftigen Veröffentlichungen zu verwenden. Seien Sie jedoch versichert, dass alle veröffentlichten Materialien in anonymisierter Form vorliegen werden. 
       Wenn Sie jetzt oder nach dem Experiment Fragen haben, kontaktieren Sie bitte Julius Fenn 
       (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>)
        oder Prof. Andrea Kiesel (<a href="mailto:kiesel@psychologie.uni-freiburg.de">kiesel@psychologie.uni-freiburg.de</a>).
       </section>
       <br>
       <br>
       <br>
       <form id="page-form" style="display: block;" autocomplete="off">
           <!-- BEGIN multiple choice -->
           <div class="page-item page-item-radio" id="page-item-ques_dummycam">
               <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
               Bitte wählen Sie eine der folgenden Optionen:
               </p>
               <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">
               Die Ablehnung der aufgeklärten Einwilligung führt zur Beendigung der Studie.
               </p>
 
               <table class="table-plain page-item-table">
                   <colgroup>
                       <col style="width: 7.5%">
                       <col style="width: 92.5%">
                   </colgroup>
                   <tbody>
                       <!--ans1-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="1" id="dummy_informedconsent"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent" class="text-left">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong>zustimme</strong>.
                               </label>
                           </td>
                       </tr>
                       <!--ans2-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="0" id="dummy_informedconsent2"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent2" class="text-left">
                               Hiermit bestätige ich, dass ich die oben beschriebenen Teilnehmerinformationen verstanden habe und den oben genannten Teilnahmebedingungen <strong>nicht zustimme</strong>.
                               </label>
                           </td>
                       </tr>
 
                   </tbody>
               </table>
           </div>
           <!-- END multiple choice -->
       </form>
   </div>
 </main>
 
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
 </footer>
   `,
   informConNo: `
   <header></header>
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
   <section>
       Sie haben der aufgeklärten Einwilligung nicht zugestimmt. Leider bedeutet das, dass die Studie für Sie beendet ist. Sie können
       jetzt den Bildschirm schließen. Drücken Sie die <kbd>Esc</kbd>-Taste, um den Vollbildmodus zu beenden.
   </section>
   </div>
   </main>   
   `,
   exclusionCriteria: `
   <header>
   <h2>Vielen Dank für die Zustimmung zu den Teilnahmebedingungen.</h2>
</header>

<main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <section>
       Bevor wir starten, möchten wir Sie bitten, sich mit den nachfolgenden Regeln für die Teilnahme an der Online-Studie vertraut zu machen:
       </section>
       <br>
       <ul>
           <li>Bitte beantworten Sie die Studie konzentriert.</li>
           <li>Verlassen Sie den Browserbildschirm der Studie nicht, es sei denn, Sie werden ausdrücklich dazu aufgefordert.</li>
           <li>Bitte lesen Sie alle Instruktionen sorgfältig durch und halten Sie sich an diese.</li>
       </ul>
<br>
<br>
Uns ist die Qualität unserer Umfragedaten wichtig. Um ein möglichst genaues Bild Ihrer Meinung zu erhalten, ist es wichtig, dass Sie alle Fragen in dieser Umfrage sorgfältig beantworten.
<br>
<form id="page-form">
<!-- siehe: https://www.qualtrics.com/blog/attention-checks-and-data-quality/ -->
<!-- Mehrfachauswahl + Textfeld -->
<div class="page-item page-item-radio" id="page-item-ques_dummycam">
<p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
Verpflichten Sie sich, in dieser Umfrage wohlüberlegte Antworten zu geben?
</p>
<p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
</p>

<table class="table-plain page-item-table">
  <colgroup>
    <col style="width: 7.5%">
    <col style="width: 92.5%">
  </colgroup>
<tbody>
<!--ans1-->
<tr>
<td>
  <input type="radio" name="commCheck" value="0" id="commCheck" required="">
</td>
<td>
  <label for="commCheck" class="text-left">
  Ich kann weder das eine noch das andere versprechen
  </label>
</td>
</tr>
<!--ans2-->
<tr>
<td>
  <input type="radio" name="commCheck" value="1" id="commCheck2" required="">
</td>
<td>
  <label for="commCheck2" class="text-left">
  Ja, werde ich
     </label>
</td>
</tr>
<tr>
<td>
  <input type="radio" name="commCheck" value="2" id="commCheck3" required="">
</td>
<td>
  <label for="commCheck3" class="text-left">
  Nein, werde ich nicht
     </label>
</td>
</tr>
</tbody>
</table>
</div>
<!-- ENDE Mehrfachauswahl + Textfeld -->


   </div>
</main>

</form>

<footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
       Weiter &rarr;
   </button>
</footer>
   `,



   // !!! adjust if using START
   attentionCheck: `
   <header>
     <h2>Before starting the study we would like to get to know you:</h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
 <section>
 Most modern theories of decision-making recognize the fact that decisions do not take place in a vacuum. Individual preferences and knowledge, along with situational variables, 
 can greatly impact the decision process. To facilitate our research on attitudes towards emerging technologies, we are interested in knowing certain factors about you, 
 the decision-maker. Specifically, we are interested in whether you take the time to read the instructions; if not, then some of the specific characteristics of 
 the described emerging technologies can be overlooked. So, to demonstrate that you have read the instructions, please ignore the sports items below and instead 
 select the box marked "other" and type "I read the instructions" in the text box, then click continue. Thank you very much.
 </section>
 <br>
 <br>
 <section >
 <b>Which of these activities do you engage in regularly?</b>
 <br>
 Please check all that apply.
 <br>
 <fieldset id="checkArray"  style="text-align: left; padding: 5px;">
   <div>
     <input type="checkbox" id="attCheck_Skiing" name="attCheck_Skiing">
     <label for="attCheck_Skiing">Skiing</label>
   </div>
   <div>
     <input type="checkbox" id="attCheck_Swimming" name="attCheck_Swimming">
     <label for="attCheck_Swimming">Swimming</label>
   </div>
   <div>
   <input type="checkbox" id="attCheck_Soccer" name="attCheck_Soccer">
   <label for="attCheck_Soccer">Soccer</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Tennis" name="attCheck_Tennis">
 <label for="attCheck_Tennis">Tennis</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Snowboarding" name="attCheck_Snowboarding">
 <label for="attCheck_Snowboarding">Snowboarding</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Basketball" name="attCheck_Basketball">
 <label for="attCheck_Basketball">Basketball</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Jogging" name="attCheck_Jogging">
 <label for="attCheck_Jogging">Jogging</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Cycling" name="attCheck_Cycling">
 <label for="attCheck_Cycling">Cycling</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Pingpong" name="attCheck_Pingpong">
 <label for="attCheck_Pingpong">Ping-pong</label>
 </div>
 <div>
 <input type="checkbox" id="attCheck_Other" name="attCheck_Other">
 <label for="attCheck_Other">Other</label>
 <input type="text" id="attCheck_OtherText" name="attCheck_OtherText"></input>
 </fieldset>
 </div>
 </section>
 <br>
   </div>
 </main>
 
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
     <button id="continue" form="page-form" onclick="return continueornot();">
     Continue &rarr;
     </button>
   </footer>
   `,
      // !!! adjust if using END
   setupStudy: `
   <header>
   <h2>Übersicht der Studie:</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
     <section>
       Die Studie ist in 3 Teile gegliedert:
     </section>
     <br>
     <table>
       <tr>
       <td>1) Lesen Sie die Anweisungen zum Zeichnen einer <i>Mind-Map</i>.</td>
       </tr>
       <tr>
       <td>2) Lesen Sie einen Text über Ihre genaue Arbeitsanweisung.</td>
     </tr>
       <tr>
       <td>3) Zeichnen Sie eine <i>Mind-Map</i> zu Ihren Einstellung und Gefühlen zu zentrale Eigenschaften von neuen Materialsystemen.</td>
       </tr>
       <tr>
         <td>4) Beantworten Sie abschließend mehrere Fragen.</td>
       </tr>
     </table>
     <br>
     <section>
       Die einzelnen Abschnitte werden nachfolgend erklärt. Wir danken Ihnen nochmals für Ihre Teilnahme an der Studie. Wir ermutigen Sie, alle folgenden Fragen ehrlich zu beantworten.
     </section>
   </div>
 </main>
 <form id="page-form"> 
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   <button id="continue" type="submit" form="page-form">
     Weiter &rarr;
   </button>
 </footer>
 
   `,
   explanationCAM: `
   <header>
     <h2>
     Bitte lesen Sie den folgenden Text sorgfältig durch. Anschließend bitten wir Sie, eine <i>Mind-Map</i> zu zentrale Eigenschaften von neuen Materialsystemen anzuordnen.
     </h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
    <i>Anmerkung: eventuell müssen Sie nach unten scrollen, um den kompletten Text zu lesen.</i>
   <br>
   <br>
   <section>
   Wir möchten Ihre Einstellungen und Gefühle zu zentrale Eigenschaften von neuen Materialsystemen herausfinden. Zu diesem Zweck haben wir Ihnen in der <i>Mind-Map</i> den zentralen Begriff "Akzeptanz eines neuen Materialsystems" vorgegeben. 
   Weiter finden Sie unten und oben in der <i>Mind-Map</i> weitere Begriffe, die sie mit dem zentralen Begriff in Verbindung setzen sollen. Bei allen vorgegebenen Begriffen können Kommentare hinzugefügt werden und 
   die emotionale Bewertung geändert werden, nicht aber der Text (Inhalt). Die vorgegebene <i>Mind-Map</i> sieht von der Struktur so aus:

      </section>
 <br>
      <img alt="ERROR - picture is not shown. Please write an e-mail to the study director that an error has occurred." class="centerIMG"
 src="pre_CAM/static/CAMscenariotext/defaultCAM.JPG">
 <br>
 <br>
 <b>Wichtig:</b> Durch <i>Ändern der emotionalen Bewertung der vorgegebenen Konzepte</i> können Sie angeben, ob Sie diese insgesamt als negativ, neutral, ambivalent oder positiv wahrnehmen.
 Sie können <i>das Kommentarfeld verwenden</i>, um weitere Erläuterungen zu Ihren angeordneten Konzepten zu schreiben. 
 Bitte versuchen Sie möglichst <b>genau zu überlegen, welche zentrale Eigenschaften neue Materialsysteme haben sollten, damit diese für Sie persönlich eine 
 höhere Akzeptanz erfahren</b>.
   </div>
 </main>
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
   <div class="w-l text-justify">
   Drücken Sie nicht auf "Weiter", bevor Sie den Text sorgfältig gelesen haben. Der "Weiter"-Knopf ist für 15 Sekunden gesperrt.
   </div>
   &nbsp; <button id="continue" type="submit" form="page-form">
   Weiter &rarr;
 </button>
 </footer>
   `,
   basalAttributes: `
   <header>
     <h2>
     Bevor Sie eine <i>Mind-Map</i> zu zentrale Eigenschaften von neuen Materialsystemen anordnen, bitten wir Sie die einzelnen möglichen Eigenschaften zu lesen.
     </h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
    <i>Anmerkung: eventuell müssen Sie nach unten scrollen, um den kompletten Text zu lesen.</i>
   <br>
   <br>
   <section>
   Bisherige Technologien bestanden aus Materialien (z.B. Keramik, Holz, Stein, Kunststoffe), die unflexibel waren und im Rahmen ihrer Nutzung feste, gleichbleibende Eigenschaften hatten. 
   Aktuelle Forschung beschäftigt sich damit neue, aus Materialsystemen bestehende Technologien zu entwickeln, die neuartige, nicht mehr nur statische, unveränderbare Eigenschaften haben können. 
   Mögliche Eigenschaften dieser finden Sie beispielsweise in der untenstehenden Liste. 
   Bitte versuchen Sie möglichst <b>genau zu überlegen, welche zentrale Eigenschaften neue Materialsysteme haben sollten, damit diese für Sie persönlich eine 
   höhere Akzeptanz erfahren</b>. Dies ist sehr relevant für die Ausrichtung zukünftiger Forschung.
      </section>
 <br>
      <b>Liste von möglichen zentralen Eigenschaften der neuen Materialsysteme:</b>
      <br>

      <table id="basalAttributes">
      <tr>
        <th>Eigenschaften</th>
      </tr>
      <tr>
        <th>   </th>
      </tr>
    </table>

    <br>
    <br>
    <section>
    <b>Wichtig:</b> Beachten Sie bitte folgende Ratschläge zum Zeichnen Ihrer <i>Mind-Map</i>:
    <ul>
    <li>Ändern Sie die emotionale Bewertung der vorgegebenen zentralen Eigenschaften.</li>
    <li>Möglichst bedeutsame zentrale Eigenschaften für Ihre Akzeptanz neuer Materialsysteme können Sie direkt mit dem zentralen Konzept verbinden.</li>
    <li><b>Zentrale Eigenschaften, die aus Ihrer Sicht stark miteinander zusammenhängen, können Sie miteinander verbinden.</b></li>
  </ul>

   </div>
 </main>
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
   <div class="w-l text-justify">
   Drücken Sie nicht auf "Weiter", bevor Sie die Liste sorgfältig gelesen haben. Der "Weiter"-Knopf ist für 30 Sekunden gesperrt.
   </div>
   &nbsp; <button id="continue" type="submit" form="page-form">
   Weiter &rarr;
 </button>
 </footer>
   `,
}


