let entrants = _.shuffle(superstars.wrestlers)

function revealEntrant(entrant) {
  let selection = _.find(entrants, {'id': _.toNumber(entrant.getAttribute('value'))})
  console.log(selection, $(entrant))
  $(entrant).addClass('unavailable').removeClass('available')
  $(entrant).find("h3").removeClass('hidden')
}

let entryCounter = 0
let row = 1
_.forEach(entrants,(entry) => {
  entryCounter ++
  currentRow = "#row" + row
  entry.id = entryCounter
  $( "<div class='col-sm-2'><div class='card available' value=" + entry.id + " onClick=revealEntrant(this) data-toggle='modal' data-target='#exampleModal'><div class='card-block'><h3 class='card-title hidden'>" + entry.name + "</h3></div></div></div>" ).appendTo( currentRow );
  if(entryCounter % 5 === 0){
      row ++
  }
})
