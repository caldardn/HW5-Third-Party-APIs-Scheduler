let presentDay = dayjs()


let displayTime = dayjs().format('hh:mm A')
let currentTime = dayjs().format('HH')
let refreshBtn = $('#refresh');
console.log(currentTime)

$('#currentDay').text(presentDay.format('dddd, MMMM D'));
$('#currentTime').text("Current Session Time: " + displayTime)
const save = $('.saveBtn')

let todo = []

const submit = function (){
    
    // todo array
    todo[0] = $("#hr9").val();
    todo[1] = $("#hr10").val();
    todo[2] = $("#hr11").val();
    todo[3] = $("#hr12").val();
    todo[4] = $("#hr1").val();
    todo[5] = $("#hr2").val();
    todo[6] = $("#hr3").val();
    todo[7] = $("#hr4").val();
    todo[8] = $("#hr5").val();
    todo[9] = $("#hr8").val();
    // Stringify and set key in localStorage to todo array
    localStorage.setItem("todo", JSON.stringify(todo));
}

function init() {
  // Computer gets stored results from localStorage.
  let todoActivity = JSON.parse(localStorage.getItem("todo"));
  // If todo were retrieved from localStorage, update the todo array to it.
  if (todoActivity !== null) {
      todo = todoActivity;
      $('textarea[id="hr9"]').val(todo[0]);
      $('textarea[id="hr10"]').val(todo[1]);
      $('textarea[id="hr11"]').val(todo[2]);
      $('textarea[id="hr12"]').val(todo[3]);
      $('textarea[id="hr1"]').val(todo[4]);
      $('textarea[id="hr2"]').val(todo[5]);
      $('textarea[id="hr3"]').val(todo[6]);
      $('textarea[id="hr4"]').val(todo[7]);
      $('textarea[id="hr5"]').val(todo[8]);
      $('textarea[id="hr8"]').val(todo[9]);
    } 
  }


  $(document).ready(function(){

    $('.row').each(function(){

      let timeSlot = $(this).attr('id')
      var i = parseInt(timeSlot)
      
      if(i<currentTime){$(this).addClass('past')}
      if(i==currentTime){$(this).addClass('present')}
      if(i>currentTime){$(this).addClass('future')}

    })

  })

  var refreshPage = function() {
    location.reload();
  
  }
  $('#refresh').on('click', refreshPage);

  save.on('click', submit)
  init()



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.