import { refs } from '..';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createLi = item =>
  `<div class="photo-card" data-id="${item.id}">
  <button class="save" onclick="onClickSave()"></button>
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

export const generateContent = array =>
  array.reduce((acc, item) => acc + createLi(item), '');

export const insertContent = array => {
  const result = generateContent(array);
  refs.gallery.insertAdjacentHTML('beforeend', result);
};

export const lightbox = new SimpleLightbox('.photo-card a', {
  captionsData: 'alt',
  captionDelay: 250,
});