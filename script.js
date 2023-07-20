// JavaScript to toggle the visibility of the filter card when the filter button is clicked
const filterButton = document.getElementById('showFilters');
const filterCard = document.querySelector('.filter_cardd');

filterButton.addEventListener('click', () => {
  filterCard.style.display = filterCard.style.display === 'block' ? 'none' : 'block';
});
