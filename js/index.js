const api = "https://goodfoodmood.monikalie.no/wp-json/wc/store/products";
const recipeList = document.querySelector(".recipes");

function displayRecipes(food) { 
document.querySelector(".loading").innerHTML = "";

food.forEach(function(recipe) {
    recipeList.innerHTML += `
                            <article class="recipe">
                            <a href="pages/detail.html">
                                <div class="img-hover-zoom">
                                    <img src="${recipe.images[0].src}" alt="${recipe.name}">
                                </div>
                                <div class="recipe-info">
                                    <h3>${recipe.name}</h3>
                                    <div class="recipe-details">
                                        <p><i class="fa fa-clock"></i> ${recipe.prices.price} min</p>
                                        <p><i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal</p>
                                    </div>
                                <div class="cta-btn">
                                    <a href="pages/detail.html">Get the recipe</a>
                                </div>
                                </div>
                                </a>
                            </article>
                          `
  });
}

async function getRecipes(url) {
  try {
  const response = await fetch(url);
  const recipes = await response.json();

  displayRecipes(recipes);

} catch(error) {
    recipeList.innerHTML = theError("Oh no!");

  } 
}
getRecipes(api);

// Searchfield
const searchButton = document.querySelector(".button");

searchButton.onclick = function() {
    document.querySelector(".loading").innerHTML = '<div class="loader"></div>';
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = api + `?search=${searchInput}`;
    recipeList.innerHTML = "";
    getRecipes(newUrl);
  } 

  // Categories 
  const categories = document.querySelectorAll(".categories");

  categories.forEach(function(category){

    category.onclick = function(event){
        document.querySelector(".loading").innerHTML = '<div class="loader"></div>';
      let newUrl;
      if (event.target.id === "featured") {
        newUrl = api + "?featured=true";
      }
      else {
        const categoryChosen = event.target.value;
        newUrl = api + `?category=${categoryChosen}` 
      }
      recipeList.innerHTML = ""; 
      getRecipes(newUrl);
    }
  });

  // subscribe field
  