function sliderFunction() {
    const data = [
        "Never give up. Stay strong.",
        "Come on! You can do it !",
        "Sometimes later becomes never. Do it now.",
        "Great things never come from comfort zones.",
        "Dream it.  Wish it.  Do it.",
        "Success doesn’t just find you. You have to go out and get it.",
        "The harder you work for something, the greater you’ll feel when you achieve it.",
        "Set big goals. Dream bigger. Do bigger.",
        "Little things make big days.",
        "Push yourself, because no one else is going to do it for you"
    ];

    const bgColor = ['#CC0000', '#FF6600', '#FF3366', '#9933CC', '#003333', '#708090', '#04AA6D'];

    let count = 0;
    let slideCollection;

    function startFunction(event) {
        event.stopPropagation();
        this.classList.add('hide');
        start();
    }

    function start() {
        const outField = document.querySelector('body');
        for (let i = 0; i < data.length; i++) {
            let div = document.createElement('div');
            div.classList.add('slide');
            if (i !== 0) div.classList.add('hide');
            if (i === 0) div.style.background = bgColor[randomInteger(0, bgColor.length - 1)];
            let text = document.createElement('div');
            text.textContent = data[i];
            div.append(text);
            outField.append(div);
        }
        outField.onclick = showSlide;
        slideCollection = document.querySelectorAll('.slide');
    }

    function showSlide(event) {
        hideSingleSlide(count);
        if (count + 1 < data.length) {
            count++;
        }
        else {
            count = 0;
        }
        showSingleSlide(count);
    }

    function showSingleSlide(n) {
        slideCollection[n].classList.remove('hide');
        slideCollection[n].style.background = bgColor[randomInteger(0, bgColor.length - 1)];
    }

    function hideSingleSlide(n) {
        slideCollection[n].classList.add('hide');

    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    document.querySelector('.btn-start').onclick = startFunction;
}

document.addEventListener("DOMContentLoaded", sliderFunction);
