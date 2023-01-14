'use strict';

class BC {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', this.onClick.bind(this));
    }

    onClick(e) {
        this.element.classList.toggle('selected');
    }
}

class Flood {
    constructor(elem) {
        this.elem = elem;
    }
}