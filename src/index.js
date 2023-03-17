import Notiflix from 'notiflix';
import axios from 'axios';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { emptySearch, endSearch, onSubmit } from './partials/search-params';
import { insertContent, lightbox } from './partials/generate-content';
import { goToTop, scrolling } from './partials/scroll';

let currentPage;
export const API_KEY = 'key=34409732-2eb98e59aad866aa53f09776f';
export const BASE_URL = 'https://pixabay.com/api/';
export const PARAMS =
  '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

export const refs = {
  input: document.querySelector('input'),
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  load: document.querySelector('.load-more'),
  searchBar: document.querySelector('.full-search'),
  top: document.querySelector('.back-to-top'),
  sorting: document.querySelector('.sorting'),
  sortlabel: document.querySelector('.sort-label'),
};

const getPhotos = async e => {
  e.preventDefault();
  Notiflix.Loading.standard({
    backgroundColor: 'transparent',
    cssAnimationDuration: 800,
  });
  const search = refs.input.value;
  const order = refs.sorting.value;

  e.type === 'submit' || e.type === 'change' ? onSubmit() : (currentPage += 1);

  try {
    const response = await axios.get(
      `${BASE_URL}?${API_KEY}${PARAMS}&q=${search}&page=${currentPage}&order=${order}`
    );

    refs.load.classList.remove('hide');

    response.data.total == 0 ? emptySearch() : '';

    e.type === 'submit' && response.data.total !== 0
      ? Notiflix.Notify.success(
          `Hooray! We found ${response.data.totalHits} images.`
        )
      : '';

    currentPage > response.data.totalHits / 40 && response.data.total !== 0
      ? endSearch()
      : '';

    insertContent(response.data.hits);
    lightbox.refresh();

    e.type === 'click' ? scrolling() : '';
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
};

refs.top.addEventListener('click', goToTop);
refs.form.addEventListener('submit', getPhotos);
refs.load.addEventListener('click', getPhotos);
refs.sorting.addEventListener('change', getPhotos);
