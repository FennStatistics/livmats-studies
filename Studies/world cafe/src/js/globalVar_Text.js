const textObj = {
  // introduction phase
  greetings: `
  <header>
  <div class="row">
  <div class="column2">
  <h2>Thank you for participating in our online study, which is part of our presented World-Café!</h2>
</div>

  <img src="static/livMatS_logo.png" alt="UniFreiburg_logo" style="width:50%; max-height: 250px; max-width: 250px;">

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
      🌟 You're Invited!
      <br>
      Are you passionate about making a difference? Do you have ideas that could change the world? We invite you to participate in an exciting online World-Café study!
      </section>
      <br>
      <section>
      🔍 Why Your Participation Matters
      <ul>
      <li>Be Heard: Your opinions are super valuable. This is your platform to share them.</li>
      <li>Learn and Grow: Engage with diverse perspectives how to investigate new material systems.</li>
      <li>Impact Change: Your insights will help motivate the acceptability or future lines of research.</li>
    </ul>
      </section>
      <br>
      <section>
      🕒 Time Commitment
      <ul>
      <li>Date: 29th November to 1th of December</li>
      <li>Duration: Just 10 to 15 minutes of your time!</li>
      <li>Location: Participate at the livMatS retreat or online from anywhere!</li>
    </ul>
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
      Thank you for considering to participate in our World-Café online study. We want to emphasize that your involvement is completely voluntary 
      and that you have the full freedom to withdraw your consent at any stage of the study without needing to provide any reasons. Furthermore, if you choose to withdraw, you can do so without incurring any disadvantages.
      </section>
      <br>
      <section>
      It's important for you to know that we do not collect any personal data during this study. Consequently, once the data collection phase is completed, 
      the data becomes entirely anonymous making it impossible to link any of the data back to you.
      </section>
      <br>
      <br>
      <section>
      Finally, we plan to use the results and data from this study in future publications. However, be assured that all published material will be in an anonymized format. 
      If you have any questions now or after the experiment, please contact Julius Fenn
          (<a href="mailto:julius.fenn@psychologie.uni-freiburg.de">julius.fenn@psychologie.uni-freiburg.de</a>) or
          Louisa Estadieu
          (<a href="mailto:louisa.estadieu@philosophie.uni-freiburg.de">louisa.estadieu@philosophie.uni-freiburg.de</a>).
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
  setupStudy: `
  <header>
    <h2>Overview of the World-Café online study:</h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
<section>
The study is divided into two parts: 
</section>
<br>
<br>
<table>
  <tr>
  <td>1) Rate the importance of different adjectives for livMatS. </td>
  </tr>
  <tr>
    <td>2) Evaluate the risks and benefits of social robots.</td>
  </tr>
  <tr>
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
  infoBasalAttributes: `
  <header>
    <h2>Rate the importance of different adjectives for livMatS.</h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
<section>
We are planning to publish a study called "<i>Using basal attributes to identify key properties to increase the acceptance of new material systems</i>". Here, we want to find out which 
(systematic combination of) basal attributes are overall negatively or positively evaluated (measuring valence) regarding the acceptance of new material systems.
</section>
<br>
<br>
<section>
❓ What are basal attributes ❓
<br>
When describing new technologies or in our case material systems, certain basal attributes or adjectives are commonly used to convey their most fundamental and significant characteristics. 
These attributes often highlight the innovation, efficiency, and potential impact of the technology.
</section>
<br>
<br>
<section>
📝Your task:
<br>
On the following page please rate the importance and your inital emotional evaluation of a list of basal attributes for livMatS. 
To give a rating of your initial emotion evaluation, please indicate if you perceive the respective basal attribute as positive, negative, or neutral 
with the scale ranging from [-3,3].
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
  SR_applications: `
 <header>
   <h2>
   Please answer the following question:
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
 <div class="w-l text-justify" style="display: block">
   
   
   <form id="demography">
     <table>

       
       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Can you identify <strong>distinct application scenarios</strong> where soft robots offer advantages over their rigid counterparts?
         </td>
         <td>
           <select id="applicationsSR" name="applicationsSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No.</option>
             <option value="1">Yes.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition   -->
       <tr id="hideapplicationsSRRdefinition" style="height: 100px">
         <td class="text-left">
         What are the <strong>most promising applications</strong> of soft robots over their rigid counterparts within your field of expertise?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="applicationsSRdefinition" name="applicationsSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Column balance -->
       <colgroup>
         <col style="width: 40%">
         <col style="width: 60%">
       </colgroup>
     </table>
     </form>
 </div>
</main>

 
 <footer class="content-vertical-center content-horizontal-right">
 <div class="w-l text-justify">
 </div>
 <button id="continue" type="submit" form="demography">
 Continue &rarr;
</button>

