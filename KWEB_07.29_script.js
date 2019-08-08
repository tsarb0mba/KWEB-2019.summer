function change_menubar_position(){
    let menubar=document.getElementById("menu-bar");
    let landingpage_range=document.getElementById("Landingpage").offsetHeight;
    if(document.scrollingElement.scrollTop>landingpage_range){
        menubar.style.backgroundColor="white";
    }
    else{
        menubar.style.backgroundColor="transparent";
    }
}

function check_memo_length(){
    let memo=document.getElementById("Guest-memo-text").value;
    document.getElementById("Guest-memo-input").innerHTML=memo.length;
}

function upload_memo(){
    let text=document.getElementById("Guest-memo-text").value;
    let memo_list=document.getElementById("Guest-memo-list");
    if(text.length>400){
        alert("your input exceed 400 point.");
    }
    else{
        memo_list.innerHTML+="<div class='Guest-memo-list-element'>"+text+"</div>";
    }

    document.getElementById("Guest-memo-text").innerHTML="";
    
}

let guest_memo = document.getElementById("Guest-memo");
let button_click=document.getElementById("Guest-memo-button");

document.addEventListener('scroll', () => change_menubar_position());
guest_memo.addEventListener('keyup',() => check_memo_length());
button_click.addEventListener("click",() => upload_memo());