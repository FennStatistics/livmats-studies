## https://labjs.readthedocs.io/en/latest/learn/deploy/3c-jatos.html
## https://labjs.readthedocs.io/en/latest/learn/deploy/3-third-party.html


# sets the directory of location of this script as the current directory
setwd(dirname(rstudioapi::getSourceEditorContext()$path))

rm(list=ls(all=TRUE))
graphics.off()



############################################################################
# load packages, data
############################################################################
################
# packages
################
# This code relies on the pacman, tidyverse and jsonlite packages
require(pacman)
p_load('xlsx', 'jsonlite', 'stringr')



################
# data
################
dir()
items <- read.xlsx2(file = "basal attributes Reuter 2019, Conrad 2023.xlsx", sheetIndex = 1)


############################################################################
# to JSON
############################################################################
json_string_Attribut <- toJSON(x = items$Attribut)
json_string_Attribut_English <- toJSON(x = items$Attribut_English)

json_string_Attribut
json_string_Attribut_English


# toJSON(x = items)
toJSON(x = items, simplifyVector = FALSE)