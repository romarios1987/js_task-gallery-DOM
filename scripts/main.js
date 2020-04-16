
'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', e => {
  e.preventDefault();

  const thumbLink = event.target.closest('.list-item__link');

  if (!thumbLink) {
    return;
  }

  largeImg.src = thumbLink.href;
  largeImg.alt = thumbLink.title;
});
