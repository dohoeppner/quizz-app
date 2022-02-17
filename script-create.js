const createQuestion = document.querySelector('[data-js="newQuestion"]');
const countOutput = document.querySelector('[data-js="count-output"]');
const counter = document.querySelector('[data-js="counter"]');
const maxLength = 240;

createQuestion.addEventListener('input', () => {
  const value = createQuestion.value;
  countOutput.textContent = value.length;
  if (value.length >= maxLength) {
    counter.classList.add('red-text');
  } else {
    counter.classList.remove('red-text');
  }
});
