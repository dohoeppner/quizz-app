const inactiveBookmark = document.querySelector(
  '[data-js="inactive-bookmark"]'
);
const activeBookmark = document.querySelector('[data-js="active-bookmark"]');

inactiveBookmark.addEventListener('click', () => {
  activeBookmark.classList.add('bookmark--visible');
  activeBookmark.classList.remove('bookmark--hidden');
  inactiveBookmark.classList.add('bookmark--hidden');
  inactiveBookmark.classList.remove('bookmark--visible');
});

activeBookmark.addEventListener('click', () => {
  inactiveBookmark.classList.add('bookmark--visible');
  inactiveBookmark.classList.remove('bookmark--hidden');
  activeBookmark.classList.add('bookmark--hidden');
  activeBookmark.classList.remove('bookmark--visible');
});
