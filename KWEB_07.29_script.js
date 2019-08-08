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

let guest_memo = document.getElementById("Guest-memo");

document.addEventListener('scroll', () => change_menubar_position());
guest_memo.addEventListener('keyup',() => check_memo_length());