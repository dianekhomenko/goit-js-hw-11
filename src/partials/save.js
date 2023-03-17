const save = document.querySelector('.save');


let storage = localStorage.getItem('savedId');
let savedPhotos = [];

function onClickSave() {
  if (event.target.classList.contains('saved')) {
    onUnsave();
  } else onSave();
}

function onSave() {
  event.target.classList.add('saved');
  let itemId = event.target.parentNode.dataset.id;
  savedPhotos.push(itemId);
  console.log(savedPhotos);
  
  localStorage.setItem('savedId', savedPhotos);
}

function onUnsave() {
  event.target.classList.remove('saved');
  let itemId = event.target.parentNode.dataset.id;

  let ind = savedPhotos.findIndex(item => item === itemId);
  savedPhotos.splice(ind, 1);
  console.log(savedPhotos);
  localStorage.setItem('savedId', savedPhotos);
}
