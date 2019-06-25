class Carousel {
    constructor(carousel){
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');
        this.currentIndex = 0;
        this.images[this.currentIndex].style.display = 'block';

        this.leftBtn.addEventListener('click', () => this.slideLeft())
        this.rightBtn.addEventListener('click', () => this.slideRight())
    }

    slideLeft(){
        if ((this.currentIndex - 1) < 0){
            this.currentIndex = this.images.length-1;
        } else {
            this.currentIndex -= 1;        
            }
            this.images.forEach(image => image.style.display = "none");
            this.images[this.currentIndex].style.display = "block"; 
        }
    
     slideRight(){
        this.currentIndex += 1;
        if (this.currentIndex >= this.images.length){
            this.currentIndex = 0;
        }
        this.images.forEach(image => image.style.display = "none");
        this.images[this.currentIndex].style.display = "block";
    }
}

let carousel = document.querySelector('.carousel');

new Carousel(carousel);
