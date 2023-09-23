let presentDay = dayjs()
$("#currentDay").text(presentDay.format('dddd, MMMM D'));

const save = $('.saveBtn')

let todo = []

const submit = function (event){
    
    // todo array
    todo[0] = $("#9").val();
    todo[1] = $("#10").val();
    todo[2] = $("#11").val();
    todo[3] = $("#12").val();
    todo[4] = $("#1").val();
    todo[5] = $("#2").val();
    todo[6] = $("#3").val();
    todo[7] = $("#4").val();
    todo[8] = $("#5").val();
    // Stringify and set key in localStorage to todo array
    localStorage.setItem("todo", JSON.stringify(todo));
}

function init() {
  // Computer gets stored results from localStorage.
  var todoActivity = JSON.parse(localStorage.getItem("todo"));
  // If todo were retrieved from localStorage, update the todo array to it.
  if (todoActivity !== null) {
      todo = todoActivity;
      $('textarea[id="9"]').val(todo[0]);
      $('textarea[id="10"]').val(todo[1]);
      $('textarea[id="11"]').val(todo[2]);
      $('textarea[id="12"]').val(todo[3]);
      $('textarea[id="1"]').val(todo[4]);
      $('textarea[id="2"]').val(todo[5]);
      $('textarea[id="3"]').val(todo[6]);
      $('textarea[id="4"]').val(todo[7]);
      $('textarea[id="5"]').val(todo[8]);
    } 
  }
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