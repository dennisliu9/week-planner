var data = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

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
