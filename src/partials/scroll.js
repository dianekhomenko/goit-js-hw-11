import { refs } from '..';

export function scrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

export const showOnPx = 100;

export const scrollContainer = () => {
  return document.documentElement || document.body;
};

export const scrollEvent = document.addEventListener('scroll', () => {
  if (scrollContainer().scrollTop > showOnPx) {
    refs.top.classList.remove('hidden');
  } else {
    refs.top.classList.add('hidden');
  }
});

export const goToTop = () => {
  document.body.scrollIntoView({
    behavior: 'smooth',
  });
};
