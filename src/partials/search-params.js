import { refs } from '..';
import Notiflix from 'notiflix';

export function emptySearch() {
  refs.load.classList.add('hide');
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

export function endSearch() {
  refs.load.classList.add('hide');
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}

export function onSubmit() {
  refs.gallery.innerHTML = '';
  let currentPage = 1;
  refs.searchBar.classList.remove('full-search');
  refs.sortlabel.classList.remove('hide');
}
