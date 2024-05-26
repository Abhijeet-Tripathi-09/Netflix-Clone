let contentElements = document.querySelectorAll('.content-1');
let content_1_img = document.querySelectorAll("#content-1-img");

// Add click event listeners to each content element
contentElements.forEach(function(contentElement) {
  contentElement.addEventListener('click', function() {
    // Toggle the visibility of the next sibling element with class answer-1
    let answer = this.nextElementSibling;
    let content_1_img = this.querySelector("i")
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      content_1_img.classList.add("fa-plus");
      content_1_img.classList.remove("fa-xmark");
    } else {
        answer.style.display = 'block';
        content_1_img.classList.remove("fa-plus");
        content_1_img.classList.add("fa-xmark");
    }
  });
});


// Click Button To Open New Page Of Sign In
let Sign_In = document.querySelector("#Sign-In");

Sign_In.addEventListener("click", function() {
    window.open("http://127.0.0.1:5500/Netflix-Clone/Netflix-SignIn/Netflix-SignIn.html");
})


// Click Logo And Referesh
let logo = document.querySelector(".logo");

logo.addEventListener("click", function() {
    location.reload();
})



// Check If Email Address Is Empty Or What
let emailAddress = document.querySelector("#email");
let getStarted = document.getElementsByTagName("button")[1];

const symbols = "!#$%&*<>{}[]/?-=";

getStarted.addEventListener('click', function() {
    if(emailAddress.value === ""){
      alert("Email is required.")
    }else {
      alert("Sign-Up Completed")
    }
});


