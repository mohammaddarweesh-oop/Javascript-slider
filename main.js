// array of imag 

let imagesList = Array.from(document.querySelectorAll('.slider-container img'));
// number of images
let slideCounts = imagesList.length;
// start image in slide
let currentSlide = 1;
// label on slides #number
let slideNumberElement = document.getElementById('slider-number');
//BTN next
let btnNext = document.getElementById("next");
//btn previus 
let btnPrevius = document.getElementById('prev');


// Handle click on previus and next button


btnNext.onclick = next;
btnPrevius.onclick = previus;


//
let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id','pagination-ul');






function next(){
    // if (currentSlide < 7) {
    //     currentSlide++;
    // }
    // theCheker();

    if (btnNext.classList.contains("disable")) {
        return false;
    }else {
        currentSlide++;
        theCheker();
    }
}
function previus(){
    if (btnPrevius.classList.contains("disable")) {
        return false;
    }
    else {
        currentSlide--;
        theCheker();
    }
    // if (currentSlide > 1) {
    //     currentSlide--;
    // }
    
    // theCheker();
}




for (let i = 1; i <= slideCounts; i++) {

    let paginationItem = document.createElement('li');

    paginationItem.setAttribute('data-index', i);

    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);

    
}


document.getElementById("indecator").appendChild(paginationElement);

let paginationCreatedUL = document.getElementById('pagination-ul');

paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));


for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = () => {
        
        currentSlide = parseInt(paginationBullets[i].getAttribute('data-index'));
        theCheker();
        

    };
    
}



theCheker();

function theCheker(){
    slideNumberElement.textContent = `Slide #${currentSlide} of ${slideCounts}`;
    if (currentSlide === 1) {
        btnPrevius.classList.add("disable");
    }
    else if (currentSlide > 0) {
        btnPrevius.classList.remove("disable");
    }
    if ( currentSlide === imagesList.length   ){
        btnNext.classList.add("disable");
    }
    else if (currentSlide < imagesList.length - 1 ) {
        btnNext.classList.remove("disable");
    }


    removeActive();
    

    imagesList[currentSlide - 1].classList.add("active");
    
    // paginationCreatedUL.children.forEach( function (img) {
    //     img.classList.remove("active");
    // })

    paginationCreatedUL.children[currentSlide - 1].classList.add("active");
    
};

function removeActive() {
    imagesList.forEach((image) => {
        image.classList.remove("active");
    });
    paginationBullets.forEach(bullet => {
        bullet.classList.remove("active");
    });
};

let indecator = document.getElementById('indecator');
indecator.appendChild(paginationElement);
