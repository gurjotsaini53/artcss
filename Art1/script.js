const container = document.querySelector(".main2");
let limit = 700;

for (let i = 1; i < limit; i++) {
  let star = document.createElement("div");
  star.classList = "star";
  star.style.marginTop = parseInt(Math.random() * 400) + "px";
  star.style.marginLeft = parseInt(Math.random() * 400) + "px";
  star.style.left = parseInt(Math.random() * 30);
  container.append(star);
}
