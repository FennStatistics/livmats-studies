const textObj = {
   // introduction phase
   greetings: `
   <header>
   <div class="row">
   <div class="column2">
   <h2>Vielen Dank für Ihre Teilnahme an einer Studie der Allgemeinen Psychologie der Universität Freiburg!</h2>
 </div>
   <div class="column">
   <img src="static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <i> Wichtiger Hinweis im Voraus: Sie können den Text und die Bilder der Studie jederzeit vergrößern oder verkleinern, damit Sie diese besser lesen können: </i>
       <ul>
           <li>
           Windows: Halten Sie die <kbd>Ctrl</kbd> Taste gedrückt und bewegen Sie Ihr Mausrad oder drücken Sie die <kbd>+</kbd> oder <kbd>-</kbd> Taste auf Ihrer Tastatur
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
       Die Dauer der Studie beträgt <b>etwa 10 Minuten</b>. Unten sehen Sie eine Fortschrittsleiste, die sich zunehmend grüner färbt und Ihren Fortschritt in der Studie symbolisiert. 
       Bitte benutzen Sie für die Studie einen <b>Computer oder Laptop mit Tastatur</b>. 
       Bitte stellen Sie sicher, dass Sie an der Studie ungestört teilnehmen können.
       </section>
       <br>
       <section>
       Das Ziel der Studie ist es, Ihre Einstellung zum Klimawandel zu messen. Auf den nächsten Seiten finden Sie weitere Informationen zum genauen Ablauf der Studie. 
       Zunächst möchten wir Sie bitten, auf der folgenden Seite der informierten Einwilligung zuzustimmen.
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
       (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>) oder 
           Christophe Becht (<a href="mailto:christophe.becht@students.uni-freiburg.de">christophe.becht@students.uni-freiburg.de</a>) oder
           Prof. Andrea Kiesel
           (<a href="mailto:kiesel@psychologie.uni-freiburg.de">kiesel@psychologie.uni-freiburg.de</a>).
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
           Bevor wir beginnen, möchten wir Ihre Aufmerksamkeit auf die folgenden Regeln während der Online-Studie lenken:
       </section>
       <br>
       <ul>
           <li>Bitte beantworten Sie die Studie konzentriert.</li>
           <li>Verlassen Sie den Browserbildschirm der Studie nicht, es sei denn, Sie werden ausdrücklich dazu aufgefordert.</li>
           <li>Bitte lesen Sie alle Instruktionen sorgfältig durch und halten Sie sich an diese.</li>
       </ul>
<br>
<br>
Uns ist die Qualität unserer Umfragedaten wichtig. Um ein möglichst genaues Bild Ihrer Meinungzu erhalten, ist es wichtig, dass Sie alle Fragen in dieser Umfrage sorgfältig beantworten.
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
   // not needed
   setupStudy: `
   <header>
     <h2>Overview of the study:</h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
 <section>
 The study is divided into three parts: 
 </section>
 <br>
 <br>
 <table>
   <tr>
   <td>1) Read a scenario text, which describes an emerging technology.</td>
   </tr>
   <tr>
     <td>2) Answer several questions regarding the emerging technology.</td>
   </tr>
   <tr>
   <td>3) Answer concluding questions.</td>
 </tr>
 </table>
 <br>
 <section>
 The individual sections are explained and justified below. Thank you again for participating in the study. We encourage you to answer all of the following questions honestly.
 </section>
   </div>
 </main>
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
     <button id="continue" type="submit" form="page-form">
     Continue &rarr;
     </button>
   </footer>
   `,

   // Affective Imagery
  AffectiveImageryInst: `
  <header>
  <h2>Anweisungen "Wortassoziationsspiel" </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
      <strong>Wie es funktioniert...</strong>
      <section>
          Oben auf dem Bildschirm wird ein Wort angezeigt. Geben Sie das erste Wort ein, das Ihnen in den Sinn kommt, wenn Sie dieses
          Wort lesen. Drücken Sie nur auf <button
              style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Unbekanntes Wort</button>, wenn Sie das Wort wirklich nicht kennen.
      </section>
      <br>
      <section>
          Drücken Sie auf <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Nächste
              Antwort</button>, um bis zu fünf Wörter hinzuzufügen, oder drücken Sie auf <button
              style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Keine weiteren
              Eingaben</button>, wenn Ihnen nichts mehr einfällt.
              <br>
              <br>
              Verwenden Sie die <kbd>Enter</kbd> Taste oder drücken Sie auf den <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Nächste
              Antwort</button>, um Assoziationen hinzuzufügen.
      </section>
      <br>
      <br>
      <strong>Einige Hinweise</strong>
      <section>
          Geben Sie nur Assoziationen zu dem Wort am oberen Bildschirmrand an (nicht zu Ihren vorherigen Antworten!).
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
  AffectiveImagery: `
  <main class="content-horizontal-center content-vertical-center">
  <div>
  Welche ersten Gedanken oder Bilder kommen Ihnen in den Sinn, wenn Sie an Folgendes denken: 
      <br>
      <br>
<div style="align-items: display: flex;"> <strong style="font-size: 22px;">` +
"${AffectiveImageryTechnology}" +
`
</strong>
</div>
<br>
    <form id="affectiveImageryForm">
      <div class="affectiveImagery">
          <div class="form-group">
              <input id="R1" name="R1" class="form-control" placeholder="Geben Sie Ihre erste Assoziation ein" type="text"
                  autocorrect="off" autocapitalize="none" autofocus autocomplete="off" tabindex="1">
          </div>
          <div class="form-group">
              <input id="R2" name="R2" class="form-control" placeholder="" type="text" autocorrect="off"
                  autocapitalize="none" autofocus="" autocomplete="off" tabindex="2" disabled="">
          </div>
          <div class="form-group">
              <input id="R3" name="R3" class="form-control" placeholder="" type="text" autocorrect="off"
                  autocapitalize="none" autofocus="" autocomplete="off" tabindex="3" disabled="">
          </div>
          <div class="form-group">
              <input id="R4" name="R4" class="form-control" placeholder="" type="text" autocorrect="off"
                  autocapitalize="none" autofocus="" autocomplete="off" tabindex="4" disabled="">
          </div>
          <div class="form-group">
              <input id="R5" name="R5" class="form-control" placeholder="" type="text" autocorrect="off"
                  autocapitalize="none" autofocus="" autocomplete="off" tabindex="5" disabled="">
          </div>

          <small class="text-muted" id="progressLabel">Fortschritt</small>
        
          <div class="progress" style="background: white;">
            <div class="progress-bar-AffectiveImg" style="background: #229954;"> 
          </div>
        </div>


        <div style="align-items: display: flex;">
        <!-- Prevent implicit submission of the form -->
        <button type="submit" disabled style="display: none" aria-hidden="true"></button>
      
              <button type="button" class="btn btn-default" tabindex="-1" id="submitAssoButton"><span
                      class="glyphicon glyphicon-plus"></span>&nbsp;Nächste Antwort</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="finalResponse"><span
                      class="glyphicon glyphicon-ok" form="affectiveImageryForm"></span>&nbsp;Eingabe beenden</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="skipResponse"><span
                      class="glyphicon glyphicon-minus" form="affectiveImageryForm"></span>&nbsp;Keine weiteren Eingaben</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="unknownResponse"><span
                      class="glyphicon glyphicon-remove" form="affectiveImageryForm"></span>&nbsp;Unbekanntes Wort</button>
          </div>
      </div>
  </form>
  </div>
  
</main>
  `,

   // feedback question
  feedbackQues: `
  <header>
  <h2>
    Bitte beantworten Sie die folgende letzte Frage, wenn Sie möchten:
  </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-l">
    <form id="page-form" style="display: block;" autocomplete="off">
      <!-- multiline text text -->
      <div class="page-item page-item-textarea" id="page-item-feedback_critic">
        <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
          Haben Sie irgendwelches Feedback oder Kritik zur Online-Studie?
        </p>
        <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
          Jegliche Kritik oder Verbesserungsvorschläge werden uns sehr helfen, zukünftige Studien zu verbessern.
        </p>
        <textarea name="feedback_critic" class="w-100" rows="4"></textarea>
      </div>
      <!-- END multiline text -->
    </form>
  </div>
</main>

<footer class="content-vertical-center content-horizontal-right">
  <button id="continue" type="submit" form="page-form">
    Weiter &rarr;
  </button>
</footer>
  `,


  
  // ESTA
  ESTAgeninfo:`
  <header>
    <h2>
Please answer the questions that follow from the perspective of each theory
    </h2>
  </header>

  <main class="content-horizontal-center content-vertical-center">
  
  <form id="page-form">
  <div class="w-l text-justify">
  Our lives are full of <i>binding norms of action</i>, such as that we as humans should not kill other people, cause them pain or suffering, 
  or not rescue people who are in danger. When such norms are violated, we often have a “gut feeling,” for example, we feel revulsion when we see pictures of people suffering.
<br>
<br>
  Similarly, we often instinctively feel that a particular technology is “fair,” “just,” or “morally right.” The central question now is: According to which criteria do we make such judgments? In philosophy, there are so-called ethical theories that attempt to provide a clear idea of how we should morally evaluate a technology. Using different ethical theories to make ethical judgments about a technology illuminates our thinking and presents different perspectives on technologies.
  <br>
  <br> 
  In the following we briefly introduce the ethical theories and ask you to read them as carefully as possible. 
  Then we would like you to <b>answer the questions that follow from the perspective of each theory</b>. 
      </form>
  </div>
</main>


<footer class="content-vertical-center content-horizontal-right">
<div class="w-l text-justify">
Do not press "Continue" until you have read the text carefully. The "Continue" button is locked for 10 seconds.
</div>
&nbsp; <button id="continue" type="submit" form="page-form">
Weiter &rarr;
</button>
</footer>
  `,
  ESTAtheorydefinition:`
  <header>
    <h2>
    In the following we want to ask you to evaluate the "` +
    "${TechnologyScenario}" +
    `" technology <span id="ethicTheory_def_top"></span>
     </h2>
  </header>

  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">

  <span id="ethicTheory_name" style="font-style: italic;"></span>  <span id="ethicTheory_beforemain"></span>
  <img id="ethicTheory_image" src="" alt="Please contact the study administration that something went wrong" style="width:100%;" class="centerIMG">
  <br>
  <div  style="border: 2px dashed black; padding: 20px;">
<div id="ethicTheory_definition"></div>      
<form id="feedback">
  </div>
  </form>
  </div>
</main>
  
  <footer class="content-vertical-center content-horizontal-right">
  <div class="w-l text-justify">
  </div>
  <button id="continue" type="submit" form="feedback">
  Weiter &rarr;
</button>

</footer>
  `,
  ESTAscale:`
  <main class="content-horizontal-center content-vertical-center">
  
  <div class="w-l">
    <form id="page-form">
      <!-- START question block --> 
      <div>
        <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
        Please refer to the explanation of "<span id="ethicTheory_name1"></span>" you have just read and indicate on the following scale how you would 
        ethically evaluate the technology. The technology ` +
    "${TechnologyScenario}" +
    `...
        </p>
        
        <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
          Read the items and then mark the appropriate answers.
        </p>
            
        <table class="page-item-table" id="tablerandom">
          <colgroup>
            <col style="width: 29%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 6%">
            <col style="width: 29%">
          </colgroup>

         <thead class="sticky-top">
            <tr><th class="sticky-top "></th>
              <th class="sticky-top text-center">
                1
              </th>
              <th class="sticky-top text-center">
                2
              </th>
              <th class="sticky-top text-center">
                3
              </th>
              <th class="sticky-top text-center">
                4
              </th>
              <th class="sticky-top text-center">
                5
              </th>
                    <th class="sticky-top text-center">
                6
              </th>
                    <th class="sticky-top text-center">
                7
              </th><th class="sticky-top"></th>
            </tr>
          </thead>

        <tbody>
<!-- bipolar-scale: 1 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 2 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 3 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 4 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 5 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 6 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 7 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 8 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 9 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 10 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
        <!-- bipolar-scale: 11 question --> 
        <tr>
          <td class="small" style="padding-left: 0">XXX</td>
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="text-center">
          </td>
          <td class="small" style="padding-left: 0">XXX</td>
        </tr>
          </tbody>
          </table>
        </div>
  <!-- END question type --> 
      </form>
    </div> 
  </main>
  
  
  
  <footer class="content-horizontal-right content-vertical-center">
    <button type="submit" form="page-form">
      Continue →
    </button>
  </footer>
  `,  socioDemo: `
  <header>
    <h2>
    Please answer the following questions about your person:

    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    
    <p class="text-left">Before the study ends, we would like to ask you to provide some information about yourself.</p>
    
    <form id="demography">

    



      <table>
        <!-- Age -->
        <tr style="height: 50px">
          <td >
            How old are you, in years?
          </td>
          <td>
            <input name="age" type="number" required class="w-100">
          </td>
        </tr>
        
        <!-- Gender identity, following Tate et al. (2013) 
        <tr style="height: 100px">
          <td>
            What is your current gender identity?
          </td>
          <td>
            <select name="gender" required class="w-100">
              <option value="" selected>
                    -- Please select --
              </option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="transgender">Transgender</option>
              <option value="intersex">Intersex</option>
            </select>
          </td>
        </tr>
        -->
        
        <!-- Birth-assigned gender category, following Tate et al. (2013)    Which gender were you assigned at birth?  -->
          <tr style="height: 100px">
        <td >
              What is your gender?
            </td>
            <td>
              <select style="width: 300px" required name="gender-birth">
                <option value="" selected>
                -- Please select --
                </option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="intersex">Intersex</option>
                <option value="noanswer">Don't want to answer</option>
              </select>
            </td>
          </tr>
    

        <!-- Education    -->
        <tr style="height: 100px">
        <td >
            Please specify your highest degree:
          </td>
          <td>
            <select name="education" required style="width: 300px">
              <option value="" selected>
              -- Please select --
              </option>
              <option value="no">no degree</option>
              <option value="highschool">High school diploma</option>
              <option value="bachelor">Bachelor's</option>
              <option value="master">Master's</option>
              <option value="phd">PhD</option>
            </select>
          </td>
        </tr>
     

        <!-- Occupation
        <tr style="height: 100px">
          <td>
            What is your occupation, or if you still study, your field?
          </td>
          <td>
            <input name="occupation" class="w-100">
          </td>
        </tr>
        -->

        <!-- Column balance -->
        <colgroup>
          <col style="width: 45%">
          <col style="width: 55%">
        </colgroup>
      </table>


      <div class="page-item page-item-likert">
            <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
            In politics people sometimes talk of 'left' and 'right'. Place yourself on this scale, where 0 means the left and 10 means the right:
            </p>
            <span style="margin-left: 2%; display: inline-block; width: 80px; font-size: 14px;">
Left(0)
</span>
<span style="float: right; display: inline-block; width: 50px; font-size: 14px;">
Right(10)
</span><table class="page-item-table">
              <colgroup>

      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      <col style="width: 6%">
      </colgroup>
              <thead class="sticky-top">
    
        <th class="sticky-top text-center small">
  0
</th>
<th class="sticky-top text-center small">
  1
</th>
<th class="sticky-top text-center small">
  2
</th>
<th class="sticky-top text-center small">
  3
</th>
<th class="sticky-top text-center small">
  4
</th>
<th class="sticky-top text-center small">
  5
</th>
<th class="sticky-top text-center small">
  6
</th>
<th class="sticky-top text-center small">
  7
</th>
<th class="sticky-top text-center small">
  8
</th>
<th class="sticky-top text-center small">
  9
</th>
<th class="sticky-top text-center small">
  10
</th>
      </tr></thead>
              <tbody>
                <tr>

      <td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="1" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="2" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="3" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="4" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="5" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="6" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="7" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="8" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="9" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="10" required>
  </label>
</td>
<td class="text-center">
  <label style="height: 100%; padding: 10px 0">
    <input type="radio" name="lrscale" value="11" required>
  </label>
</td>
    </tr>
<tr>
    
              </tbody>
            </table>
          </div>

<br>
          <div class="page-item page-item-likert">
          <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
      Regardless of whether you belong to a particular religion, how religious would you say you are?
          </p>
          <span style="margin-left: 2%; display: inline-block; width: 80px; font-size: 14px;">
Not at all religious(0)
</span>
<span style="float: right; display: inline-block; width: 50px; font-size: 14px;">
Very religious(10)
</span><table class="page-item-table">
            <colgroup>

    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    <col style="width: 6%">
    </colgroup>
            <thead class="sticky-top">
  
      <th class="sticky-top text-center small">
0
</th>
<th class="sticky-top text-center small">
1
</th>
<th class="sticky-top text-center small">
2
</th>
<th class="sticky-top text-center small">
3
</th>
<th class="sticky-top text-center small">
4
</th>
<th class="sticky-top text-center small">
5
</th>
<th class="sticky-top text-center small">
6
</th>
<th class="sticky-top text-center small">
7
</th>
<th class="sticky-top text-center small">
8
</th>
<th class="sticky-top text-center small">
9
</th>
<th class="sticky-top text-center small">
10
</th>
    </tr></thead>
            <tbody>
              <tr>

    <td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="1" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="2" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="3" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="4" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="5" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="6" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="7" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="8" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="9" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="10" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
  <input type="radio" name="rlgdgr" value="11" required>
</label>
</td>
  </tr>
<tr>
  
            </tbody>
          </table>
        </div>
    </form>
  </div>
</main>

  
  <footer class="content-vertical-center content-horizontal-right">
  <div class="w-l text-justify">
  </div>
  <button id="continue" type="submit" form="demography">
  Fortfahren &rarr;
</button>

</footer>
  `,
}


