function onVideoClick() {
  const container = document.querySelector('.video__container');
  const videoIframe = document.querySelector('.video__iframe');
  container.style.display='none';
  videoIframe.style.display='block';
}

const container = document.querySelector('.video__container');
container.addEventListener('click', onVideoClick);
