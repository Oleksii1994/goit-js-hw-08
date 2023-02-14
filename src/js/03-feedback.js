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

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onInput(e) {
  formData.email = inputEl.value.trim();
  formData.message = textareaEl.value.trim();

  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFormInput() {
  if (parcedData) {
    return (
      (inputEl.value = parcedData.email || ''),
      (textareaEl.value = parcedData.message || '')
    );
  }
}
