let mouseCursor = document.querySelector(".cursor");
    
window.addEventListener("mousemove",cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY - 12 + "px";
    mouseCursor.style.left = e.pageX - 12 + "px";
}
