const textObj = {
  mixedQuestions1: `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    <form id="demography">



      <div class="page-item page-item-likert">
            <p class="font-weight-bold" style="margin: 1rem 0 0.25rem; font-size: 20px;">
            Bitte geben Sie an, wie besorgt Sie über den Klimawandel sind und wie oft Sie darüber nachdenken.
            </p>
            <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
            Beantworten Sie bitte jede Aussage, auch wenn Sie sich nicht ganz sicher sind, was Sie antworten sollen.
            </p>
            <p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
            Wie besorgt sind Sie über den Klimawandel?
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
1 (überhaupt nicht besorgt)
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
7 (sehr besorgt)
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
Wie oft machen Sie sich Sorgen über die potenziell negativen Folgen des Klimawandels?
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
1 (sehr selten)
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
7 (sehr oft)
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
  Fortfahren &rarr;
</button>

</footer>
  `,
  mixedQuestions2: `
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    <form id="demography">



      <div class="page-item page-item-likert">
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem; font-size: 20px;">
Bitte geben Sie an, für wie wahrscheinlich Sie die Aussagen halten.
</p>
<p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
Beantworten Sie bitte jede Aussage, auch wenn Sie sich nicht ganz sicher sind, was Sie antworten sollen.
</p>
<p class="font-weight-bold" style="margin: 1rem 0 0.25rem">
Für wie wahrscheinlich halten Sie es, dass Sie im Laufe ihres Lebens aufgrund des Klimawandels ernsthafte Bedrohungen für Ihre Gesundheit oder Ihr allgemeines Wohlbefinden erleben werden? 
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
1 (überhaupt nicht wahrscheinlich)
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
7 (sehr wahrscheinlich)
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
Für wie wahrscheinlich halten Sie es, dass der Klimawandel sehr schädliche, langfristige Auswirkungen auf unsere Gesellschaft haben wird? 
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
1 (überhaupt nicht wahrscheinlich)
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
7 (sehr wahrscheinlich)
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
  Fortfahren &rarr;
</button>

</footer>
  `,
  socioDemo: `
  <header>
    <h2>
    Bitte beantworten Sie die folgenden Fragen zu Ihrer Person:
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center">
  <div class="w-l text-justify" style="display: block">
    
    <p class="text-left">Before the study ends, we would like to ask you to provide some information about yourself.</p>
    
    <form id="demography">

    



      <table>
               <!-- Education    -->
        <tr style="height: 100px">
        <td >
        Bitte geben Sie Ihren höchsten Studienabschluss an:
          </td>
          <td>
            <select name="education" required style="width: 300px">
              <option value="" selected>
              -- Bitte wählen Sie --
              </option>
              <option value="no">kein Abschluss</option>
              <option value="highschool">Abitur</option>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
              <option value="phd">Doktor</option>              
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
            In der Politik spricht man manchmal von "links" und "rechts". Ordnen Sie sich selbst auf dieser Skala ein, wobei 0 für links und 10 für rechts steht:
            </p>
            <span style="margin-left: 2%; display: inline-block; width: 80px; font-size: 14px;">
Links(0)
</span>
<span style="float: right; display: inline-block; width: 50px; font-size: 14px;">
Rechts(10)
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
          Unabhängig davon, ob Sie einer bestimmten Religion angehören, wie religiös würden Sie sich selbst einschätzen?
          </p>
          <span style="margin-left: 2%; display: inline-block; width: 80px; font-size: 14px;">
Überhaupt nicht religiös(0)
</span>
<span style="float: right; display: inline-block; width: 50px; font-size: 14px;">
Sehr religiös(10)
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
  feedbackQues: `
  <header>
    <h2>
    Wenn Sie möchten, beantworten Sie bitte diese letzte Frage:
    </h2>
  </header>
  
  <main class="content-horizontal-center content-vertical-center" >
  <div class="w-l">
    <form id="page-form" style="display: block;" autocomplete="off">
<!-- multiline text text --> 
<div class="page-item page-item-textarea" id="page-item-feedback_critic">
  <p class="text-left font-weight-bold" style="margin: 1rem 0 0.25rem">
  Haben Sie Feedback oder Kritik an der Online-Studie?
  </p>
  <p class="text-left small text-muted hide-if-empty" style="margin: 0.25rem 0">
  Jegliche Kritik oder Verbesserungsvorschläge helfen uns sehr, zukünftige Studien zu verbessern.
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
}


