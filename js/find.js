const input = document.querySelector("input"),
        form=document.querySelector(".find-form"),
      greeting=document.querySelector(".greeting"),
      check=document.querySelector(".find-login");
      
      const CURRENT_NAME="currentName",
      SHOWING_CN="showing",
      FIND_NAME="find-name",
      LOGIN="find-login";

function saveName(text){
    localStorage.setItem(CURRENT_NAME,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
  }

function loadName(){
    const currentName=localStorage.getItem(CURRENT_NAME);
    if(currentName===null){
        askForName();
    }else{
        paintGreeting(currentName);
    }
}
function checking(){
    const currentName=localStorage.getItem(CURRENT_NAME);
    if(currentName===null){
        alert('이전페이지로 돌아가서 이름을 입력해주세요');
    }
}
function init(){
    loadName();
    check.addEventListener("click",checking);
    
}
init();