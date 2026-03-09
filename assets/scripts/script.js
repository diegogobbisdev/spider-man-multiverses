function handleMouseEnter() {
  this.classList.add('s-card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

function getControllerButtons() {
  return Array.from(document.querySelectorAll('.s-controller__button'));
}

function selectCarouselItem(selectedButtonElement) {
  if (!selectedButtonElement) return;

  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.s-cards-carousel');
  const transform = carousel.style.transform || 'translateZ(-40vw) rotateY(0deg)';
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = rotateY
    ? transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`)
    : `${transform} rotateY(${rotateYDeg}deg)`;

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.s-controller__button--active');
  if (activeButtonElement) {
    activeButtonElement.classList.remove('s-controller__button--active');
  }
  selectedButtonElement.classList.add('s-controller__button--active');
}

function handleCarouselKeyboardNavigation(event) {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

  const buttons = getControllerButtons();
  const activeButton = document.querySelector('.s-controller__button--active');
  const activeIndex = buttons.indexOf(activeButton);
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  const nextIndex = (activeIndex + direction + buttons.length) % buttons.length;
  const nextButton = buttons[nextIndex];

  selectCarouselItem(nextButton);
  nextButton.focus();
}

function addEventListenersToControllerButtons() {
  const buttons = getControllerButtons();

  buttons.forEach((button) => {
    button.addEventListener('click', () => selectCarouselItem(button));
  });
}

function initializeHomePage() {
  addEventListenersToCards();
  addEventListenersToControllerButtons();
  document.addEventListener('keydown', handleCarouselKeyboardNavigation);
}

document.addEventListener('DOMContentLoaded', initializeHomePage, false);