</footer>
 `,
 SR_benefitsRisks: `
 <header>
   <h2>
   Please answer the following questions:
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
 <div class="w-l text-justify" style="display: block">
   
   
   <form id="demography">
     <table>

       
       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Do you see any <strong>benefits</strong> for soft robots compared to rigid robots?
         </td>
         <td>
           <select id="benefitsSR" name="benefitsSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No, I do not see any benefits</option>
             <option value="1">Yes, I see benefits.</option>
             <option value="2">Yes, I see great benefits.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition SRM   -->
       <tr id="hidebenefitsSRdefinition" style="height: 100px">
         <td class="text-left">
         In your expert opinion, what are the main <strong>benefits</strong> of soft robots compared to rigid robots?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="benefitsSRdefinition" name="benefitsSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Do you see any <strong>risks</strong> for soft robots compared to rigid robots?
         </td>
         <td>
           <select id="risksSR" name="risksSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No, I do not see any risks</option>
             <option value="1">Yes, I see risks.</option>
             <option value="2">Yes, I see great risks.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition SRM   -->
       <tr id="hideRisksSRfinition" style="height: 100px">
         <td class="text-left">
         In your expert opinion, what are the main <strong>risks</strong> of soft robots compared to rigid robots?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="risksSRdefinition" name="risksSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Column balance -->
       <colgroup>
         <col style="width: 40%">
         <col style="width: 60%">
       </colgroup>
     </table>
     </form>
 </div>
</main>

 
 <footer class="content-vertical-center content-horizontal-right">
 <div class="w-l text-justify">
 </div>
 <button id="continue" type="submit" form="demography">
 Continue &rarr;
</button>

</footer>
 `,
 SR_socialBenefitsRisks: `
 <header>
   <h2>
   Please answer the following questions:
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
 <div class="w-l text-justify" style="display: block">
   
   
   <form id="demography">
     <table>

       
       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Do you see any distinct <strong>social benefits</strong> for soft robots compared to rigid robots?
         </td>
         <td>
           <select id="socialBenefitsSR" name="socialBenefitsSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No, I do not see any social benefits</option>
             <option value="1">Yes, I see social benefits.</option>
             <option value="2">Yes, I see great social benefits.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition SRM   -->
       <tr id="hidesocialBenefitsSRdefinition" style="height: 100px">
         <td class="text-left">
         From your expert perspective, what do you identify as the <strong>primary social benefits</strong> of soft robots compared to rigid robots?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="socialBenefitsSRdefinition" name="socialBenefitsSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Do you see any distinct <strong>social risks</strong> for soft robots compared to rigid robots?
         </td>
         <td>
           <select id="socialRisksSR" name="socialRisksSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No, I do not see any risks</option>
             <option value="1">Yes, I see risks.</option>
             <option value="2">Yes, I see great risks.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition SRM   -->
       <tr id="hidesocialRisksSRdefinition" style="height: 100px">
         <td class="text-left">
         From your expert perspective, what do you identify as the <strong>primary social risks</strong> of soft robots compared to rigid robots?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="socialRisksSRdefinition" name="socialRisksSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Column balance -->
       <colgroup>
         <col style="width: 40%">
         <col style="width: 60%">
       </colgroup>
     </table>
     </form>
 </div>
</main>

 
 <footer class="content-vertical-center content-horizontal-right">
 <div class="w-l text-justify">
 </div>
 <button id="continue" type="submit" form="demography">
 Continue &rarr;
</button>

</footer>
 `,
 SR_sustainable: `
 <header>
   <h2>
   Please answer the following question:
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
 <div class="w-l text-justify" style="display: block">
   
   
   <form id="demography">
     <table>

       
       <!-- Knowledge SRM -->
       <tr style="height: 100px">
         <td class="text-left">
         Do you think soft robots are more <strong>sustainable</strong> than rigid robots? 
         </td>
         <td>
           <select id="sustainableSR" name="sustainableSR" required class="w-100">
             <option value="" selected>
             -- Please select --
             </option>
             <option value="0">No.</option>
             <option value="1">Yes.</option>
           </select>
         </td>
       </tr>
     

       <!-- Definition   -->
       <tr id="hidesustainableSRdefinition" style="height: 100px">
         <td class="text-left">
         From your expert point of view, could you elaborate on the <strong>potential environmental impacts</strong> of soft robots, considering aspects like energy efficiency, and end-of-life disposal, particularly in comparison to rigid robots?
         <br>
         <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
         Please write a short answer.
         </p>
         </td>
         <td>
         <textarea id="sustainableSRdefinition" name="sustainableSRdefinition" class="w-100" rows="8"></textarea>
         </td>
       </tr>


       <!-- Column balance -->
       <colgroup>
         <col style="width: 40%">
         <col style="width: 60%">
       </colgroup>
     </table>
     </form>
 </div>
</main>

 
 <footer class="content-vertical-center content-horizontal-right">
 <div class="w-l text-justify">
 </div>
 <button id="continue" type="submit" form="demography">
 Continue &rarr;
</button>

</footer>
 `,
  infoBenefitRiskSoftRobot: `
  <header>
    <h2>Evaluate the risks and benefits of social robots.</h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">
