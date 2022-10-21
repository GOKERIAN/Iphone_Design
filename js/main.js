let mainImage = document.getElementById("master");
let container = document.querySelector(".container");
let collspan = document.querySelector(".icon #collspan");

function changePhone(phone) {
  mainImage.src = phone;
}
function changeColor(color) {
  container.style.backgroundColor = color;
}

function toggleLink() {
  let theList = document.querySelector(" header ul");
  
  if (theList.style.display === "none") {
    theList.style.display = "block";
  } else {
    theList.style.display = "none";
  }
}



collspan.onclick = toggleLink;
