function openRefLink1() {
  return window.open("https://forsage.io/i/dkcbre/", "_blank");
}

function openRefLink2() {
  return window.open("https://forsage.io/i/tkar8k/", "_blank");
}

function downloadPdf() {
  return window.open(
    "https://drive.google.com/file/d/1z10gAe_JgNm-CIhmYz3ZE1nY4DqwJKwp/view",
    "_blank"
  );
}

function openTelegram() {
  return window.open("https://t.me/joinchat/NOeW5BvoWEDyZKB3fYSWtg", "_blank");
}

// scroll to top functionality from w3school.com

//Get the button:
myButton = document.getElementById("myBtn");

// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
