const categoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach(function (categorie) {
  console.log(`Categorie: ${categorie.firstElementChild.textContent}`);
  console.log(`Elements: ${categorie.lastElementChild.children.length}`);
});
