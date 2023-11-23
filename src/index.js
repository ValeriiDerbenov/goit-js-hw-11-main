import Notiflix from "notiflix";
const axios = require("axios");
import { Notify } from "notiflix/build/notiflix-notify-aio";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const URL = "https://pixabay.com/api";
const KEY = "40826699-b7bef6c2b5cf50adc3ffa0ee2";

function createImagesListMarkup(items) {
  return items
    .map(
      ({
        likes,
        views,
        comments,
        downloads,
        tags,
        webformatURL,
        largeImageURL,
      }) => {
        return `
<div class="photo-card">
<a href="${largeImageURL}" class="gallery__item">
<img src="${webformatURL}" alt="${tags}" loading="lazy" />
</a>
<div class="info">
	<p class="info-item">
		<b>Likes</b><span>${likes}</span>
	</p>
	<p class="info-item">
		<b>Views</b><span>${views}</span>
	</p>
	<p class="info-item">
		<b>Comments</b><span>${comments}</span>
	</p>
	<p class="info-item">
		<b>Downloads</b><span>${downloads}</span>
	</p>
</div>
</div>
`;
      }
    )
    .join("");
}
