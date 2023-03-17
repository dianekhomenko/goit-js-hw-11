import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const API_KEY = 'key=34409732-2eb98e59aad866aa53f09776f';
export const BASE_URL = 'https://pixabay.com/api/';
export const PARAMS =
  '&image_type=photo&orientation=horizontal&safesearch=true&per_page=100';

const savedGallery = document.querySelector('.saved-gallery');
const clearButton = document.querySelector('.clear');

let storage = localStorage.getItem('savedId');

const getSavedPhotos = async e => {
  Notiflix.Loading.standard({
    backgroundColor: 'transparent',
    cssAnimationDuration: 800,
  });
  let goodStorage = storage.split(',');
  console.log(goodStorage);
  for (const item of goodStorage) {
    try {
      const response = await axios.get(
        `${BASE_URL}?${API_KEY}${PARAMS}&id=${item}&order=popular`
      );

      insertContent(response.data.hits);

      lightbox.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      Notiflix.Loading.remove();
    }
  }
};

const createLi = item =>
  `<div class="photo-card" data-id="${item.id}">
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
  savedGallery.insertAdjacentHTML('beforeend', result);
};

export const lightbox = new SimpleLightbox('.photo-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});

storage != null ? getSavedPhotos() : blancSave();

function blancSave() {
  clearButton.classList.add('hidden');
  savedGallery.innerHTML = '';
}

function clearStorage() {
  localStorage.removeItem('savedId');
  blancSave();
}

clearButton.addEventListener('click', clearStorage);
