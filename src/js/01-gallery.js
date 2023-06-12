import { galleryItems } from "./gallery-items.js";
// Change code below this line
// Описаний в документації
import simpleLightbox from "simpleLightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
const items = [];

galleryItems.map((e) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = e.original;
  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = e.preview;
  galleryImage.setAttribute("title", e.description);
  galleryImage.alt = e.description;

  galleryLink.append(galleryImage);
  items.push(galleryLink);
});
gallery.append(...items);
