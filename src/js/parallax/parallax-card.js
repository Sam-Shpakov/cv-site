import VanillaTilt from 'vanilla-tilt';

export function parallaxCardHandler(element) {
  let prefix = '';
  if (navigator.userAgent.indexOf('Edg') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('YaBrowser') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    prefix = '';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    prefix = '-moz-';
  } else {
    prefix = '-webkit-';
  }
  if (prefix === '') {
    return;
  }
  VanillaTilt.init(element, {
    max: 10,
    reverse: false,
    speed: 1000,
    perspective: 700,
    scale: 1.2,
    transition: true,
    reset: true,
    gyroscope: false,
  });
}

function transformElement(elementOne, elementTwo) {
  let myPanel = elementOne;
  let subpanel = elementTwo;

  let prefix = '';
  if (navigator.userAgent.indexOf('Edg') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('YaBrowser') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    prefix = '';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    prefix = '-moz-';
  } else {
    prefix = '-webkit-';
  }
  if (prefix === '') {
    return;
  }

  return function (mouseEvent) {
    let mouseX, mouseY;
    let transformAmount = 10;

    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.setAttribute(
      'style',
      `${prefix}transform: perspective(400px) rotateY(${
        percentX * transformAmount
      }deg) rotateX(${
        percentY * transformAmount
      }deg) scale(1.3); z-index: 2; cursor: pointer;`
    );
  };
}
function handleMouseEnter(element) {
  let subpanel = element;
  return function () {
    setTimeout(() => {
      subpanel.style.transition = '';
    }, 100);
    subpanel.style.transition = 'transform 0.1s';
  };
}

function handleMouseLeave(element) {
  let subpanel = element;
  let prefix = '';
  if (navigator.userAgent.indexOf('Edg') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('YaBrowser') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Safari') != -1) {
    prefix = '-webkit-';
  } else if (navigator.userAgent.indexOf('Firefox') != -1) {
    prefix = '-webkit-';
  } else {
    prefix = '-webkit-';
  }
  return function () {
    subpanel.style.transition = 'transform 0.1s';
    setTimeout(() => {
      subpanel.style.transition = '';
    }, 100);

    subpanel.setAttribute(
      'style',
      `${prefix}transform: perspective(400px) rotateY(0deg) rotateX(0deg); z-index: 0; cursor: pointer;`
    );
  };
}
