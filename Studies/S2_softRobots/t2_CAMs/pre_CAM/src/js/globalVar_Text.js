const textObj = {
   // introduction phase
   greetings: `
   <header>
   <div class="row">
   <div class="column2">
   <h2>Thank you for participating in a study by the Cognition, Action, and Sustainability Unit of the University of
   Freiburg!</h2>
 </div>
   <div class="column">
   <img src="pre_CAM/static/UniFreiburg_logo.png" alt="UniFreiburg_logo" style="width:70%; max-height: 150px; max-width: 150px;">
   </div>
 </div> 
 </header>
 
 
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <i> Important note in advance: You can always enlarge or reduce the text and images of the study so that you can
           read them better: </i>
       <ul>
           <li>
               Windows: Hold down the <kbd>Ctrl</kbd> key and move your mouse wheel or press the <kbd>+</kbd> or
               <kbd>-</kbd> key on your keyboard
           </li>
           <li>Mac: Press and hold the <kbd>command</kbd> key and move your mouse wheel or press the <kbd>+</kbd> or
               <kbd>-</kbd> key on your keyboard
       </ul>
       <br>
       <br>
       <section>
           With our research, we aim to get a better understanding of human behavior and mental processes. For this
           purpose, in the following study, your behavior will be measured (e.g., choices, reaction times).
       </section>
       <br>
       <section>
           The duration of the study is <b>approximately 35 minutes</b>. At the bottom, you will see a progress bar,
           progressively turning greener, symbolising your progress in the study. Please use a <strong>computer or
               laptop with a keyboard</strong> for the study. Sit upright at a table and ensure that you can
           participate in the study without being disturbed.
       </section>
       <br>
       <section>
           The aim of the study is to reflect on your feelings during the Covid-19 pandemic, through
           a newly developed method called "Cognitive-Affective Map". On the next pages you will find more information about the exact procedure of the study.
           First of all, we would like to ask you to agree to the informed consent on the following page.
       </section>
   </div>
 </main>
 <form id="page-form">
 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
   To continue the study, please press &nbsp;
   <button id="continue" type="submit" form="page-form">
       Continue &rarr;
   </button>
 </footer>
   `,
   informCon: `
   <header>
   <h2>Informed consent</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
       <section>
           In the following you will receive information regarding your participation in the study. Please read it
           carefully:
       </section>
       <br>
       <section>
           Your participation in the study is voluntary. You can withdraw your consent to participate in this study at
           any time and without giving reasons. You can revoke your consent to the storage of the data until the end of
           the data collection without incurring any disadvantages.
       </section>
       <br>
       <section>
           Since no personal data is collected, once the data collection has been completed, it is in principle no
           longer possible to relate the data in the data set to your person - the data set is anonymous. It is not
           possible for us to delete your data selectively. Nevertheless, we ask you to process the study as
           concentrated and attentive as possible.
       </section>
       <br>
       <section>
           The results and data of this study will be used in the context of future publications. This is done in
           anonymised form, i.e., without the data being able to be assigned to a specific person. If you have any
           questions now or after the experiment, please contact Julius Fenn
           (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>) or
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
                   Please select one of the following options:
               </p>
               <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">
                   Refusal to the informed consent leads to the termination of the study.
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
                                   I hereby confirm that I have understood the participant information described above
                                   and that <strong>I agree</strong> to the above conditions of participation.
                               </label>
                           </td>
                       </tr>
                       <!--ans2-->
                       <tr>
                           <td>
                               <input type="radio" name="dummy_informedconsent" value="0" id="dummy_informedconsent"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent" class="text-left">
                                   I hereby confirm that I have understood the participant information described above
                                   and that <strong>I do not agree</strong> to the above conditions of participation.
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
       Continue &rarr;
   </button>
 </footer>
   `,
   informConNo: `
   <header></header>
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
   <section>
       You have not agreed to the informed consent. Unfortunately, this means that the study is over for you. You can
       now close the screen. Press the <kbd>Esc</kbd> key to exit fullscreen mode. 
   </section>
 </div>
 </main>
   `,
   exclusionCriteria: `
   <header>
     <h2>Thank you for agreeing to the conditions of participation. </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
     <div class="w-l text-justify">
         <section>
             Before we begin, we would like to draw your attention to the following rules during the online study:
         </section>
         <br>
         <ul>
             <li>Please answer the study in a focused manner.</li>
             <li>Do not leave the browser screen of the study unless you are explicitly asked to do so. </li>
             <li>Please read all instructions carefully and comply with them.</li>
         </ul>
<br>
<br>
We place a high value on the quality of our survey data, striving to attain the most accurate measures of your opinions. Your thoughtful answers to each question in this survey are crucial to achieving this objective. 
<br>
<form id="page-form">
<!-- see: https://www.qualtrics.com/blog/attention-checks-and-data-quality/ -->
<!-- multiple choice + text field --> 
<div class="page-item page-item-radio" id="page-item-ques_dummycam">
 <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
 Do you commit to providing thoughtful answers in this survey?
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
   I can't promise either way
   </label>
 </td>
</tr>
<!--ans2--> 
<tr>
 <td>
   <input type="radio" name="commCheck" value="1" id="commCheck" required="">
 </td>
 <td>
   <label for="commCheck" class="text-left">
   Yes, I will
      </label>
 </td>
</tr>
<tr>
 <td>
   <input type="radio" name="commCheck" value="2" id="commCheck" required="">
 </td>
 <td>
   <label for="commCheck" class="text-left">
   No, I will not
      </label>
 </td>
</tr>
</tbody>
</table>
</div>
<!-- END multiple choice + text field --> 


     </div>
 </main>

 </form>
 
 <footer class="content-vertical-center content-horizontal-right">
     <button id="continue" type="submit" form="page-form">
         Continue &rarr;
     </button>
 </footer>
   `,
   // adjust if using
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
     <td>1) Answer a question.
   </tr>
   <tr>
     <td>2) Read the instructions for drawing a <i>Cognitive-Affective Map</i>.</td>
   </tr>
   <tr>
   <td>3) Draw your <i>Cognitive-Affective Map</i> regarding your feelings during the Covid-19 pandemic.</td>
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
   explanationCAM: `
   <header>
     <h2 >
     Please read the following text carefully. We will subsequently ask you to draw a <i>Cognitive-Affective Map</i>:
     </h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
   <i>Remark: You probably need to scroll down to read all the instructions.</i>
   <br>
   <br>
   <section>

   We would like to find out your attitudes and feelings during the Covid-19 pandemic. For this purpose, we have provided you with central concepts in
   the center of your <i>Cognitive-Affective Map</i> (CAM): "negative aspects", "positive aspects" and "Covid-19" in the center.
     </section>
   <section>
   These predefined concepts are potential suggestions, but are not intended to restrict you in any way. Of the given concepts, only the emotional evaluation can be changed 
   and not the text. You <strong>are encouraged to draw additional concepts</strong>. 
   The initial CAM looks like this: 
      </section>
 <br>
      <img alt="ERROR - picture is not shown. Please write an e-mail to the study director that an error has occurred." class="centerIMG"
 src="pre_CAM/static/CAMscenariotext/defaultCAM.JPG">

 <br>
 <br>
 <b>Important:</b> By <i>changing the emotional rating of the central concept</i> "Covid-19", you can indicate whether you perceived the 
 Covid-19 pandemic as overall negative, neutral or positive.
 You can <i>use the comment field</i> to write further explanations about your drawn concepts.
   </div>
 </main>
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
   <div class="w-l text-justify">
   Do not press "Continue" until you have read the text carefully. The "Continue" button is locked for 10 seconds.
   </div>
   &nbsp; <button id="continue" type="submit" form="page-form">
   Continue &rarr;
 </button>
 </footer>
   `,



   // Affective Imagery
  AffectiveImageryInst: `
  <header>
  <h2>Instructions "Word Association Game" </h2>
</header>

<main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
      <strong>How it works...</strong>
      <section>
          On the top of the screen a word is shown. Enter the first word that comes to your mind when reading this
          word. Only if you really don't know this word, press <button
              style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Unknown word</button>.
      </section>
      <br>
      <section>
          Press <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Next
              response</button> to add up to five words or press <button
              style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">No more
              entries</button> if you can't think of any more.
      </section>
      <br>
      <br>
      <strong>  Some hints</strong>
      <section>
          Only give associations to the word on top of the screen (not to your previous responses!).
          <br>
          Use the <kbd>Enter</kbd> key or press the <button style="padding:2px; margin-left:0px; margin-right: 0px;" disabled="disabled">Next
              response</button> button to add associations.
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
  AffectiveImagery: `
  <main class="content-horizontal-center content-vertical-center">
  <div>
      What are the first thoughts or images that come to your mind when you think of: 
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
              <input id="R1" name="R1" class="form-control" placeholder="Enter your first association" type="text"
                  autocorrect="off" autocapitalize="none" autofocus="" autocomplete="off" tabindex="1">
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

          <small class="text-muted" id="progressLabel">Progress</small>
        
          <div class="progress" style="background: white;">
            <div class="progress-bar-AffectiveImg" style="background: #229954;"> 
          </div>
        </div>


        <div style="align-items: display: flex;">
        <!-- Prevent implicit submission of the form -->
        <button type="submit" disabled style="display: none" aria-hidden="true"></button>
      
              <button type="button" class="btn btn-default" tabindex="-1" id="submitAssoButton"><span
                      class="glyphicon glyphicon-plus"></span>&nbsp;Next response</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="finalResponse"><span
                      class="glyphicon glyphicon-ok" form="affectiveImageryForm"></span>&nbsp;End the input</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="skipResponse"><span
                      class="glyphicon glyphicon-minus" form="affectiveImageryForm"></span>&nbsp;No more entries</button>
              <button type="submit" class="btn btn-default" tabindex="-1" id="unknownResponse"><span
                      class="glyphicon glyphicon-remove" form="affectiveImageryForm"></span>&nbsp;Unknown word</button>
          </div>
      </div>
  </form>
  </div>
  
</main>
  `
}


