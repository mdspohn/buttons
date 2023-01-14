'use strict';

class Button {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', this.onClick.bind(this));
        this.element.addEventListener('contextmenu', this.onRightClick.bind(this));
    }

    onClick(e) {
        // Abstract
    }

    onRightClick(e) {
        // Abstract
    }
}

class CoursewareButton extends Button {
    constructor(element) {
        super(element);
    }

    onClick(e) {
        this.element.classList.toggle('selected');
    }

    onRightClick(e) {
        this.element.classList.toggle('disabled');
        e.preventDefault();
    }
}

class StandardButton extends Button {
    constructor(element) {
        super(element);
    }

    onClick(e) {
        this.element.classList.toggle('selected');
    }

    onRightClick(e) {
        this.element.classList.toggle('disabled');
        e.preventDefault();
    }
}

class FloodButton extends Button {
    constructor(element) {
        super(element);
    }

    onClick(e) {
        this.element.classList.toggle('selected');
    }
}

class WaveButton extends Button {
    constructor(element) {
        super(element);
    }

    onClick(e) {
        this.element.classList.toggle('selected');
    }
}