import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const parcedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');

formEl.addEventListener('submit', onFormSubmit);
inputEl.addEventListener('input', throttle(onInput, 500));
textareaEl.addEventListener('input', throttle(onInput, 500));

populateFormInput();
populateFormTextarea();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  const message = e.target.value.trim();

  formData[e.target.name] = message;

  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormInput() {
  if (parcedData) {
    inputEl.value = parcedData.email || '';
  }
}

function populateFormTextarea() {
  if (parcedData) {
    textareaEl.value = parcedData.message || '';
  }
}
