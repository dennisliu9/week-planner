var $daySelectorRow = document.querySelector('#day-selector-row');
var $scheduleMessage = document.querySelector('#schedule-message');
var daysData = [];

$daySelectorRow.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    var selectedDay = event.target.textContent;
    daysData = data[selectedDay];
    var sortedDaysData = daysData.sort((a, b) => (a.time > b.time) ? 1 : -1);
    $scheduleMessage.textContent = 'Scheduled Events for ' + selectedDay;
  }
  var $tableBody = document.querySelector('tbody');

  for (var rowIdx = 0; rowIdx < $tableBody.children.length; rowIdx++) {
    if (sortedDaysData[rowIdx] === undefined) {
      $tableBody.children[rowIdx].children[0].textContent = '';
      $tableBody.children[rowIdx].children[1].textContent = '';
    } else {
      $tableBody.children[rowIdx].children[0].textContent = sortedDaysData[rowIdx].time;
      $tableBody.children[rowIdx].children[1].textContent = sortedDaysData[rowIdx].desc;
    }
  }
});

var dataEntries = localStorage.getItem('data-entries');
var data = {};
if (dataEntries !== null) {
  data = JSON.parse(dataEntries);
} else {
  data = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
  };
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('data-entries', dataJSON);
});

var $modal = document.querySelector('.modal-screen');
var $entryButton = document.querySelector('#add-entry');
// var $modalScreen = document.querySelector('.modal-screen');
var $submit = document.querySelector('#submit-button');
var $form = document.querySelector('#entry-form');

$entryButton.addEventListener('click', function (event) {
  $modal.classList.remove('invisible');
  // console.log('button working :P', $entryButton);
  // console.log($modal.classList);
});

$submit.addEventListener('click', function (event) {
  var dayOfWeek = $form.elements.day.value;
  var entryObj = {
    time: $form.elements.time.value,
    desc: $form.elements.desc.value
  };

  data[dayOfWeek].push(entryObj);

  $modal.classList.add('invisible');
});

// $modalScreen.addEventListener('click', function (event) {
//   $modal.classList.add('invisible');
// });
