const hello = document.querySelector(".hello"),
     body=document.querySelector("body"),
     img=document.querySelector(".finally-img");


const CURRENT_NAME = "currentName";
const JIAN="jian";

function paintName(text){
    hello.innerText=`안녕하세요 ${text}님`;
    paintImg(text);
}
function paintImg(text){
    const image = new Image();
    image.src=`${text}.jpg`;
    img.appendChild(image);
}

function init(){
    const currentName=localStorage.getItem(CURRENT_NAME);
    paintName(currentName);
}
init();