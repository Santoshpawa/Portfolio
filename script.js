//  Typer writer effect at the top

const texts = [
  "Hi, I'm Santosh.",
  "Full Stack Developer.",
  "Problem Solver.",
  "Tech Enthusiast.",
];

function stop(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const display = document.getElementById("typewriter");
let str = "";
async function typeEffect(i) {
  if (i == 4) {
    i = 0;
  }

  let j = 0;
  while (str.length < texts[i].length) {
    str += texts[i][j++];
    display.innerText = str;
    await stop(100);
  }

  await stop(1000);

  while (str.length > 0) {
    str = display.innerText.substring(0, j - 1);
    --j;
    display.innerText = str;
    await stop(50);
  }
  typeEffect(i + 1);
}

typeEffect(0);

// Resume button
function handleResume() {
  window.open(
    "https://drive.google.com/file/d/1F0DPy3Q1rKJgjrDRO349VKHclhjYYg7k/view"
  );
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/uc?export=download&id=1F0DPy3Q1rKJgjrDRO349VKHclhjYYg7k";
  link.download = "Santosh_Resume.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click(); // Triggers the download
  document.body.removeChild(link);
}

// handel email

async function handleemail(e) {
  console.log("inside handleemail function.");
  e.preventDefault();

  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  try {
    await emailjs.send("service_uig8kfs", "template_ps4f4eg", params);
    document.getElementById("emailMessage").innerText = "Email send.";
    document.getElementById("emailMessage").style.color = "Green";
    await stop(5000);
    document.getElementById("emailMessage").innerText = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  } catch (error) {
    document.getElementById("emailMessage").innerText = "Email not send.";
    document.getElementById("emailMessage").style.color = "Red";
    await stop(5000);
    document.getElementById("emailMessage").innerText = "";
  }
}
