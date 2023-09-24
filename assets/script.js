let presentDay = dayjs();
let currentTime = dayjs().format("HH");
const save = $(".saveBtn");
let todo = [];

//displays the current date
$("#currentDay").text(presentDay.format("dddd, MMMM D YYYY"));

//Gets the value entered by the user when they click the save button and saves it as an array.
function submit() {
  // let todo = [];
  for (let i = 0; i < 9; i++) {
    todo[i] = $(`#hr${i}`).val();
  }
  //stores the data the user submits as an array in local storage.
  localStorage.setItem("todoList", JSON.stringify(todo));
}

function init() {
  // Computer gets the stored results from localStorage.
  let todo = JSON.parse(localStorage.getItem("todoList"));
  // If a todo was retrieved from localStorage it will update the todo array to it.
  if (todo !== null) {
    for (let i = 0; i < todo.length; i++) {
      document.getElementById(`hr${i}`).value = todo[i];
    }
  }
}

//This selects all the row classes gets the id attribute of the current element and converts it to an integer. It uses that integer to compare the currentTime to see which class to add.
$(document).ready(function () {
  $(".row").each(function () {
    let timeSlot = $(this).attr("id");
    let i = parseInt(timeSlot);

    if (i < currentTime) {
      $(this).addClass("past");
    }
    if (i == currentTime) {
      $(this).addClass("present");
    }
    if (i > currentTime) {
      $(this).addClass("future");
    }
  });
});


//displays the current time to the user
function updateTime() {
  let clockElement = $("#currentTime");
  clockElement.text("Current Time: " + dayjs().format("hh:mm:ss A"));
}

setInterval(updateTime, 1000);

//reloads the page after evvery hour so that the color for the past, present, and future will update
function refreshPage() {
  let nextHour = presentDay.add(1, "hour").startOf("hour");
  let timeToNextHour = nextHour.diff(presentDay);
  setTimeout(function () {
    location.reload();
  }, timeToNextHour);
}

//Clears localstorage everyday for the new day
function resetData() {
  if (currentTime >= 24) {
    localStorage.clear();
  }
}
resetData();

//When th user clicks the save button starts the submit function
save.on("click", submit);

init();
refreshPage();
