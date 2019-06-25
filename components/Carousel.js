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

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

new Carousel(carousel)