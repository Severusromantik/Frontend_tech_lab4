// Зміна кольорів
const targetId = document.getElementById('target-id');

if (targetId) {
    targetId.addEventListener('click', function() {
        this.classList.toggle('color-toggle-id'); 
    });
}

const targetQuery = document.querySelector('#target-query'); 

if (targetQuery) {
    targetQuery.addEventListener('click', function() {
        this.classList.toggle('color-toggle-query'); 
    });
}



// Керування зображенням
const image = document.getElementById('main-image');
const addBtn = document.getElementById('add-btn');
const increaseBtn = document.getElementById('increase-btn');
const decreaseBtn = document.getElementById('decrease-btn');
const removeBtn = document.getElementById('remove-btn');

const originalSrc = image.src;
let currentWidth = image.width;
let isRemoved = false; 

addBtn.addEventListener('click', function() {
    if (isRemoved) {
        image.src = originalSrc;
        image.width = currentWidth; 
        image.style.display = 'block'; 
        isRemoved = false;
    }
});

increaseBtn.addEventListener('click', function() {
    if (!isRemoved) {
        currentWidth = currentWidth * 1.3; 
        image.width = currentWidth;
    }
});

decreaseBtn.addEventListener('click', function() {
    if (!isRemoved) {
        currentWidth = currentWidth * 0.7; 
        image.width = currentWidth;
    }
});

removeBtn.addEventListener('click', function() {
    if (!isRemoved) {
        image.style.display = 'none'; 
        isRemoved = true;
    }
});