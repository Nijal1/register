const form = document.querySelector("form"),
  next = form.querySelector(".next"),
  back = form.querySelector(".back"),
  allInput = form.querySelectorAll(".first input");

next.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

back.addEventListener("click", () => form.classList.remove("secActive"));
