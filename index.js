const apiUrl = 'https://api.unsplash.com/photos/?client_id= S0cbfg11bqrvrnYPVgEA7HvvgBxqeR4rYrwxSIEymts'

function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(
        body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight
    );
};

function getScrollTop() {
    return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function generateImageSourceUrl() {
    const hash = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return 'https://api.unsplash.com/photos/?client_id= S0cbfg11bqrvrnYPVgEA7HvvgBxqeR4rYrwxSIEymts';
}

function getElementImage() {
    const cssImageClass = 'element-list__item__image';
    const cssImageLoadingClass = `${cssImageClass}--loading`;
	
    const image = new Image;
    image.className = `${cssImageClass} ${cssImageLoadingClass}`;
    image.src = generateImageSourceUrl();
    image.onload = function () {
        setTimeout(() => image.classList.remove(cssImageLoadingClass),5000)
    };

    return image;
}

function getElement() {
    const elementImage = getElementImage();
    const element = document.createElement('div');
    element.className = 'element-list__item';
    element.appendChild(elementImage);
    return element;
}

function loadNextBatch(batchSize = 9) {
    while (batchSize--) {
			  const element = getElement();
        elementList.appendChild(element);
    }
}

const elementList = document.querySelector('.element-list');

// Load the first batch of elements
loadNextBatch();

// Load more batches when scorlling to the end
window.onscroll = function () {
    if (getScrollTop() < getDocumentHeight() - window.innerHeight) return;
    loadNextBatch();
};