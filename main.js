let options = document.getElementsByClassName('option');

let selectEle = document.querySelector('.select');

let optionList = document.querySelector('.option-list');

let icon = document.querySelector('.icon');

let dropdown = document.querySelector('.dropdown-select');

dropdown.onclick = function(){
    optionList.classList.toggle('active');
    icon.innerHTML ="&#9660"
}

for(op of options){
    op.onclick = function(){
        selectEle.innerText = this.innerText;
        optionList.classList.toggle('active');
        icon.innerHTML ="&#9650"
    }
}
