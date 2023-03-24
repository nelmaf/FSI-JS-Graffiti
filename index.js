
// Select some elements...
let header = document.querySelector('#page-header');
header.style.textAlign = "left";

let dogImages = document.querySelectorAll('.dog-image');
for (let i=0; i<dogImages.length; i++){
    dogImages[i].style.borderRadius='50px';
    dogImages[i].style.transform='scaleY(-1)';
}

let dogNames = document.querySelectorAll('.dog-name');
for (i=0; i<dogImages.length; i++){
    dogNames[i].style.textAlign = "left";
    dogNames[i].style.color="red";
}

let footer = document.querySelectorAll('.footer');
footer.style.backgroundcolor='blue';
//footer.style.borderStyle = 'Solid'
