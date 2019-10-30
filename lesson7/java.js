
//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll('img[data-src]')
//parameters set for the IntersectionObserver
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

const loadImages = (images) => {
    image.setAttribute('src', image.getattribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
        };
    };

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver ((items, observer) => {
        items.forEach((item) => {
            if(items.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(items.target);
            }
          });
        }, imgOptions);
//loop through images, load if necessary
imagesToLoad.forEach((img) => {
    observer.observe(img);
});
}   else{ //load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


