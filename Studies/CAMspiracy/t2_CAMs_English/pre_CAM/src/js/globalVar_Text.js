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
       purpose, in the following study, your behavior will be measured (e.g., choices, reaction times, if you left fullscreen).
       </section>
       <br>
       <section>
       The duration of the study is <b>approximately 35 minutes</b>. At the bottom, you will see a progress bar,
       progressively turning greener, symbolising your progress in the study. Please use a <strong>computer or
           laptop with a keyboard</strong> for the study. Please ensure that you can
       participate in the study without being disturbed.
       </section>
       <br>
       <section>
       The aim of the study is to measure your attitude towards climate change once again. 
       To achieve this, we employ a method called "Cognitive-Affective Mapping" (CAM method), where you'll be drawing a type of Mind-Map. 
       Further information about the specific procedure of the study will be provided on the following pages. Initially, we kindly ask you to agree to the informed consent on the next page.      
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
       Thank you for considering participation in our online study. We want to emphasize that your involvement is completely voluntary, and you have the full freedom to withdraw 
       your consent at any stage of the study without needing to provide any reasons.
       </section>
       <br>
       <section>
       It's important for you to know that we do not collect any personal data during this study. Consequently, once the data collection phase is completed, the data becomes entirely anonymous, making it impossible to link any of the data back to you.
       </section>
       <br>
       <section>
       Despite the anonymity, we kindly ask for your full concentration and attention while participating in the study. This will significantly contribute to the quality and reliability of our research.
       </section>
       <br>
       <section>
       Finally, we plan to use the results and data from this study in future publications. However, be assured that all published material will be in an anonymized format. 
       If you have any questions now or after the experiment, please contact Julius Fenn
           (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>) or 
           Christophe Becht (<a href="mailto:christophe.becht@students.uni-freiburg.de">christophe.becht@students.uni-freiburg.de</a>) or
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
                               <input type="radio" name="dummy_informedconsent" value="0" id="dummy_informedconsent2"
                                   required>
                           </td>
                           <td>
                               <label for="dummy_informedconsent2" class="text-left">
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
We care about the quality of our survey data. For us to get the most accurate measures of your opinions, it is important that you provide thoughtful answers to each question in this survey. 
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
   <input type="radio" name="commCheck" value="1" id="commCheck2" required="">
 </td>
 <td>
   <label for="commCheck2" class="text-left">
   Yes, I will
      </label>
 </td>
</tr>
<tr>
 <td>
   <input type="radio" name="commCheck" value="2" id="commCheck3" required="">
 </td>
 <td>
   <label for="commCheck3" class="text-left">
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
   <h2>Study overview:</h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
     <section>
     The study is divided into 3 parts:
     </section>
     <br>
     <table>
       <tr>
       <td>1) Read the instructions on how to draw a <i>Mind-Map</i>.</td>
       </tr>
       <tr>
       <td>2) Draw a <i>Mind-Map</i> about your attitude and feelings towards climate change.</td>
       </tr>
       <tr>
         <td>3) Finally, answer several questions.</td>
       </tr>
     </table>
     <br>
     <section>
     Each section will be explained and justified below. Once again, thank you for participating in the study. We encourage you to answer all the following questions honestly.
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
     <h2>
     Please read the following text carefully. Afterwards, we kindly ask you to draw a <i>Mind-Map</i> about your attitudes and feelings towards climate change.
     </h2>
   </header>
   
   <main class="content-horizontal-center content-vertical-center">
   <div class="w-l text-justify">
    <i>Note: You may need to scroll down to read the entire text.</i>
   <br>
   <br>
   <section>
   We aim to explore your attitudes and feelings towards climate change. For this purpose, we have provided you with the central concept "Climate Change" in the <i>Mind-Map</i>. 
   Among the given term, only the emotional assessment can be changed, but not the text. You are encouraged to draw additional concepts. The original <i>Mind-Map</i> looks like this:

      </section>
 <br>
      <img alt="ERROR - picture is not shown. Please write an e-mail to the study director that an error has occurred." class="centerIMG"
 src="pre_CAM/static/CAMscenariotext/defaultCAM.JPG">

 <br>
 <br>
 <b>Important:</b> By <i>modifying the emotional assessment of the central concept</i> "Climate Change", you can indicate whether you perceive climate change overall as negative, neutral, ambivalent, or positive. 
 You can use the comment field to provide further explanations about the concepts you have drawn.
   </div>
 </main>
 
   <form id="page-form"> 
   </form>
   
   <footer class="content-vertical-center content-horizontal-right">
   <div class="w-l text-justify">
   Do not press "Continue" until you have read the text carefully. The "Continue" button is blocked for 10 seconds.
   </div>
   &nbsp; <button id="continue" type="submit" form="page-form">
   Continue &rarr;
 </button>
 </footer>
   `,
}


