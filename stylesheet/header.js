var prevScrollpos = window.pageYOffset;
var headerDiv = document.querySelector("header");
var threshold = 200; 

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  // Only start hiding after scrolling past threshold
  if (currentScrollPos > threshold) {
    if (prevScrollpos <= currentScrollPos) {
      headerDiv.classList.remove("fixedToTop");
      headerDiv.style.top = "-10rem";
    } else {
      headerDiv.classList.add("fixedToTop");
      headerDiv.style.top = "0";
    }
  } else {
    // Always keep header visible before reaching threshold
    headerDiv.classList.add("fixedToTop");
    headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};