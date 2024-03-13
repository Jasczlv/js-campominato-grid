const play = document.querySelector(".start");

const row = document.querySelector(".row.f-wrap");

// console.log(row);

play.addEventListener("click", function () {
  const facile = document.querySelector('input[value = "facile"]');
  console.log("pipino");
  let lato = 10;
  let quadrato = lato ** 2;
  for (i = 0; i < quadrato; i++) {
    const cell = document.createElement("div");
    row.append(cell);
    cell.className = "col-facile";
    cell.innerHTML = i + 1;
    cell.addEventListener("click", function () {
      cell.classList.toggle("col-clicked");
    });
  }
});

const media = document.querySelector('input[value = "media"]');
const difficile = document.querySelector('input[value = "difficile"]');
