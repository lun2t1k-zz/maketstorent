// scroll block
const disableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;
  
  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: &{widthScroll}px;
  `;
}

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY
  });
}

// modal
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const modalOpen = () => {
  overlay.classList.add('overlay-open');
  disableScroll();
}

const modalClose = () => {
  overlay.classList.remove('overlay-open');
  enableScroll();
}

modal.addEventListener('click', modalOpen);

overlay.addEventListener('click', event => {
  const target = event.target;

  if (target.matches('.popup-close') || target.matches('.overlay')) {
    modalClose();
  }
});