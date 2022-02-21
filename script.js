// grabbing all the cards
const cards = document.querySelectorAll('[data-js="card"]');

// foreach card attach a function with current card in argument
cards.forEach(currentCard => {
  // grabbing the button inside each card
  const button = currentCard.querySelector('.button__control');

  // grabbing the answer inside each card
  const answer = currentCard.querySelector('.card__answer');

  // attach event listener on the button inside each card
  button.addEventListener('click', event => {
    event.preventDefault();

    // toogle the class of the answer in the card
    answer.classList.toggle('card__answer--visible');
  });
});

// garbbing all the button queryselectorall
// grabbing all the answers queryselectorall
/**
 * allButtons.forEach((btn, index) => {
 *  btn.addEventListener
 *      => answers[index].classList.toggle
 * })
 *
 */
