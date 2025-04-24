// script.js
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    { text: "I just want to tell you somthing ", gif: "https://gifdb.com/images/thumbnail/cute-cartoon-goma-sad-w5r83ltcc4zv6hi5.gif" },
    { text: "You’re the one I love the most in this whole world. 😍", gif: "https://www.bigfooty.com/forum/media/goma-heart-jumping-gif.165828/full" },
    { text: "When I’m with you, or just talking to you, no one else can make me smile the way you do. 💖", gif: "https://i.seadn.io/gae/BlI6BCnDTN1UgxXg1ujFhjv4Eg5E-WM_-1yhsJqKg20ug5p2mu_Uh4MflpwgXYPfLgYDiVZGT4LLPJToRnGanHyr6F8yB2HdabKofw?auto=format&dpr=1&w=1000" },
    { text: "Without you, life just... doesn’t feel like life.", gif: "https://media.tenor.com/gvrNb7dNKFQAAAAj/peach-goma-peach-and-goma.gif" },
    { text: "I wanted to tell you how much I love you — but words never felt enough.", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-A2PS0qxA63VuRzNLDU_ZOUr2bi7WVcrsRVBkWOGO1AfAo1m2KaxtoVjsByflYbvuFc&usqp=CAU" },
    { text: "So I tried to show it, in this little way.", gif: "https://i.pinimg.com/originals/62/59/f1/6259f15d830b56d23db317e4b19828f0.gif" },
    { text: "At the end of it all, there’s just one thing I truly want you to know...", gif: "https://media.tenor.com/G2tnkBFGsZkAAAAM/peach-and-goma-goma-and-peach.gif" },
    { text: "I love you. So, so much. Kavee 💖", gif: "https://gifdb.com/images/high/peach-and-goma-smooching-cute-cats-p4j8su84zciic9he.gif" },
    { text: "And in the end...", gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyshlr5n8naY_ILIx2oAXfHL0m-Sa3K4EGMOA615D_zZvg12zsE0h38s-y-nNiHMrG2t8&usqp=CAU" },
    { text: "I still find myself whispering the same little question—", gif: "https://i.pinimg.com/originals/16/73/c1/1673c11056581664f508caefb8c737b8.gif" },
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
