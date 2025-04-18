const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (e) => {
  const inputValueTrim = textInput.value.trim();

  output.textContent = inputValueTrim === "" ? "Anonymous" : inputValueTrim;
});
