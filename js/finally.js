const hello = document.querySelector(".hello"),
     body=document.querySelector("body"),
     img=document.querySelector(".finally-img");


const CURRENT_NAME = "currentName";


function paintName(text){
    hello.innerText=`안녕하세요 ${text}님`;
    paintImg(text);
}


function init(){
    const currentName=localStorage.getItem(CURRENT_NAME);

}
init();