<section>
We are planning to publish a study called "<i>Soft vs. Rigid Robots: Identifying Risks and Benefits in Social Assistance and Search and Rescue Robotics</i>". 
Here, we want to find out which are the most significant risks & benefits of soft robots compared to rigid robots. 
The study focuses on two distinct case studies: (a) socially assistive robots and (b) search and rescue robots.
</section>
<br>
<br>
<section>
❓ Why Ethics (Risks & Benefits) ❓
<br>
Ethics and Soft Robots are intrinsically linked as the integration of ethical considerations ensures responsible development and deployment, addressing crucial aspects such as user safety, privacy, and societal impact in the ever-expanding role of soft robots in various domains.
</section>
<br>
<br>
<section>
📝Your task:
<br>
On the following pages, we will ask you 6 questions on risks and benefits of soft robots. Your task is to provide brief responses to these questions from your expert point of view.
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

  // feedback question
 feedbackQues: `
 <header>
   <h2>
   Please answer the following last question if you wish:
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center" >
 <div class="w-l">
   <form id="page-form" style="display: block;" autocomplete="off">
<!-- multiline text text --> 
<div class="page-item page-item-textarea" id="page-item-feedback_critic">
 <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
 Do you have any feedback or criticism about the online study? 
 </p>
 <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
 Any criticism or suggestions for improvement will be of great help in improving future studies. 
 </p>
 <textarea name="feedback_critic" class="w-100" rows="4"></textarea>
</div>
<!-- END multiline text --> 
    
   </form>
 </div> 
</main>
 
 <footer class="content-vertical-center content-horizontal-right">
 <button id="continue" type="submit" form="page-form">
 Continue &rarr;
</button>
</footer>
 `,
 livmatsAreas: `
 <header>
   <h2>
     We would like to ask you about possible relevant basal attributes for the different livMatS areas that we have overlooked.
   </h2>
 </header>
 
 <main class="content-horizontal-center content-vertical-center">
 <div class="w-xl text-justify" style="display: block">
   
   <p class="text-left">
   <i>
     Remark: By double clicking on the white field you can select already considered basal attributes from a list or add new ones by writing. 
     <u>Confirm</u> your selection by clicking on "select". By clicking on "remove" you can remove wrongly selected basal attributes.
     <br>
     Feel free to add as many basal attributes as you want for your or other livMatS areas.
   </i>
   </p>   
   <div class="container">

   <div class="box">
   <datalist id="statistics_list">
   </datalist>

   <b>Research Area A (Energy Autonomy):</b> 
   <br>
   <i>Which basal attributes are important for your research?</i>
   <br>
   <br>
    <input id="statistics" style="width:60%;" list="statistics_list" name="statistics_list" placeholder="Start typing or click to select...">
    <button id="select_statistics_list" class="buttonFeedback">
      Select
    </button>
    <button id="remove_statistics_list" class="buttonFeedback">
      Remove
    </button>
    <br>
    Choosen elements:
    <div class="choosenElements_statistics choosenElements">
    </div>
   </div>



   <div class="box">
   <datalist id="software_list">
   </datalist>

   <b>Research Area B (Adaptivity):</b> 
   <br>
   <i>Which basal attributes are important for your research?</i>
   <br>
   <br>
    <input id="software" style="width:60%;" list="software_list" name="software_list" placeholder="Start typing or click to select...">
    <button id="select_software_list" class="buttonFeedback">
      Select
    </button>
    <button id="remove_software_list" class="buttonFeedback">
      Remove
    </button>
    <br>
    Choosen elements:
    <div class="choosenElements_software choosenElements">
    </div>
   </div>


   <div class="box">
   <datalist id="contentwise_list">
   </datalist>

   <b>Research Area C (Longevity):</b> 
   <br>
   <i>Which basal attributes are important for your research?</i>
   <br>
   <br>
    <input id="contentwise" style="width:60%;" list="contentwise_list" name="contentwise_list" placeholder="Start typing or click to select...">
    <button id="select_contentwise_list" class="buttonFeedback">
      Select
    </button>
    <button id="remove_contentwise_list" class="buttonFeedback">
      Remove
    </button>
    <br>
    Choosen elements:
    <div class="choosenElements_contentwise choosenElements">
    </div>
   </div>


   <div class="box">
   <datalist id="tools_list">
   </datalist>

   <b>Research Area D (Societal challenges and Sustainability):</b> 
   <br>
   <i>Which basal attributes are important for your research?</i>
   <br>
   <br>
    <input id="tools" style="width:60%;" list="tools_list" name="tools_list" placeholder="Start typing or click to select...">
    <button id="select_tools_list" class="buttonFeedback">
      Select
    </button>
    <button id="remove_tools_list" class="buttonFeedback">
      Remove
    </button>
    <br>
    Choosen elements:
    <div class="choosenElements_tools choosenElements">
    </div>

   </div>
 </div>
   

 <form id="feedbackTools">
   </form>
 </div>
</main>

 
<footer class="content-vertical-center content-horizontal-right">
 <button id="continue" type="submit" form="feedbackTools">
     Continue &rarr;
 </button>
</footer> `
}


