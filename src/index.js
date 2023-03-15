import Notiflix from 'notiflix';
import axios from 'axios';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = 'key=34409732-2eb98e59aad866aa53f09776f';
const BASE_URL = 'https://pixabay.com/api/';
const PARAMS =
  '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

const refs = {
  input: document.querySelector('input'),
  form: document.querySelector('.search-form'),
  gallery: document.querySelector('.gallery'),
  load: document.querySelector('.load-more'),
};

let currentPage;

function emptySearch() {
  refs.load.classList.add('hide');
  Notiflix.Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function endSearch() {
  refs.load.classList.add('hide');
  Notiflix.Notify.info(
    "We're sorry, but you've reached the end of search results."
  );
}

function scrolling() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function onSubmit() {
  refs.gallery.innerHTML = '';
  currentPage = 1;
}

const getPhotos = async e => {
  e.preventDefault();
  Notiflix.Loading.standard({
    backgroundColor: 'transparent',
    cssAnimationDuration: 800,
  });
  const search = refs.input.value;

  e.type === 'submit' ? onSubmit() : (currentPage += 1);

  try {
    
    const response = await axios.get(
      `${BASE_URL}?${API_KEY}${PARAMS}&q=${search}&page=${currentPage}`
    );

    refs.load.classList.remove('hide');

    response.data.total == 0
      ? emptySearch()
      : '';
    currentPage > response.data.totalHits / 40 && response.data.total !== 0
      ? endSearch()
      : '';

    insertContent(response.data.hits);
    lightbox.refresh();
 
  
    e.type === 'click'
      ? scrolling()
      : Notiflix.Notify.success(
          `Hooray! We found ${response.data.totalHits} images.`
        );
  } catch (error) {
    console.log(error);
  } finally {
    Notiflix.Loading.remove();
  }
};

const createLi = item =>
  `<div class="photo-card">
  <a href="${item.largeImageURL}">
  <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" width="320" height="200"/>
  <div class="info">
    <p class="info-item">
      <b>Likes</b>${item.likes}
    </p>
    <p class="info-item">
      <b>Views</b>${item.views}
    </p>
    <p class="info-item">
      <b>Comments</b>${item.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b>${item.downloads}
    </p>
  </div>
  </a>
</div>`;

const generateContent = array =>
  array.reduce((acc, item) => acc + createLi(item), '');

const insertContent = array => {
  const result = generateContent(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);
};

refs.form.addEventListener('submit', getPhotos);
refs.load.addEventListener('click', getPhotos);

const lightbox = new SimpleLightbox('.photo-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});