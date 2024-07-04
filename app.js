const cards = document.querySelector(".mini-cont");
const loader = document.querySelector(".loader");
fetch("https://cars-pagination.onrender.com/all-countries", {
  method: "GET",
})
  .then(function (response) {
    if (response.status == 200) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    cards.style.display = "block";
    cards.style.display = "flex";
    data.forEach((value) => {
      let card = createCard(value);
      cards.innerHTML += card;
    });
  })
  .finally(function () {
    loader.style.display = "none";
  });
function createCard(value) {
  return `<div class="card"><img
            src="${value.flag}"
            alt=""
            class="card-img"
            width="370px"
            height="300px"
          />

          <div class="div">
            <h1 class="card-text">Name: ${value.country}</h1>
            <h3 class="card-p">code: ${value.code}</h3>
            <h3 class="card-id">id: ${value.id}</h3>
          </div>`;
}
