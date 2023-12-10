const textObj = {
  mixedQuestions1: `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    <form id="demography">



      <div class="page-item page-item-likert">
            <p class="font-weight-bold" style="margin: 1rem 0 0.25rem; font-size: 20px;">
            Please indicate how concerned you are about climate change and how often you think about it.
            </p>
            <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
            Please answer every statement, even if you are not completely sure of your response.
            </p>
            <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
            How concerned are you about climate change?
            </p>

            <table class="page-item-table">
            <colgroup>
    <col style="width: 12%">
    <col style="width: 12%">
    <col style="width: 12%">
    <col style="width: 12%">
    <col style="width: 12%">
    <col style="width: 12%">
    <col style="width: 12%">
    </colgroup>
            <thead class="sticky-top">   
<th class="sticky-top text-center small">
1 (not concerned at all)
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
7 (very concerned)
</th>
 </thead>

 <tbody>  
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="1" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="2" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="3" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="4" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="5" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="6" required>
 </label>
 </td>
 <td class="text-center">
 <label style="height: 100%; padding: 10px 0">
   <input type="radio" name="concernClimate1" value="7" required>
 </label>
 </td>
 </tbody>
 </table>


</p>
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
How often do you worry about the potentially negative consequences of climate change?
</p>

<table class="page-item-table">
<colgroup>
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
</colgroup>
<thead class="sticky-top">   
<th class="sticky-top text-center small">
1 (very rarely)
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
7 (very frequently)
</th>
</thead>

<tbody>  
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="1" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="2" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="3" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="4" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="5" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="6" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="concernClimate2" value="7" required>
</label>
</td>
</tbody>
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
  mixedQuestions2: `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    <form id="demography">



      <div class="page-item page-item-likert">
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem; font-size: 20px;">
Please indicate how likely you judge the statements to be.
</p>
<p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
Please answer every statement, even if you are not completely sure of your response.
</p>
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
In your judgment, how likely are you, sometime during your life, to experience serious threats to your health or overall well-being, as a result of climate change?
</p>

<table class="page-item-table">
<colgroup>
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
</colgroup>
<thead class="sticky-top">   
<th class="sticky-top text-center small">
1 (very unlikely)
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
7 (very likely)
</th>
</thead>

<tbody>  
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="1" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="2" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="3" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="4" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="5" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="6" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate1" value="7" required>
</label>
</td>
</tbody>
</table>




<p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
In your judgment, how likely do you think it is that climate change will have very harmful, long-term impacts on our society?
</p>

<table class="page-item-table">
<colgroup>
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
<col style="width: 12%">
</colgroup>
<thead class="sticky-top">   
<th class="sticky-top text-center small">
1 (very unlikely)
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
7 (very likely)
</th>
</thead>

<tbody>  
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="1" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="2" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="3" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="4" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="5" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="6" required>
</label>
</td>
<td class="text-center">
<label style="height: 100%; padding: 10px 0">
<input type="radio" name="probabilityClimate2" value="7" required>
</label>
</td>
</tbody>
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
  socioDemo: `
  <header>
    <h2>
    Please answer the following questions about yourself:
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    
    <p class="text-left">Before the study ends, we would like to ask you to provide a few details about yourself.</p>
    
    <form id="demography">

    



      <table>
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
  Continue &rarr;
</button>

</footer>
  `,
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
  CETinfo: `
  <header>
    <h2>
    Information on the following task
    </h2>
  </header>
  
    <form id="page-form" style="display: block;" autocomplete="off">
    </form>


    <main class="content-horizontal-center content-vertical-center">
    <div class="w-l text-justify">
    <i>Note: you may need to scroll down to read the full text.</i>
        <br>
        <br>
        <section>
        In the following task, you are asked to make 25 decisions (1 per trial) that can influence a bonus payment. In each of the 25 trials, you will be asked to choose between 2 general options.
        </section>
        <br>
        <section>
         <b>Option A</b> will always include a way for you to receive a financial bonus, but it has a real consequence for the environment. 
         Choosing option A will give you a financial reward (with varying amounts between 20 cents and 1 Dollar), but it will usually result in C02 (carbon dioxide) emissions (CO2, between 0 lbs. and 19.85 lbs.). 
         C02 emissions are seen as a key contributor to climate change and scientists around the world agree that climate change can only be mitigated if CO2 emissions are dramatically reduced. 
         To help you understand the consequence, each decision will "translate" the amount of carbon dioxide emitted by your choice into the emissions caused by driving an average American vehicle. 
        </section>
        <br>
        <section>
        Choosing <b>Option B</b>, on the other hand, will lead to a bonus payment of zero, but will also not cause any emissions of carbon dioxide. 
        </section>
        <br>
        <section>
        In each of the 25 trials, you have <b>15 seconds to make your decisions</b>. If you do not make a decision within the 15 seconds, the screen will automatically continue to the next trial 
        and you will not receive a bonus payment for the trial in which you did not make a decision.
        </section>
        <br>
        <section>
        In general, each trial will look like this: 
        </section>
        <ul>
        <li>
        <b>Option A: You receive a bonus payment of 40 cents and cause CO2 emissions of 4.46 lbs. (which is equivalent of driving 7.24 miles).</b>
        </li>
        <li>
        <b>Option B: You receive no bonus and no CO2 is emitted.</b>
         </li>
    </ul>
    <br>
    <section>
    The important thing is that all emissions <b>are real and will actually have an impact on the planet</b>. 
    This is made possible by the following instrument: The researchers are in possession of CO2 certificates that permit the emission of carbon dioxide. If the option to forego the bonus is chosen (option B in each experiment), 
    the certificate equivalent to the emissions associated with option A is withdrawn from the market and destroyed. 
    This is made possible by professional service providers from whom the researchers buy these certificates. <b>So, your decision will have an actual and real impact on the environment.</b> It is <u><b>NOT</b></u> a hypothetical decision.
    </section>
    <br>
    <section> 
    Your actual bonus payment and actual emissions will be based on one of your choices, randomly selected from your 25 decisions. Your actual bonus will therefore vary between 0 cents and 1 Dollar.
    </section>
    <br>
    <section>    
    Before you make your first decision, you will have the opportunity to <b>complete a practice trial and answer a comprehension question</b> to help you familiarize yourself with the decision screen. 
    Unlike in the 25 trials, the practice trial will have no bonus and emission consequences and will not be time-restricted. 
    </section>
    </div>
  </main>
  


  <footer class="content-vertical-center content-horizontal-right">
  <div class="w-l text-justify">
  Do not press "Continue" until you have read the text carefully. The "Continue" button is blocked for 15 seconds.
  </div>
  &nbsp; <button id="continue" type="submit" form="page-form">
  Continue &rarr;
  </button>
  </footer>
  `,
  CETpractice: `
  <header>
  <h3>Practice trial - Please chooce between Option A and Option B:</h3>
</header>
<br>
  <!-- CET -->
  <div class="page-item page-item-likert" style="margin-left:40%; margin-right: 40%">
  <form id="ratingBasalAttributes">
      <div style="display: flex; justify-content: space-around">
      <!-- Option A -->
      <label>
      <table align="center" border="1" cellpadding="1" cellspacing="1" style="width:400px; margin-right:50px;">
   <tbody>
    <tr>
     <td colspan="2" style="text-align: center;"><strong>Option A</strong></td>
    </tr>
    <tr>
     <td>&nbsp;CO2 Emissions<br/>`
     + '&nbsp;<strong> 4.46 lbs. CO2 <br/>(~7.24 car miles)</strong></td>' + `
     <td>&nbsp;Bonus payment<br/>
     `
     + '   &nbsp;<strong>40 Cent<br/><br/></strong></td>' + `
    </tr>
    <tr>
     </tbody>
  </table>
  <input type="radio" name="choosenOption_test" value="optionA" id="optionA" style="transform: scale(2); margin-top: 10px;">
  </label>
  
  <br>
  
  <!-- Option B -->
  <label>
  <table align="center" border="1" cellpadding="1" cellspacing="1" style="width:400px;">
  <tbody>
  <tr>
  <td colspan="2" style="text-align: center;"><strong>Option B</strong></td>
  </tr>
  <tr>
  <td>&nbsp;CO2 Emissions<br/>`
  + '&nbsp;<strong> 0 lbs. CO2 <br/>(~0 car miles)</strong></td>' + `
  <td>&nbsp;Bonus payment<br/>
  `
  + '   &nbsp;<strong>0 Cent<br/><br/></strong></td>' + `
  </tr>
  <tr>
  </tbody>
  </table>
  <input type="radio" name="choosenOption_test" value="optionB" id="optionB" style="transform: scale(2); margin-top: 10px;">
  </label>
  </div>
      </div>
    </form>
  <br>
      <button id="continue" type="submit" form="ratingBasalAttributes">
      Please click on one of the options to continue
    </button>
  `,
  CETcontrolQUestion: `
  <header>
  <h3>Question:</h3>
</header>
<br>
  <!-- CET -->
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify">

      <form id="page-form" style="display: block;" autocomplete="off">
          <!-- BEGIN multiple choice -->
          <div class="page-item page-item-radio" id="page-item-ques_dummycam">
              <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
              Control Question: Does the decision upon which your bonus depends have a real impact on the environment? 
              </p>
              <p class="small text-muted hide-if-empty" style="margin: 0.25rem 0">
             Please select one of the following options.
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
                              <input type="radio" name="CET_control" value="1" id="CET_control"
                                  required>
                          </td>
                          <td>
                              <label for="CET_control" class="text-left">
                             Yes
                              </label>
                          </td>
                      </tr>
                      <!--ans2-->
                      <tr>
                          <td>
                              <input type="radio" name="CET_control" value="0" id="CET_control2"
                                  required>
                          </td>
                          <td>
                              <label for="CET_control2" class="text-left">
                             No
                              </label>
                          </td>
                      </tr>

                  </tbody>
              </table>
          </div>
          <!-- END multiple choice -->
      </form>
      <br>
<br>
      Please proceed with the survey once you are ready for the first trial: Remember you have 15 seconds for each trial to make your decision. 
  </div>
</main>

  <footer class="content-vertical-center content-horizontal-right">
    <button id="continue" type="submit" form="page-form">
    Continue &rarr;
    </button>
  </footer>
  `,


  
}

