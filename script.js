function start() {
  let output = document.getElementById("output");
  output.innerHTML = "";

  let yourName = prompt("Hiii, what is your name? 🥺👉👈");
  let yourAge = prompt("Hiiiiii 👋 " + yourName + ", what is your age?");

  if (yourAge >= 0 && yourAge <= 17) {
    alert("Awwn, minor 🥹 (don’t worry, you’ll glow soon 🌸)");
  } else if (yourAge >= 18 && yourAge <= 20) {
    alert("Ouu 🤭 so young & precious 😌");
  } else if (yourAge >= 21 && yourAge <= 30) {
    alert("Hmmm… big fish 😏✨");
  } else {
    alert("Yuck 😹 (jk age is just a number 💕)");
  }

  let hobbies = prompt("What are your hobbies 😏 " + yourName + "?");
  alert("WOW 🤭 those are really nice hobbies, I like that about you 😊");

  prompt("What do you like in a guy? 😌");
  alert("That’s sweet 😎 I’ll try to be that for you 💖");

  alert("Sooo... 👉👈 I gotta ask...");

  let likeCheck = prompt("Do you like me? 😺 (yes / maybe / no)");

  if (likeCheck.toLowerCase() == "yes") {
    let like = prompt("Omg really? 🥺 what do you like about me?");
    alert("Awnnn thank youuuu 🤗");
    alert("Do you know something?");
    alert("...I like you too 🙈");
    alert("Like... verrrryyyyyyyyyy mwuch 🙈❤️");
    alert("You're beautiful ✨");
    alert("You're smart 🧠");
    alert("God-fearing 🙏");
    alert("Funny 😂");
    alert("You’ve got such a lovely smile 💕");
    alert("And I admire how you’re trying to improve & get better 🌱");
    alert("Pink chiffon 😹");
    alert("smile small naww 😌");
    alert("Baby sugar 🍯");
    alert("Enweluzor baby 💫");
    alert("I love you 💘");
    alert("I love you, Bell 💝");
    alert("I want to be with you 💑");
    alert("Grow with you 🌱");
    alert("Let’s get that 690 million together 🤧💸");
    alert("I want dates with you, even if it’s just puff puff 😹");
    alert("Share happy moments 🌞 and sad ones too 🌧️");
    alert("I don’t wanna share you with anyone 😣");
    alert("you're very dear to me and i respect you alot✨");
    alert("black and white ☯️")
    alert("I want to hold your hand 🤝");
    alert("I want to hug you tight and never let go 🫂");
    alert("Kiss you 🙈💋");
    alert("Ask you about your faith ✝️");
    alert("Maybe even go to church with you 🙏💕");
    alert("I want a healthy Christian relationship with you ✨");
    alert("But I need to know how you feel about me too... 😣");
    alert("How you see me 👀");
    alert("What you think about me 🥺");
    alert("How you feel about me 💞");
    alert(
      "I wanna know if the person I’m choosing... is also choosing me too 😣"
    );
    alert("I wanna know what’s on your mind 🥺");
    alert("let's talk 😊");
    // pause here
    alert("So... Enweluzor Chukwumah Mabel Sochikamso..");

    let goOut = prompt(" will you go out with me? 🙈 (yess / no)");

    if (goOut.toLowerCase() == "yess") {
      output.innerText = `
If yes 👉 you're mine now 💏
I love you Bell 💖
I pray God helps us love and respect each other☺️
        `;
    } else if (goOut.toLowerCase() == "no") {
      output.innerText = `
That's okay we can take things slow 😣
I respect you and love care about you no matter what ✨`;
    } else {
      output.innerText = `
   Don't know what to say?
   Take your time i'm here with you`;
    }

    // alternatives if !yes
  } else if (likeCheck.toLowerCase() == "maybe") {
    output.innerText = `
maybe is honest... I respect that 🫶
We can take it slow, no pressure ❤️
I just like having you close ✨
        `;
  } else {
    output.innerText = `
         thank you for being honest ❤️
No matter what, you’re amazing and I respect you 🌸
        `;
  }
}

// Floating heart spawner
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 800);
