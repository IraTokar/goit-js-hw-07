import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItemsMarkup(galleryItems);

function galleryItemsMarkup(item) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
                <div class="gallery__item">
                <a class="gallery__link" href="${original.value}">
                <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
                </a></div>
                `
    }).join('');
};

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


galleryContainer.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();

    if (evt.target.classList.contains("gallery")) return;

    const source = evt.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${source}" width="800" height="600">`
    );

    instance.show();


}

