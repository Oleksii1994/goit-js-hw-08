import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onInput, 500));

populateFormInput();

function onFormSubmit(e) {
  e.preventDefault();
  if (textareaEl.value === '' || inputEl.value === '') {
    return;
  }
  console.log(populateFormInput());
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
  formData.email = inputEl.value.trim();
  formData.message = textareaEl.value.trim();

  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormInput() {
  const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (parsedData) {
    (inputEl.value = parsedData.email || ''),
      (textareaEl.value = parsedData.message || '');
  }
  return parsedData;
}
