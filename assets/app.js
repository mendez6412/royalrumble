let entrants = _.shuffle(superstars.wrestlers)

function revealEntrant(entrant) {
  let selection = _.find(entrants, {'id': _.toNumber(entrant.getAttribute('value'))})
  console.log(selection)
}

let entryCounter = 0
let row = 1
_.forEach(entrants,(entry) => {
  entryCounter ++
  currentRow = "#row" + row
  entry.id = entryCounter
  $( "<div class='col-sm-2'><div class='card'  value=" + entry.id + " onClick=revealEntrant(this)><div class='card-block'><h3 class='card-title'>WRESTLE</h3></div></div></div>" ).appendTo( currentRow );
  if(entryCounter % 5 === 0){
      row ++
  }
})
