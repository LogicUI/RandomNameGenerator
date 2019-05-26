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
const loader = document.querySelector('.loading');

const helpCommands = [
  'Press <enter> or <click> anywhere to get the next random name',
  'Press <q> to get list of names that are already called',
  'Press <spacebar> to get list of names that have not  been called',
  'Press <r> to reset the list of names that have not been called'
];

const animateName = () => {
  currentName.classList.add('bounceIn');
  loader.classList.remove("hide");
  currentName.addEventListener('animationend', () => {
    currentName.classList.remove('bounceIn');
    loader.classList.add("hide");
  });
};

const renderNewName = () => {
  body.style.background = runGradients(2)[0];
  currentName.textContent = getRandom();
  animateName();
};

const renderModalUnusedNames = () => {
  title.textContent = 'List of Unused Names';
  modal.classList.toggle('is-active');
  modalContent.innerHTML = '';
  appendElements(modalContent, names);
};

const renderModalUsedNames = () => {
  title.textContent = 'List of Used Names';
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

window.addEventListener('click', () => {
  renderNewName();
});

deleteModalButton.addEventListener('click', () => {
  modal.classList.remove('is-active');
});
