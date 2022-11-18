$(document).ready(function () {
  display("");
});

$("#input").on("keyup", function () {
  console.log($("#input").val());
  display($("#input").val());
});

function details(id) {
  localStorage.setItem("id", id);
  location.href = "drink.html";
}

function display(inp) {
  $.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a",
    function (data) {
      var dataa = data.drinks;
      $(".row").html("");
      for (let i = 0; i < 25; i++) {
        if (dataa[i].strDrink.toLowerCase().includes(inp)) {
          var text = `
        <div class="col-3 m-3 position-relative" onclick="details(${dataa[i].idDrink})">
        <img
          src="${dataa[i].strDrinkThumb}"
          class="w-100 rounded"
          style="border: 10px solid white"
        />
        <div
          class="bg-dark text-white position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center fs-3 rounded p-3"
          style="height: 80px"
        >
        ${dataa[i].strDrink}
        </div>
        `;

          $(".row").append(text);
        }
      }
      if ($(".row").html() == "") {
        text = `
      <div class="h1 text-center">Sorry,Not found<div/>
      `;

        $(".row").append(text);
      }
    }
  );
}
