let mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY - 12 + "px";
  mouseCursor.style.left = e.pageX - 12 + "px";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};
