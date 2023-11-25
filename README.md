# livMatS studies 2023


## list of 4 livMatS studies

*The list will be ordered alphabatically. For every study there is an identical named folder in the "Studies" and "Analyses" folders:* 

- [basal attributes - study files](https://github.com/FennStatistics/livmats-studies/tree/main/Analyses/basalAttributes) (C.A.M.E.L. version 2.0)
- [basal attributes - analysis files](https://github.com/FennStatistics/livmats-studies/tree/main/Studies/basalAttributes) (CAM-App version 2.0)
    + for a publication (working title): <i>Using basal attributes to identify key properties to increase the acceptance of new material systems</i>
- [CAMspiracy - study files](https://github.com/FennStatistics/livmats-studies/tree/main/Analyses/CAMspiracy) (C.A.M.E.L. version 2.0)
- [CAMspiracy - analysis files](https://github.com/FennStatistics/livmats-studies/tree/main/Studies/CAMspiracy) (CAM-App version 2.0)
- [S1_SRW - study files](https://github.com/FennStatistics/livmats-studies/tree/main/Analyses/S1_SRW)
- [S1_SRW - analysis files](https://github.com/FennStatistics/livmats-studies/tree/main/Studies/S1_SRW)
- [S2_softRobots - study files](https://github.com/FennStatistics/livmats-studies/tree/main/Analyses/S2_softRobots) (C.A.M.E.L. version 2.0)
- [S2_softRobots - analysis files](https://github.com/FennStatistics/livmats-studies/tree/main/Studies/S2_softRobots) (CAM-App version 2.0)

to motivate the "basal attributes" and "S1 SRW" studies we conducted a World Café:

- [World Café - study files](https://github.com/FennStatistics/livmats-studies/tree/main/Studies/world%20cafe)
- [World Café - analysis files](https://github.com/FennStatistics/livmats-studies/tree/main/Analyses/world%20cafe)

## How to download / run these studies: 

- online-studies were set up "on scratch" using partly [lab.js](https://lab.js.org/) functions and other .js libraries like [jatos.js](https://www.jatos.org/jatos.js-Reference.html) or [jQuery.js](https://jquery.com/), and set up online using local [JATOS server](https://www.jatos.org/)
- all the single studies folders contain "exportJatos" file, which can be uploaded to any public accessible JATOS Server (e.g. https://mindprobe.eu/)
- if you want to change / run the study locally just open the respective study folders with [Visual Studio Code](https://code.visualstudio.com/) (it is recommended to install the "Live Server" extension)


## How to analyse the resulting data of these studies:

- **analysis survey data**: install R / R Studio (and for some analyses Python), download and run the scripts (mainly programmed in the [Quarto](https://quarto.org/) framework)
- **analysis CAM data**: a CAM-App was programmed in Shiny using the R environment (+ Python modules) to analyze Cognitive-Affective Map data:
    + locally:
        + download the CAM-App from the GitHub repository: https://github.com/Camel-app/DataAnalysisR (use .git or download it manutally -> green button "<>Code" -> "Download ZIP")
        + if not already installed, download R and RStudio
        + open the file app.R, install packages if needed, click on "Run App"
    + online (! disadvantage: App is way slower):
        + open the link: https://fennapps.shinyapps.io/CAMtools_CAMapp/



## Acknowledgments

All studies have been programmed and analysed by [Julius Fenn](https://www.psychologie.uni-freiburg.de/Members/fenn). 


Study Designs and possibilities of analyses have been discuseed with (ordered alphabatically)

* Falk Tauber
* Irina Monno
* Joscha Teichmann
* Lara Nagel
* Lisa Reuter
* Louisa Estadieu
* Magdalena Moy
* Michael Gorki
* Oliver Müller
* Paul Sölder
* Philipp Höfele
* Shelly Levy-Tzedek