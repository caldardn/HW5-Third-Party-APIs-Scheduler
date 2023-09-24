let presentDay = dayjs();
let displayTime = dayjs().format("hh:mm A");
let currentTime = dayjs().format("HH");
let refreshBtn = $("#refresh");
const save = $(".saveBtn");
let todo = [];

$("#currentDay").text(presentDay.format("dddd, MMMM D"));

const submit = function () {
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
  console.log(todo[0]);
  // Stringify and set key in localStorage to todo array
  localStorage.setItem("list", JSON.stringify(todo));
};

function init() {
  // Computer gets stored results from localStorage.
  let todoActivity = JSON.parse(localStorage.getItem("list"));
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

function updateTime() {
  let clockElement = $("#currentTime");
  clockElement.text("Current Time: " + dayjs().format("hh:mm:ss A"));
}

setInterval(updateTime, 1000);

function refreshPage(){
  let nextHour = presentDay.add(1, 'hour').startOf('hour')
  let timeToNextHour = nextHour.diff(presentDay)
  setTimeout(function(){
    location.reload()
  }, timeToNextHour)
}

save.on("click", submit);

init();
refreshPage()