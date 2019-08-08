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

document.addEventListener('scroll', () => change_menubar_position());
