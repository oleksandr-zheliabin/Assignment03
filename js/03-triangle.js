// Write a loop that displays the following triangle within a console window:

// #
// ##
// ###
// ####
// #####
// ######
// #######

let symbol = '#'

for (let i = 1; i <= 7; i++) {

    console.log(symbol)
    symbol = symbol + '#'
}