import { runGradients } from './color.js';
import {
  names,
  used,
  getRandomName as getRandom,
  refreshUnused
} from './randomName.js';
import { appendElements } from './appendElements.js';
// // div.classList.add('animated', 'bounceIn');

const body = document.querySelector('body');

const modal = document.querySelector('.modal');
const deleteModalButton = document.querySelector('.delete');
const modalContent = document.querySelector('.content');
const currentName = document.querySelector('.currentName');
const title = document.querySelector('.modal-card-title');
const loading = document.querySelector('.loading');

const helpCommands = [
  'Press <enter> or <click> anywhere to get the next random name',
  'Press <q> to get list of names that have been generated before',
  'Press <spacebar> to get list of names that have yet to be generated',
  'Press <r> to reset the yet to be generated list of names to its initial state'
];

const animateName = () => {
  currentName.classList.add('bounceIn');
  loading.classList.remove('hide');
  currentName.addEventListener('animationend', () => {
    currentName.classList.remove('bounceIn');
    loading.classList.add('hide');
  });
};

const renderNewName = () => {
  body.style.background = runGradients(2)[0];
  currentName.textContent = getRandom();
  animateName();
};

const renderModalUnusedNames = () => {
  title.textContent = 'List of yet to be generated names';
  modal.classList.toggle('is-active');
  modalContent.innerHTML = '';
  appendElements(modalContent, names);
};

const renderModalUsedNames = () => {
  title.textContent = 'List of names that are generated before';
  modal.classList.toggle('is-active');
  modalContent.innerHTML = '';
  appendElements(modalContent, used);
};

const renderModalHelpCommands = () => {
  title.textContent = 'List of commands';
  modal.classList.toggle('is-active');
  modalContent.innerHTML = '';
  appendElements(modalContent, helpCommands);
};

const refreshList = () => {
  refreshUnused();
  currentName.textContent = 'Names has been refreshed';
  animateName();
};

window.addEventListener('keypress', (event) => {
  switch (event.keyCode) {
    case 13:
      renderNewName();
      break;
    case 32:
      renderModalUnusedNames();
      break;
    case 113:
      renderModalUsedNames();
      break;
    case 119:
      renderModalHelpCommands();
      break;
    case 114:
      refreshList();
      break;
  }
});

body.addEventListener('click', () => {
  if (!modal.classList.contains('is-active')) {
    renderNewName();
  }
});

window.addEventListener('click', (event) => {
  if (modal.classList.contains('is-active')) {
    modal.classList.remove('is-active');
  }
});

deleteModalButton.addEventListener('click', (event) => {
  event.stopPropagation();
  modal.classList.remove('is-active');
});
