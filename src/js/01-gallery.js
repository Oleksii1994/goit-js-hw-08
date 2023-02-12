import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const imageMarkup = createGalleryItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imageMarkup);

function createGalleryItemsMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
     <li><a class="gallery__item" href="${original}">
      <img src="${preview}" alt="${description}" class="gallery__image">
     </a></li>
   `;
    })
    .join("");
}
new SimpleLightbox(".gallery__item", {
  captionDelay: 250,
  captionsData: "alt",
  scrollZoom: false,
});
