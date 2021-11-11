const catBtn = document.querySelector('#cat-btn');
const dogBtn = document.querySelector('#dog-btn');
const unicornBtn = document.querySelector('#unicorn-btn');
const infoP = document.querySelector('#info')

function get(url) {
    fetch(`http://localhost:3000/${url}`)
        .then(r => r.json())
        .then(data => {
            console.log(data[url].join(', '));
            infoP.textContent = `${url.charAt(0).toUpperCase() + url.slice(1)}: ${data[url].join(', ')}`;
        })
}

function init() {
    catBtn.addEventListener('click', e => {
        console.log("clicked");
        get('cats');
    });
    dogBtn.addEventListener('click', e => {
        console.log("clicked");
        get('dogs');
    });
    unicornBtn.addEventListener('click', e => {
        console.log("clicked");
        get('unicorns');
    })
}

function createPElement(content) {
    const newP = document.createElement('p');
    newP.textContent = content;
    document.body.appendChild(newP);
}

init();