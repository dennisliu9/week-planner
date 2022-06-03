var $modal = document.querySelector('.modal-screen');
var $entryButton = document.querySelector('#add-entry');
var $modalScreen = document.querySelector('.modal-screen');
var $submit = document.querySelector('#submit-button');

var data = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};

$entryButton.addEventListener('click', function (event) {
  $modal.classList.remove('invisible');
  // console.log('button working :P', $entryButton);
  // console.log($modal.classList);
});

$submit.addEventListener('click', function (event) {
  $modal.classList.add('invisible');
});

// $modalScreen.addEventListener('click', function (event) {
//   $modal.classList.add('invisible');
// });
