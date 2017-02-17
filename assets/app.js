let entrants = _.shuffle(superstars.wrestlers)

function revealEntrant(entrant) {
  let selection = _.find(entrants, {'id': _.toNumber(entrant.getAttribute('value'))})
  if($(entrant).hasClass('available')){
    $(entrant).addClass('unavailable').removeClass('available')
    $(entrant).find("img").removeClass('hidden')
    $('#modalTitle').text(selection.name)
    $('#youtube').attr('src', selection.song)
  }
  else{
    $(entrant).attr('data-toggle', '')
  }
}

let entryCounter = 0
let row = 1
_.forEach(entrants,(entry) => {
  entryCounter ++
  currentRow = "#row" + row
  entry.id = entryCounter
  $( "<div class='col-lg-2'><div class='card available' value=" + entry.id + " onClick=revealEntrant(this) data-toggle='modal' data-target='#myModal'><img class='card-img img-fluid hidden' src='" + entry.image + "' alt='Card image'></div></div>" ).appendTo( currentRow );
  if(entryCounter % 5 === 0){
      row ++
  }
})

$("#myModal").on('hidden.bs.modal', (e) => {
    var video = $('#youtube').attr('src')
    $('#youtube').attr('src',"")
});
