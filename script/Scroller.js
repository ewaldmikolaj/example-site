class Scroller {
    constructor() {
        this.button = document.querySelectorAll(".site-part");
        this.conntactButton = document.querySelector(".slider button");
        this.navbar = document.querySelector(".navbar-element");
        this.differenceY = this.getNavbarHeight(this.navbar);
        this.isEdge = this.isEdge();
        this.sections = document.querySelectorAll('.scroll-to');
        this.contactSection = document.querySelector('.contact');
        this.addScroll();
    }
    
    isEdge() {
        if (/Edge/.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }

    getNavbarHeight(element) {
        if (screen.width < 768) {
            return 60;
        } else {
            return element.getBoundingClientRect().height;
        }
    }
    
    getPosition(element) {
        return Math.ceil(element.getBoundingClientRect().top + window.scrollY - this.differenceY);
    }

    scroll(element) {
        if (!this.isEdge) {
            window.scrollTo({
                behavior: 'smooth',
                top: this.getPosition(element),
            });
        } else {
            window.scrollTo(0, this.getPosition(element));
        }
    }

    addScroll() {
        for (let i = 0; i < this.button.length; i++) {
            this.button[i].addEventListener('click', () => {
                this.scroll(this.sections[i]);
            });
        }
        this.conntactButton.addEventListener('click', () => {
            this.scroll(this.contactSection);
        });
    }
    
}