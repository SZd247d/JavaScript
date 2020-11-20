// const TypeWritter = function(txtElement, words, wait) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.wait = +wait;
//     this.txt = '';
//     this.wordIndex = 0;
//     this.type();
//     this.isDeleting = false;

// }

// TypeWritter.prototype.type = function() {
//     const current = this.wordIndex % this.words.length;

//     const fullText = this.words[current];

//     if (this.isDeleting) {
//         this.txt = fullText.substring(0, this.txt.length - 1);
//     } else {
//         this.txt = fullText.substring(0, this.txt.length + 1);
//     }

//     this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`;

//     let typeSpeed = 300;
//     if (this.isDeleting) {
//         typeSpeed /= 2;
//     }

//     if (!this.isDeleting && this.txt === fullText) {
//         typeSpeed = this.wait;
//         this.isDeleting = true;
//     } else if (this.isDeleting && this.txt.length == 0) {
//         typeSpeed = 500;
//         this.isDeleting = false;
//         this.wordIndex++;
//     }



//     // console.log(fullText);
//     setTimeout(() => this.type(), typeSpeed);
// }


class TypeWritter {
    constructor(txtElement, words, wait) {
        this.txtElement = txtElement;
        this.words = words;
        this.wait = +wait;
        this.txt = '';
        this.wordIndex = 0;
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;

        const fullText = this.words[current];

        if (this.isDeleting) {
            this.txt = fullText.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullText.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt"> ${this.txt}</span>`;

        let typeSpeed = 300;
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullText) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt.length == 0) {
            typeSpeed = 500;
            this.isDeleting = false;
            this.wordIndex++;
        }



        // console.log(fullText);
        setTimeout(() => this.type(), typeSpeed);
    }
}


document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = ['Developper', 'Programmer', 'Designer'];
    const wait = txtElement.getAttribute('data-wait');


    new TypeWritter(txtElement, words, wait);
}