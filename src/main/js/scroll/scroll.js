export function onScrollHandler() {
  document.addEventListener('scroll', onScroll);
}

function onScroll() {
  const nav = document.querySelector('header').offsetHeight;
  const curPos = window.scrollY + nav;
  const sections = document.querySelectorAll('body>section');
  const links = document.querySelectorAll('.navigation__item');
  sections.forEach((el) => {
    if (el.offsetTop <= curPos && el.offsetTop + el.offsetHeight > curPos) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (
          el.id ===
          link.querySelector('.navigation__item_link').innerHTML.toLowerCase()
        ) {
          link.classList.add('active');
        }
      });
    }
  });
}
