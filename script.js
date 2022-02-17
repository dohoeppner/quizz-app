const answerButton = document.querySelector('[data-js="toggle-answer"]');
const answer = document.querySelector('.card__answer');

answerButton.addEventListener('click', () => {
  answer.classList.toggle('card__answer--visible');
});

const activeBookmark = document.querySelector('[data-js="active-bookmark"');
const inactiveBookmark = document.querySelector('[data-js="inactive-bookmark"');

activeBookmark.addEventListener('click', () => {
  inactiveBookmark.classList.toggle(activeBookmark);
});
