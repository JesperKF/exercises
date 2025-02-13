window.addEventListener("load", () => {
  const button = document.querySelector("button");
  const body = document.querySelector("body");
  let mouseMoved = false;

  setTimeout(() => {
    button.classList.add("animate");
  }, 500);

  button.addEventListener("animationend", () => {
    if (!mouseMoved) {
      document.body.style.backgroundColor = "red";
      button.style.display = "none";
    }
  });

  button.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
    button.style.display = "none";
  });

  body.addEventListener("mousemove", (evt) => {
    mouseMoved = true;
    console.log("move");
  });
});
