$(document).ready(function () {
  $.get(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a",
    function (data) {
      var dataa = data.drinks;
      var x = localStorage.getItem("id");
      $(".row").html("");
      for (let i = 0; i < 25; i++) {
        if (x == dataa[i].idDrink) {
          var text = `
          <div class="col-5 rounded">
          <img
            src="${dataa[i].strDrinkThumb}"
            class="w-100"
            style="border: 10px solid rgb(255, 193, 7)"
          />
        </div>
  
        <div class="col-5 rounded p-3">
          <h1>${dataa[i].strDrink}</h1>
          <p class="text-muted">
          ${dataa[i].strInstructions}
          </p>
          <div id="ing">
          <div/>
        </div>
        `;

          $(".row").append(text);

          for (let j = 1; j < 16; j++) {
            var deneme = `strIngredient${j}`;
            console.log(dataa[i][deneme]);
            if (dataa[i][deneme] != null) {
              var text2 = `
          <div><i class="fa-regular fa-square-check me-3"></i>${dataa[i][deneme]}</div>
          `;

              $("#ing").append(text2);
            }
          }
          var text3 = `
            <a class="btn btn-info text-white mt-4" href="index.html">
      ALL COCKTAILS
    </a>
            `;
          $(".row .col-5.rounded.p-3").append(text3);
        }
      }
    }
  );
});
