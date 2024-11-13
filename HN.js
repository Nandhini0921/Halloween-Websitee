let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

// scroll spy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

};

window.onload = () =>{
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
})

function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput === "") return;

  // Append user message to chat
  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.innerText = userInput;
  document.getElementById("chat-body").appendChild(userMessage);

  // Clear input
  document.getElementById("user-input").value = "";

  // Scroll to the bottom of the chat body
  const chatBody = document.getElementById("chat-body");
  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulate bot response
  setTimeout(() => {
      const botMessage = document.createElement("div");
      botMessage.className = "bot-message";
      botMessage.innerText = generateBotResponse(userInput);
      chatBody.appendChild(botMessage);
      chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}

// Generate a basic bot response based on user input
function generateBotResponse(userInput) {
  if (userInput.toLowerCase().includes("hello")) {
      return "Hello! How can I help you today?";
  } else if (userInput.toLowerCase().includes("i need a favor")) {
      return "Sure what kind of favor?";
  } else if (userInput.toLowerCase().includes("offer")) {
      return "many offers available in our website";
  } 
  else if (userInput.toLowerCase().includes("bye")) {
      return "Goodbye! Have a great day!";
  } 
      
  else {
      return "I'm here to chat! Feel free to ask any questions.";
  }
}

// Toggle chat visibility
function toggleChat() {
  const chatWidget = document.getElementById("chat-widget");
  chatWidget.classList.toggle("open");
}