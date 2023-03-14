import Notiflix from 'notiflix';
import axios from 'axios';

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

let currentPage = 1;

const getPhotos = async e => {
  e.preventDefault();
  if (e.type === 'submit') {
    refs.gallery.innerHTML = '';
  }
  const search = refs.input.value;

  try {
    const response = await axios.get(
      `${BASE_URL}?${API_KEY}${PARAMS}&q=${search}&page=${currentPage}`
    );
    refs.load.classList.remove('hide');
    if (e.type === 'click') {
      currentPage += 1;
    }
    if (response.data.total == 0) {
      refs.load.classList.add('hide');
      Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    insertContent(response.data.hits);
    

    if (
      currentPage > response.data.totalHits / 40 &&
      response.data.total !== 0
    ) {
      refs.load.classList.add('hide');
      Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const createLi = item =>
  `<div class="photo-card">
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
</div>`;

const generateContent = array =>
  array.reduce((acc, item) => acc + createLi(item), '');

const insertContent = array => {
  const result = generateContent(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);
};

refs.form.addEventListener('submit', getPhotos);
refs.load.addEventListener('click', getPhotos);
