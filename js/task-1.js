const elements = document.querySelectorAll(".item");
console.log(`Number of categories: ${elements.length}`);

elements.forEach((element) => {
  const category = element.querySelector("h2").textContent;
  const elementsLi = element.querySelectorAll("li").length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elementsLi}`);
});
