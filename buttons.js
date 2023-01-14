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

class WaveButton extends Button {
    constructor(element) {
        super(element);
        element.style.overflow = 'hidden';
    }

    onClick(e) {
        const x = e.target.offsetLeft + e.offsetX;
        const y = e.target.offsetTop + e.offsetY;
        const wave = document.createElement('div');
        wave.style.display = 'block';
        wave.style.position = 'absolute';
        wave.style.height = 0;
        wave.style.width = 0;
        wave.style.borderRadius = '100%';

        const color = [...this.element.classList].find(c => ['blue', 'green', 'red'].includes(c));
        wave.style.backgroundColor = `var(--lighter-${color})`;
        wave.style.transition = 'width 800ms ease-in-out, height 800ms ease-in-out, background-color 700ms ease-in-out';
        
        this.element.prepend(wave);

        setTimeout(() => {
            wave.style.top = y + 'px';
            wave.style.left = x + 'px';
            wave.style.transform = 'translate(-50%, -50%)';
            wave.style.height = '600px';
            wave.style.width = '600px';
            wave.style.backgroundColor = 'transparent';
        }, 0);

        setTimeout(() => {
            wave.remove();
        }, 800);
    }
}

class ShineButton extends Button {
    constructor(element) {
        super(element);
        element.style.overflow = 'hidden';
        this.timeout = undefined;
    }

    onClick(e) {
        this.element.classList.toggle('selected', false);
        clearTimeout(this.timeout);
        setTimeout(() => {
            this.element.classList.toggle('selected', true);
        }, 0);

        this.timeout = setTimeout(() => {
            this.element.classList.toggle('selected', false);
        }, 800);
    }
}