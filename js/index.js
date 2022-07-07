const api = "https://goodfoodmood.monikalie.no/wp-json/wc/store/products";
const categories = document.querySelectorAll(".categories");
const header = document.querySelector(".header-banner");
const recipeList = document.querySelector(".recipes");

function displayRecipes(food) { 
document.querySelector(".loading").innerHTML = "";

food.forEach(function(recipe) {
    recipeList.innerHTML += `
                            <article class="recipe">
                            <a href="pages/recipes.html?id=${recipe.id}">
                                <div class="img-hover-zoom">
                                    <img src="${recipe.images[0].src}" alt="${recipe.name}">
                                </div>
                                <div class="recipe-info">
                                    <h3>${recipe.name}</h3>
                                    <div class="recipe-details">
                                        <p><i class="fa fa-clock"></i> ${recipe.prices.price} min</p>
                                        <p><i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal</p>
                                    </div>
                                  <a class="cta" href="pages/recipes.html?id=${recipe.id}">Get the recipe</a>
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
    recipeList.innerHTML = theError("Failed to upload recipes!");
  } 
}
getRecipes(api);

// Searchfield
const searchButton = document.querySelector(".button");

searchButton.onclick = function() {
    document.querySelector(".loading").innerHTML = '<div class="loader"></div>';
    const searchInput = document.querySelector("#search-input").value;
    const newUrl = api + `?search=${searchInput}`;
    document.querySelector(".categories").style.display = "none";
    header.style.display = "none";
    recipeList.innerHTML = "";
    getRecipes(newUrl);
  } 

  // Categories 
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
