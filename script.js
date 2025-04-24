// script.js
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    { text: "I just want to tell you somthing ", gif: "gif1.gif" },
    { text: "You’re the one I love the most in this whole world. 😍", gif: "gif2.gif" },
    { text: "When I’m with you, or just talking to you, no one else can make me smile the way you do. 💖", gif: "gif3.gif" },
    { text: "Without you, life just... doesn’t feel like life.", gif: "gif4.gif" },
    { text: "I wanted to tell you how much I love you — but words never felt enough.", gif: "images.png" },
    { text: "So I tried to show it, in this little way.", gif: "gif5.gif" },
    { text: "At the end of it all, there’s just one thing I truly want you to know...", gif: "gif6.gif" },
    { text: "I love you. So, so much. Kavee 💖", gif: "gif7.gif" },
    { text: "And in the end...", gif: "images2.png" },
    { text: "I still find myself whispering the same little question—", gif: "gif8.gif" },
  ];

  let index = 0;
  const heartBtn = document.getElementById("heart-btn");
  const messageEl = document.getElementById("message");
  const gifEl = document.getElementById("gif");
  const controls = document.getElementById("controls");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const finalQ = document.getElementById("final-question");
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const clickText = document.getElementById("click-text");

  heartBtn.addEventListener("click", () => {
    heartBtn.style.display = "none";
    clickText.style.display = "none";
    showMessage();
    controls.classList.remove("hidden");
  });

  function showMessage() {
    messageEl.textContent = messages[index].text;
    gifEl.src = messages[index].gif;
    gifEl.classList.remove("hidden");
    messageEl.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", () => {
    if (index < messages.length - 1) {
      index++;
      showMessage();
    } else {
      controls.classList.add("hidden");
      messageEl.classList.add("hidden");
      gifEl.classList.add("hidden");
      finalQ.classList.remove("hidden");
    }
  });

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      showMessage();
    }
  });

  noBtn.addEventListener("click", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });

  yesBtn.addEventListener("click", () => {
    emailjs.init("gZ4YnR_Dww6PkeK3d"); // Replace with your EmailJS user ID
    emailjs.send("service_qf885lk", "template_aby80qg", {
      message: "She clicked YES! 💕",
    })
    .then(() => alert("Email sent!"))
    .catch((error) => console.error("Email error:", error));
  });
});
